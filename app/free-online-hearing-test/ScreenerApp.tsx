"use client";

// The screener, start to finish: intro, setup, the test, the optional one-ear
// check, the email gate, and the result. The email gate comes AFTER the last
// triplet and BEFORE the result: the person sees their result only once they have
// given a name and email and agreed to receive their report.
//
// Plain styling on purpose (screener.css). The look and feel comes later and only
// needs to touch screener.css and the wording in lib/screener/copy.ts.

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import {
  PARAMS,
  earStartSnr,
  estimateSrt,
  isCorrect,
  makeTriplet,
  nextSnr,
  type Band,
  type Ear,
  type Trial,
  type ValidityReason,
} from "../lib/screener/scoring";
import { ScreenerAudio } from "../lib/screener/audio";
import {
  BAND_COPY,
  CONSENT_CALL_LABEL,
  CONSENT_EMAIL_LABEL,
  SCREENING_NOT_DIAGNOSIS,
  URGENT_HINT,
  earNote,
  levelNotes,
  levelRangeText,
  reliabilityTips,
} from "../lib/screener/copy";
import { CLINICAL_APPROVED, PRACTICE } from "../lib/screener/config";
import "./screener.css";

type Stage = "intro" | "setup" | "both" | "ear-offer" | "left" | "right" | "gate" | "result";

type Run = { both: Trial[]; left?: Trial[]; right?: Trial[] };

type ApiResult = {
  ok: true;
  emailed: boolean;
  pdfBase64: string;
  summary: {
    band: Band;
    validity: ValidityReason[];
    earCheck: "done" | "skipped" | "unreliable";
    asymmetry: { worseEar: "left" | "right" } | null;
  };
};

// ---------------------------------------------------------------------------
// Top level
// ---------------------------------------------------------------------------

