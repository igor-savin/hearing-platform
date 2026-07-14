"use client";

import { useEffect, useState, type CSSProperties } from "react";

const stages = [
  {
    short: "01",
    label: "Outer ear",
    title: "Sound is gathered",
    body: "The outer ear funnels conversation, music, and everyday sound into the ear canal as pressure waves.",
    aided: "The hearing aid microphones capture sound first, then separate speech from competing background noise.",
    position: "outer",
  },
  {
    short: "02",
    label: "Middle ear",
    title: "Vibration is amplified",
    body: "The eardrum and three tiny bones—the ossicles—turn air movement into stronger mechanical vibration.",
    aided: "Precisely shaped sound reaches the eardrum at levels matched to your individual hearing needs.",
    position: "middle",
  },
  {
    short: "03",
    label: "Inner ear",
    title: "Vibration becomes a signal",
    body: "Inside the cochlea, delicate sensory cells translate vibration into electrical signals for the auditory nerve.",
    aided: "By restoring access to softer frequencies, hearing aids give the cochlea a clearer, more complete signal.",
    position: "inner",
  },
  {
    short: "04",
    label: "Brain",
    title: "Your brain finds meaning",
    body: "The auditory nerve carries the signal to the brain, where it becomes a familiar voice, a warning, or a memory.",
    aided: "A cleaner signal reduces listening effort, helping the brain focus on the people and moments that matter.",
    position: "brain",
  },
] as const;

export function EarJourneyHero() {
  const [activeStage, setActiveStage] = useState(0);
  const [aided, setAided] = useState(true);
  const [playing, setPlaying] = useState(true);
  const stage = stages[activeStage];

  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [playing]);

  const chooseStage = (index: number) => {
    setActiveStage(index);
    setPlaying(false);
  };

  const toggleJourney = () => {
    if (!playing && activeStage === stages.length - 1) setActiveStage(0);
    setPlaying((current) => !current);
  };

  const journeyStyle = {
    "--journey-progress": `${15 + activeStage * 27}%`,
  } as CSSProperties;

  return (
    <section
      className={`ear-hero ${aided ? "is-aided" : "is-natural"} ${playing ? "is-playing" : "is-paused"}`}
      style={journeyStyle}
      aria-labelledby="ear-hero-title"
    >
      <div className="ear-hero-art" aria-hidden="true" />
      <div className="ear-hero-shade" aria-hidden="true" />

      <div className="ear-hero-copy">
        <p className="ear-overline"><span /> Interactive hearing journey</p>
        <h1 id="ear-hero-title">Hear the<br />whole story.</h1>
        <p className="ear-hero-lede">Follow sound from the world around you to the moment your brain understands it—and see where modern hearing technology lends a hand.</p>

        <div className="hearing-mode" role="group" aria-label="Compare natural and assisted hearing">
          <button type="button" className={!aided ? "active" : ""} onClick={() => setAided(false)} aria-pressed={!aided}>
            Natural hearing
          </button>
          <button type="button" className={aided ? "active" : ""} onClick={() => setAided(true)} aria-pressed={aided}>
            <span className="mode-spark" aria-hidden="true" /> With hearing aid
          </button>
        </div>

        <div className="ear-hero-actions">
          <a className="button primary" href="/contact/">Request an appointment</a>
          <a className="ear-text-link" href="/hearing-aid-fitting/">How fittings work <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div className="sound-waves" aria-hidden="true">
        <i /><i /><i /><i />
      </div>

      <div className="sound-source" aria-hidden="true">
        <span>Sound</span>
        <div><i /><i /><i /><i /><i /></div>
      </div>

      <div key={`${stage.short}-${aided}`} className={`anatomy-callout callout-${stage.position}`} aria-live="polite">
        <div className="callout-number">{stage.short}</div>
        <div>
          <span>{stage.label}</span>
          <strong>{stage.title}</strong>
          <p>{aided ? stage.aided : stage.body}</p>
        </div>
      </div>

      <div className="anatomy-hotspots" aria-label="Explore each stage of hearing">
        {stages.map((item, index) => (
          <button
            type="button"
            key={item.label}
            className={`hotspot hotspot-${item.position} ${activeStage === index ? "active" : ""}`}
            onClick={() => chooseStage(index)}
            aria-label={`Explore ${item.label}`}
            aria-pressed={activeStage === index}
          >
            <span>{item.short}</span>
          </button>
        ))}
      </div>

      <div className="sound-path" aria-hidden="true">
        <span className="sound-track"><i /></span>
        <span className="sound-runner"><i /></span>
        <span className="sound-particle p1" />
        <span className="sound-particle p2" />
        <span className="sound-particle p3" />
      </div>

      <nav className="ear-stage-nav" aria-label="Hearing journey stages">
        {stages.map((item, index) => (
          <button
            type="button"
            key={item.label}
            className={`${activeStage === index ? "active" : ""} ${index < activeStage ? "complete" : ""}`}
            onClick={() => chooseStage(index)}
            aria-current={activeStage === index ? "step" : undefined}
          >
            <span>{item.short}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="journey-controls">
        <button type="button" className="journey-play" onClick={toggleJourney} aria-label={playing ? "Pause sound journey" : "Play sound journey"}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
          {playing ? "Pause journey" : "Play sound journey"}
        </button>
        <span className="journey-status" aria-live="polite">Stage {activeStage + 1} of {stages.length}</span>
      </div>
    </section>
  );
}
