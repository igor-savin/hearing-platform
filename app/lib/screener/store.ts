// Lead storage in Postgres (Neon, added from the Vercel Marketplace).
//
// It talks to Neon over HTTPS (the same endpoint Neon's serverless driver uses),
// so no database package is needed. It reads DATABASE_URL, falling back to
// POSTGRES_URL; both are set automatically when a Neon database is connected to
// the Vercel project.
//
// When neither is set the screener still works: saveLead() returns
// { stored: false } and the staff alert email says it is the only record. That is
// deliberate, so the pages can ship before the database exists. It also means
// this file has NOT been exercised against a live database yet; the first real
// submission after DATABASE_URL is set is the test, and the staff alert will say
// whether storing worked.
//
// Server only.

import type { Summary, Trial } from "./scoring";

export type LeadInput = {
  practice: string;
  firstName: string;
  email: string;
  phone: string; // "" when not given
  consentEmail: boolean;
  consentCall: boolean;
  consentVersion: string;
  summary: Summary;
  screenerVersion: string;
  clinicalApproved: boolean;
  device: { mobile: boolean; speakers: boolean; sampleRate: number };
  trials: { both: Trial[]; left?: Trial[]; right?: Trial[] };
};

function connectionString() {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL || "";
}

async function query(sql: string, params: unknown[] = []) {
  const conn = connectionString();
  const host = new URL(conn).hostname;
  const response = await fetch(`https://${host}/sql`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Neon-Connection-String": conn },
    body: JSON.stringify({ query: sql, params }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) {
    throw new Error(`Lead store query failed (${response.status})`);
  }
  return (await response.json()) as { rows?: Record<string, unknown>[] };
}

let ready: Promise<void> | null = null;

// Creates the table the first time this server instance saves a lead.
function ensureTable() {
  if (!ready) {
    ready = (async () => {
      await query(`
        CREATE TABLE IF NOT EXISTS screener_leads (
          id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
          created_at timestamptz NOT NULL DEFAULT now(),
          practice text NOT NULL,
          first_name text NOT NULL,
          email text NOT NULL,
          phone text,
          consent_email boolean NOT NULL,
          consent_call boolean NOT NULL,
          consent_version text NOT NULL,
          band text NOT NULL,
          priority text NOT NULL,
          srt_both real,
          srt_left real,
          srt_right real,
          ear_check text,
          ear_gap boolean NOT NULL DEFAULT false,
          worse_ear text,
          validity_reasons text,
          screener_version text NOT NULL,
          clinical_approved boolean NOT NULL DEFAULT false,
          device jsonb,
          trials jsonb,
          status text NOT NULL DEFAULT 'new',
          contacted_at timestamptz,
          notes text
        )`);
      await query(`CREATE INDEX IF NOT EXISTS screener_leads_status_idx ON screener_leads (status, priority, created_at DESC)`);
    })().catch((error) => {
      ready = null; // try again on the next request
      throw error;
    });
  }
  return ready;
}

/** True when a database is configured. */
export function storeConfigured() {
  return Boolean(connectionString());
}

export async function saveLead(lead: LeadInput): Promise<{ stored: boolean; id?: string }> {
  if (!storeConfigured()) return { stored: false };
  await ensureTable();
  const s = lead.summary;
  const result = await query(
    `INSERT INTO screener_leads (
       practice, first_name, email, phone, consent_email, consent_call, consent_version,
       band, priority, srt_both, srt_left, srt_right, ear_check, ear_gap, worse_ear,
       validity_reasons, screener_version, clinical_approved, device, trials
     ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19::jsonb,$20::jsonb)
     RETURNING id`,
    [
      lead.practice,
      lead.firstName,
      lead.email,
      lead.phone || null,
      lead.consentEmail,
      lead.consentCall,
      lead.consentVersion,
      s.band,
      s.priority,
      s.srtBoth,
      s.srtLeft,
      s.srtRight,
      s.earCheck,
      Boolean(s.asymmetry),
      s.asymmetry ? s.asymmetry.worseEar : null,
      s.validity.join(",") || null,
      lead.screenerVersion,
      lead.clinicalApproved,
      JSON.stringify(lead.device),
      JSON.stringify(lead.trials),
    ]
  );
  return { stored: true, id: result.rows && result.rows[0] ? String(result.rows[0].id) : undefined };
}