export function ScreenerApp() {
  const [stage, setStage] = useState<Stage>("intro");
  const [attempt, setAttempt] = useState(0); // bumped on retake so each run starts clean
  const [starting, setStarting] = useState(false);
  const [startError, setStartError] = useState("");
  const [speakers, setSpeakers] = useState(false);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [audio, setAudio] = useState<ScreenerAudio | null>(null);
  const [run, setRun] = useState<Run>({ both: [] });
  const [bothSrt, setBothSrt] = useState<number | null>(null);

  useEffect(() => () => audio?.close(), [audio]);

  async function begin() {
    setStarting(true);
    setStartError("");
    try {
      const next = new ScreenerAudio();
      await next.init();
      setAudio(next);
      setStage("setup");
    } catch {
      setStartError(
        `The test sounds could not start on this device or browser. Please try another browser, or call us at ${PRACTICE.phoneDisplay}.`
      );
    } finally {
      setStarting(false);
    }
  }

  function retake() {
    setRun({ both: [] });
    setBothSrt(null);
    setResult(null);
    setAttempt((n) => n + 1);
    setStage("both");
  }

  return (
    <div className="scr">
      {!CLINICAL_APPROVED && (
        <p className="scr-preview" role="note">
          PREVIEW. The scoring has not yet been reviewed by an audiologist. Do not rely on this result.
        </p>
      )}

      {stage === "intro" && <Intro onStart={begin} starting={starting} error={startError} />}

      {stage === "setup" && audio && (
        <Setup
          audio={audio}
          onDone={(usingSpeakers) => {
            setSpeakers(usingSpeakers);
            setStage("both");
          }}
        />
      )}

      {stage === "both" && audio && (
        <TestRun
          key={`both-${attempt}`}
          audio={audio}
          ear="both"
          total={PARAMS.binauralTrials}
          startSnr={PARAMS.startSnr}
          title="Listen to both ears"
          intro="You will hear three numbers hidden in background noise. Tap the three numbers you hear, in order. Some will be very quiet. That is normal: just give your best guess, or tap “I could not hear.”"
          onDone={(trials) => {
            setRun({ both: trials });
            const srt = estimateSrt(trials, PARAMS.discardBinaural);
            setBothSrt(srt);
            setStage(srt !== null && !speakers ? "ear-offer" : "gate");
          }}
        />
      )}

      {stage === "ear-offer" && (
        <section className="scr-card">
          <h2>One more quick check? (optional)</h2>
          <p>
            Now we can test each ear on its own. It takes about two more minutes. It helps us notice if one ear hears
            differently from the other.
          </p>
          <div className="scr-actions">
            <button className="scr-btn" onClick={() => setStage("left")}>
              Yes, check each ear
            </button>
            <button className="scr-btn scr-btn-quiet" onClick={() => setStage("gate")}>
              Skip this
            </button>
          </div>
        </section>
      )}

      {stage === "left" && audio && bothSrt !== null && (
        <TestRun
          key={`left-${attempt}`}
          audio={audio}
          ear="left"
          total={PARAMS.earTrials}
          startSnr={earStartSnr(bothSrt)}
          title="Left ear only"
          intro="This time the sound plays in your LEFT ear only. Tap the three numbers you hear."
          onDone={(trials) => {
            setRun((r) => ({ ...r, left: trials }));
            setStage("right");
          }}
        />
      )}

      {stage === "right" && audio && bothSrt !== null && (
        <TestRun
          key={`right-${attempt}`}
          audio={audio}
          ear="right"
          total={PARAMS.earTrials}
          startSnr={earStartSnr(bothSrt)}
          title="Right ear only"
          intro="Now the sound plays in your RIGHT ear only. Tap the three numbers you hear."
          onDone={(trials) => {
            setRun((r) => ({ ...r, right: trials }));
            setStage("gate");
          }}
        />
      )}

      {stage === "gate" && audio && (
        <Gate
          run={run}
          speakers={speakers}
          sampleRate={audio.ctx.sampleRate}
          onResult={(r) => {
            setResult(r);
            setStage("result");
          }}
        />
      )}

      {stage === "result" && result && <ResultView result={result} onRetake={retake} />}

      {stage !== "result" && (
        <p className="scr-fine">
          {SCREENING_NOT_DIAGNOSIS} Prefer to talk to a person? Call {PRACTICE.phoneDisplay}.
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Intro and setup
// ---------------------------------------------------------------------------

function Intro({ onStart, starting, error }: { onStart: () => void; starting: boolean; error: string }) {
  return (
    <section className="scr-card">
      <h1>Free 3-Minute Hearing Check</h1>
      <p className="scr-lead">
        A quick screening, not a diagnosis. You will hear numbers spoken in background noise and tap the ones you hear.
      </p>
      <ol className="scr-steps">
        <li>Put on headphones.</li>
        <li>Hear numbers in background noise.</li>
        <li>Get your result and what to do next.</li>
      </ol>
      <p>No download. No cost. Your results are sent only to you and to our office.</p>
      <div className="scr-actions">
        <button className="scr-btn" onClick={onStart} disabled={starting}>
          {starting ? "Getting ready…" : "Start my free check"}
        </button>
      </div>
      {error && (
        <p className="scr-error" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}

function Setup({ audio, onDone }: { audio: ScreenerAudio; onDone: (speakers: boolean) => void }) {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [side, setSide] = useState<"left" | "right" | null>(null);
  const [playing, setPlaying] = useState(false);
  const [msg, setMsg] = useState("");
  const [tries, setTries] = useState(0);
  const [speakers, setSpeakers] = useState(false);

  async function playTone() {
    const s: "left" | "right" = Math.random() < 0.5 ? "left" : "right";
    setSide(s);
    setMsg("");
    setPlaying(true);
    await audio.tone(s);
    setPlaying(false);
  }

  function answer(a: "left" | "right" | "none") {
    if (!side) return;
    if (a === side) {
      setMsg("");
      setStep(2);
      return;
    }
    setTries((n) => n + 1);
    setSide(null);
    setMsg(
      a === "none"
        ? "No sound? Check that your headphones are plugged in and your volume is up, then press Play again."
        : "That was the other side. Check that your headphones are on the right way round, then press Play again."
    );
  }

  if (step === 0) {
    return (
      <section className="scr-card">
        <h2>Step 1 of 3: Find a quiet place</h2>
        <p>Turn off the TV and radio. Close windows and doors if you can. Quiet makes the result more reliable.</p>
        <div className="scr-actions">
          <button className="scr-btn" onClick={() => setStep(1)}>
            Yes, it is quiet
          </button>
        </div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="scr-card">
        <h2>Step 2 of 3: Check your headphones</h2>
        <p>Put on your headphones. Press Play. You will hear a short beep in one ear.</p>
        <div className="scr-actions">
          <button className="scr-btn" onClick={playTone} disabled={playing}>
            {playing ? "Listen…" : side ? "Play again" : "Play the beep"}
          </button>
        </div>
        {side && !playing && (
          <>
            <p className="scr-q">Which side did you hear it on?</p>
            <div className="scr-actions">
              <button className="scr-btn scr-btn-alt" onClick={() => answer("left")}>
                Left
              </button>
              <button className="scr-btn scr-btn-alt" onClick={() => answer("right")}>
                Right
              </button>
              <button className="scr-btn scr-btn-quiet" onClick={() => answer("none")}>
                I heard nothing
              </button>
            </div>
          </>
        )}
        {msg && (
          <p className="scr-error" role="alert">
            {msg}
          </p>
        )}
        {(tries >= 2 || !side) && (
          <p className="scr-fine">
            No headphones?{" "}
            <button
              className="scr-link"
              onClick={() => {
                setSpeakers(true);
                setStep(2);
              }}
            >
              Continue with speakers
            </button>
            . The result will be less reliable.
          </p>
        )}
      </section>
    );
  }

  return (
    <section className="scr-card">
      <h2>Step 3 of 3: Set your volume</h2>
      <p>
        Press Play. You will hear a voice in noise. Adjust the volume on your device until the voice is clearly loud, but
        comfortable. Then leave the volume alone for the rest of the test.
      </p>
      <div className="scr-actions">
        <button
          className="scr-btn scr-btn-alt"
          disabled={playing}
          onClick={async () => {
            setPlaying(true);
            await audio.sample();
            setPlaying(false);
          }}
        >
          {playing ? "Listen…" : "Play a sample"}
        </button>
        <button className="scr-btn" onClick={() => onDone(speakers)}>
          Volume is set. Begin the test
        </button>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// The test
// ---------------------------------------------------------------------------

function TestRun({
  audio,
  ear,
  total,
  startSnr,
  title,
  intro,
  onDone,
}: {
  audio: ScreenerAudio;
  ear: Ear;
  total: number;
  startSnr: number;
  title: string;
  intro: string;
  onDone: (trials: Trial[]) => void;
}) {
  const [phase, setPhase] = useState<"ready" | "playing" | "answer">("ready");
  const [count, setCount] = useState(0);
  const [begun, setBegun] = useState(false);
  const [entry, setEntry] = useState<number[]>([]);
  const snrRef = useRef(startSnr);
  const trialsRef = useRef<Trial[]>([]);
  const digitsRef = useRef<number[]>([]);
  const previousRef = useRef<number[] | undefined>(undefined);
  const endedRef = useRef(0);
  const lockRef = useRef(false);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const playNext = useCallback(async () => {
    const digits = makeTriplet(Math.random, previousRef.current);
    previousRef.current = digits;
    digitsRef.current = digits;
    setEntry([]);
    lockRef.current = false;
    setPhase("playing");
    await audio.playTriplet(digits, snrRef.current, ear);
    endedRef.current = performance.now();
    setPhase("answer");
  }, [audio, ear]);

  const submit = useCallback(
    (response: number[]) => {
      if (lockRef.current) return;
      lockRef.current = true;
      const trial: Trial = {
        digits: digitsRef.current,
        response,
        snr: snrRef.current,
        ear,
        ms: Math.max(0, Math.round(performance.now() - endedRef.current)),
      };
      trialsRef.current.push(trial);
      snrRef.current = nextSnr(snrRef.current, isCorrect(trial));
      const n = trialsRef.current.length;
      setCount(n);
      if (n >= total) {
        onDone(trialsRef.current.slice());
      } else {
        setPhase("ready");
        timerRef.current = window.setTimeout(() => void playNext(), 700);
      }
    },
    [ear, onDone, playNext, total]
  );

  const press = useCallback(
    (d: number) => {
      if (phase !== "answer" || lockRef.current) return;
      setEntry((prev) => {
        if (prev.length >= 3) return prev;
        const next = [...prev, d];
        if (next.length === 3) window.setTimeout(() => submit(next), 250);
        return next;
      });
    },
    [phase, submit]
  );

  const back = useCallback(() => {
    if (phase !== "answer" || lockRef.current) return;
    setEntry((prev) => prev.slice(0, -1));
  }, [phase]);

  // Keyboard: digits and Backspace.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (/^[0-9]$/.test(e.key)) press(Number(e.key));
      else if (e.key === "Backspace") back();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [press, back]);

  const started = begun;
  const pct = Math.round((count / total) * 100);
  const halfway = count === Math.floor(total / 2);

  if (!started) {
    return (
      <section className="scr-card">
        <h2>{title}</h2>
        <p>{intro}</p>
        <div className="scr-actions">
          <button
            className="scr-btn"
            onClick={() => {
              setBegun(true);
              void playNext();
            }}
          >
            Start
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="scr-card">
      <h2>{title}</h2>
      <p className="scr-count" aria-live="polite">
        Question {Math.min(count + 1, total)} of {total}
        {halfway && count > 0 ? ". You are doing great. Almost halfway." : ""}
      </p>
      <div className="scr-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label="Progress">
        <span style={{ width: `${pct}%` }} />
      </div>

      <p className="scr-status" aria-live="polite">
        {phase === "answer" ? "Tap the three numbers you heard." : "Listen…"}
      </p>

      <div className="scr-slots" aria-label="Your answer so far">
        {[0, 1, 2].map((i) => (
          <span key={i} className="scr-slot">
            {entry[i] ?? ""}
          </span>
        ))}
      </div>

      <div className="scr-pad" role="group" aria-label="Number keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
          <button key={d} className="scr-key" disabled={phase !== "answer"} onClick={() => press(d)}>
            {d}
          </button>
        ))}
        <button className="scr-key scr-key-quiet" disabled={phase !== "answer"} onClick={back} aria-label="Delete last number">
          ⌫
        </button>
        <button className="scr-key" disabled={phase !== "answer"} onClick={() => press(0)}>
          0
        </button>
        <span />
      </div>

      <div className="scr-actions">
        <button className="scr-btn scr-btn-quiet" disabled={phase !== "answer"} onClick={() => submit([])}>
          I could not hear
        </button>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Email gate
// ---------------------------------------------------------------------------

function Gate({
  run,
  speakers,
  sampleRate,
  onResult,
}: {
  run: Run;
  speakers: boolean;
  sampleRate: number;
  onResult: (r: ApiResult) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/screener/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: String(data.get("firstName") || ""),
          email: String(data.get("email") || ""),
          phone: String(data.get("phone") || ""),
          consentEmail: data.get("consentEmail") === "on",
          consentCall: data.get("consentCall") === "on",
          website: String(data.get("website") || ""),
          run: {
            ...run,
            device: {
              mobile: window.matchMedia("(pointer: coarse)").matches,
              speakers,
              sampleRate,
            },
          },
        }),
      });
      const json = (await response.json().catch(() => null)) as (ApiResult | { ok: false; message?: string }) | null;
      if (!response.ok || !json || json.ok !== true) {
        setError((json && "message" in json && json.message) || `Something went wrong. Please call us at ${PRACTICE.phoneDisplay}.`);
        return;
      }
      onResult(json);
    } catch {
      setError(`We could not send that. Check your connection and try again, or call us at ${PRACTICE.phoneDisplay}.`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="scr-card">
      <h2>Your result is ready</h2>
      <p>Where should we send your report? We will show your result right after.</p>
      <form className="scr-form" onSubmit={onSubmit} noValidate={false}>
        <label>
          First name
          <input name="firstName" type="text" autoComplete="given-name" required maxLength={60} />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" inputMode="email" required maxLength={254} />
        </label>
        <label>
          Mobile phone <span className="scr-opt">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={20} />
        </label>

        <label className="scr-check">
          <input name="consentEmail" type="checkbox" required />
          <span>{CONSENT_EMAIL_LABEL}</span>
        </label>
        <label className="scr-check">
          <input name="consentCall" type="checkbox" />
          <span>{CONSENT_CALL_LABEL}</span>
        </label>

        {/* Honeypot: people never see or fill this. */}
        <div className="scr-hp" aria-hidden="true">
          <label>
            Website
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <p className="scr-fine">
          We use your details to send your report and to follow up about your hearing. We do not sell them. See our{" "}
          <a href={PRACTICE.privacyPath}>privacy policy</a>.
        </p>

        <div className="scr-actions">
          <button className="scr-btn" type="submit" disabled={busy}>
            {busy ? "Sending…" : "Send my results"}
          </button>
        </div>
        {error && (
          <p className="scr-error" role="alert">
            {error}
          </p>
        )}
      </form>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Result
// ---------------------------------------------------------------------------

function ResultView({ result, onRetake }: { result: ApiResult; onRetake: () => void }) {
  const { band, validity, asymmetry } = result.summary;
  const copy = BAND_COPY[band];
  const ear = earNote({ asymmetry });
  const levelText = levelRangeText(band);

  function download() {
    const bytes = Uint8Array.from(atob(result.pdfBase64), (c) => c.charCodeAt(0));
    const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "Your-hearing-check-report.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  return (
    <section className="scr-card" aria-live="polite">
      <p className="scr-eyebrow">Your hearing check</p>
      <p className={`scr-chip scr-chip-${band}`}>{copy.label}</p>
      <h2>{copy.headline}</h2>
      <p>{copy.body}</p>

      {band === "unreliable" && (
        <ul className="scr-list">
          {reliabilityTips(validity).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}

      {ear && <p className="scr-alert">{ear}</p>}

      {levelText && (
        <div className="scr-level">
          <h3>The kind of support to ask about</h3>
          <p>{levelText}</p>
          <ul className="scr-list">
            {levelNotes(band).map((l) => (
              <li key={l.level}>
                <strong>Level {l.level}:</strong> {l.note}
              </li>
            ))}
          </ul>
        </div>
      )}

      <h3>What to do next</h3>
      <p>{copy.next}</p>
      {band !== "unreliable" && band !== "good" && !asymmetry && <p className="scr-fine">{URGENT_HINT}</p>}

      <div className="scr-actions">
        <a className="scr-btn" href={PRACTICE.bookingPath}>
          Book your hearing evaluation
        </a>
        <a className="scr-btn scr-btn-alt" href={`tel:${PRACTICE.phoneE164}`}>
          Call {PRACTICE.phoneDisplay}
        </a>
      </div>

      <div className="scr-actions">
        <button className="scr-btn scr-btn-quiet" onClick={download}>
          Download my report (PDF)
        </button>
        <button className="scr-btn scr-btn-quiet" onClick={onRetake}>
          Take the test again
        </button>
      </div>

      <p className="scr-fine">
        {result.emailed
          ? "We have emailed you this report."
          : "We could not email your report just now. Please download it above, or call us."}
      </p>
      <p className="scr-fine">{SCREENING_NOT_DIAGNOSIS}</p>
    </section>
  );
}
