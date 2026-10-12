"use client";

import { useState } from "react";
import { trackConversion } from "./conversions";
import {
  GOALS,
  QUOTE_CHECK,
  QUESTIONS,
  SHARE,
  START_HERE,
  WHO_OPTIONS,
  type Who,
} from "../data/hearingPlan";

// Everything here runs in the browser only. Nothing typed or ticked is sent,
// stored or logged. The only analytics call names the tool, never the content.

function track(tool: string) {
  trackConversion("hearing_plan_use", { tool });
}

function printSheet(which: "goals" | "quote" | "questions") {
  const root = document.documentElement;
  root.setAttribute("data-hp-print", which);
  track(`print_${which}`);
  const done = () => {
    root.removeAttribute("data-hp-print");
    window.removeEventListener("afterprint", done);
  };
  window.addEventListener("afterprint", done);
  window.print();
}

export function StartHere() {
  const [who, setWho] = useState<Who | null>(null);
  const block = who ? START_HERE[who] : null;
  return (
    <div className="hp-start">
      <div role="group" aria-label="Who is this for?" className="hp-chips">
        {WHO_OPTIONS.map((o) => (
          <button
            key={o.id}
            type="button"
            className="hp-chip"
            aria-pressed={who === o.id}
            onClick={() => {
              setWho(o.id);
              track(`start_${o.id}`);
            }}
          >
            {o.label}
          </button>
        ))}
      </div>
      <div aria-live="polite" className="hp-start-out">
        {block && (
          <>
            <h3>{block.heading}</h3>
            <ol>
              {block.steps.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>{s.text}</a>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}

export function GoalsTool() {
  const [picked, setPicked] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const full = picked.length >= GOALS.max;
  const labels = GOALS.options.filter((o) => picked.includes(o.id)).map((o) => o.label);

  function toggle(id: string) {
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : p.length >= GOALS.max ? p : [...p, id]));
  }

  return (
    <div className="hp-tool">
      <fieldset>
        <legend>
          Pick up to {GOALS.max}. <span aria-live="polite">{picked.length} of {GOALS.max} picked.</span>
        </legend>
        <div className="hp-checks">
          {GOALS.options.map((o) => {
            const on = picked.includes(o.id);
            return (
              <label key={o.id} className={on ? "on" : ""}>
                <input type="checkbox" checked={on} disabled={full && !on} onChange={() => toggle(o.id)} />
                <span>{o.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
      <label className="hp-note">
        {GOALS.noteLabel}
        <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} maxLength={400} />
      </label>
      <button type="button" className="button primary" disabled={picked.length === 0} onClick={() => printSheet("goals")}>
        Print my goals
      </button>

      <section id="hp-sheet-goals" className="hp-sheet" aria-hidden="true">
        <h2>{GOALS.sheetTitle}</h2>
        <p>The places where I most want to hear well:</p>
        <ol>{labels.map((l) => <li key={l}>{l}</li>)}</ol>
        {note && <p><strong>Also:</strong> {note}</p>}
        <p className="hp-sheet-foot">{GOALS.sheetFooter}</p>
      </section>
    </div>
  );
}

export function QuoteCheckTool() {
  const [have, setHave] = useState<string[]>([]);
  const missing = QUOTE_CHECK.items.filter((i) => !have.includes(i.id));
  const toggle = (id: string) => setHave((h) => (h.includes(id) ? h.filter((x) => x !== id) : [...h, id]));
  const [touched, setTouched] = useState(false);

  return (
    <div className="hp-tool">
      <fieldset>
        <legend>Tick each item your quote clearly lists.</legend>
        <div className="hp-checks one">
          {QUOTE_CHECK.items.map((i) => {
            const on = have.includes(i.id);
            return (
              <label key={i.id} className={on ? "on" : ""}>
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => {
                    toggle(i.id);
                    if (!touched) {
                      setTouched(true);
                      track("quote_check");
                    }
                  }}
                />
                <span>{i.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div aria-live="polite" className="hp-result">
        {touched && (
          <p>
            <strong>
              {have.length} of {QUOTE_CHECK.items.length} items are on your quote.
            </strong>{" "}
            {missing.length === 0
              ? "Your quote lists everything. Read each line to confirm it says what you expect."
              : `Ask about the ${missing.length} that are missing. A fair provider answers each one plainly.`}
          </p>
        )}
      </div>

      <button
        type="button"
        className="button primary"
        disabled={!touched}
        onClick={() => printSheet("quote")}
      >
        Print my questions
      </button>
      <p className="hp-small">
        <a href={QUOTE_CHECK.secondOpinion.href}>{QUOTE_CHECK.secondOpinion.text}</a>
      </p>

      <section id="hp-sheet-quote" className="hp-sheet" aria-hidden="true">
        <h2>{QUOTE_CHECK.sheetTitle}</h2>
        {missing.length > 0 ? (
          <>
            <p>My quote does not clearly list these. I will ask:</p>
            <ol>{missing.map((m) => <li key={m.id}>{m.ask}</li>)}</ol>
          </>
        ) : (
          <p>My quote lists every item. I will confirm each line.</p>
        )}
        <p className="hp-sheet-foot">{QUOTE_CHECK.sheetFooter}</p>
      </section>
    </div>
  );
}

export function QuestionsPrint() {
  return (
    <>
      <button type="button" className="button primary" onClick={() => printSheet("questions")}>
        Print the ten questions
      </button>
      <section id="hp-sheet-questions" className="hp-sheet" aria-hidden="true">
        <h2>{QUESTIONS.sheetTitle}</h2>
        <ol>{QUESTIONS.items.map((q) => <li key={q}>{q}</li>)}</ol>
        <p className="hp-sheet-foot">California Hearing Center · calhearing.com/hearing-plan/</p>
      </section>
    </>
  );
}

export function ShareTool() {
  const [copied, setCopied] = useState(false);
  const url = (process.env.NEXT_PUBLIC_SITE_URL || "https://calhearing.com").replace(/\/$/, "") + "/hearing-plan/";
  const body = `${SHARE.message}\n\n${url}`;
  const mailto = `mailto:?subject=${encodeURIComponent(SHARE.subject)}&body=${encodeURIComponent(body)}`;
  const sms = `sms:?&body=${encodeURIComponent(body)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      track("share_copy");
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="hp-tool">
      <label className="hp-note">
        A message you can send
        <textarea readOnly value={body} rows={6} />
      </label>
      <div className="hp-row">
        <button type="button" className="button primary" onClick={copy}>
          {copied ? "Copied" : "Copy message"}
        </button>
        <a className="button outline" href={mailto} onClick={() => track("share_email")}>Email it</a>
        <a className="button outline" href={sms} onClick={() => track("share_text")}>Text it</a>
      </div>
      <p className="hp-small" aria-live="polite">{copied ? "Message copied." : ""}</p>
    </div>
  );
}
