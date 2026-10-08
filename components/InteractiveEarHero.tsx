"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Phone, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ZocdocButton } from "@/components/ZocdocButton";
import { primaryPhone, primaryPhoneHref } from "@/lib/siteBasics";
import { HearingScene } from "@/lib/audio/hearingScene";
import { trackConversion } from "@/lib/conversions";

const stages = [
  {
    label: "Outer ear",
    title: "Sound is collected",
    copy: "The outer ear gathers sound waves and guides them into the ear canal.",
    frequency: 392,
    pan: -0.82
  },
  {
    label: "Middle ear",
    title: "Vibrations are amplified",
    copy: "The eardrum and three tiny bones strengthen the vibration and pass it inward.",
    frequency: 494,
    pan: -0.28
  },
  {
    label: "Inner ear",
    title: "Motion becomes a signal",
    copy: "The cochlea turns that mechanical movement into electrical signals.",
    frequency: 659,
    pan: 0.34
  },
  {
    label: "Brain",
    title: "The sound gains meaning",
    copy: "The auditory nerve carries the signal to the brain, where it is recognized as speech, music, and more.",
    frequency: 784,
    pan: 0.82
  }
];

// Offices first, then the service area. This row used to read
// "Greenwich, Westchester County, Somers" -- three entries, none of them
// Harrison, which is the main office. A visitor reading it could reasonably
// conclude the practice was in Greenwich.
const locations = [
  { label: "Harrison, NY", href: "/harrison-ny" },
  { label: "Somers, NY", href: "/Somers-NY" },
  { label: "Westchester County", href: "/areas-we-serve/westchester-county-ny" },
  { label: "Greenwich, CT", href: "/greenwich-ct" }
];

export function InteractiveEarHero() {
  const [activeStage, setActiveStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [aided, setAided] = useState(true);
  const audioContext = useRef<AudioContext | null>(null);
  const scene = useRef<HearingScene | null>(null);

  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      setActiveStage((current) => {
        if (current === stages.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 2600);

    return () => window.clearInterval(timer);
  }, [playing]);

  // Keep the live soundscape in step with the natural / with-hearing-aid toggle.
  useEffect(() => {
    scene.current?.setAided(aided);
  }, [aided]);

  useEffect(() => {
    return () => {
      scene.current?.stop();
      if (audioContext.current) void audioContext.current.close();
    };
  }, []);

  // Home page scroll depth. GA4's built-in scroll event only fires at 90 percent,
  // which cannot tell "left at the hero" from "read half the page". This hero
  // renders only on the home page, so the listener lives here.
  useEffect(() => {
    const marks = [25, 50, 75, 100];
    const sent = new Set<number>();
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = (window.scrollY / scrollable) * 100;
      for (const mark of marks) {
        if (!sent.has(mark) && percent >= (mark === 100 ? 98 : mark)) {
          sent.add(mark);
          trackConversion("scroll_depth", { percent: mark, page: "home" });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function chooseMode(nextAided: boolean) {
    if (nextAided !== aided) {
      trackConversion("hero_mode_toggle", { mode: nextAided ? "with_hearing_aid" : "natural" });
    }
    setAided(nextAided);
  }

  function enableSound() {
    const Context = window.AudioContext || window.webkitAudioContext;
    const context = audioContext.current ?? new Context();
    audioContext.current = context;
    if (context.state === "suspended") void context.resume();
    if (!scene.current) scene.current = new HearingScene(context);
    scene.current.setAided(aided);
    scene.current.start();
    setSoundEnabled(true);
  }

  function toggleJourney() {
    if (playing) {
      trackConversion("hero_play_click", { action: "pause", stage: stages[activeStage].label });
      setPlaying(false);
      return;
    }

    trackConversion("hero_play_click", { action: "play", stage: stages[activeStage].label });
    enableSound();
    if (activeStage === stages.length - 1) setActiveStage(0);
    setPlaying(true);
  }

  function toggleSound() {
    if (!soundEnabled) {
      trackConversion("hero_sound_toggle", { state: "on" });
      enableSound();
      return;
    }

    trackConversion("hero_sound_toggle", { state: "off" });
    scene.current?.stop();
    setSoundEnabled(false);
  }

  function chooseStage(index: number, source: "hotspot" | "tab") {
    trackConversion("hero_stage_select", { stage: stages[index].label, source });
    setActiveStage(index);
    setPlaying(false);
    if (soundEnabled && audioContext.current?.state === "suspended") void audioContext.current.resume();
  }

  const heroStyle = {
    "--aa-progress": `${15 + activeStage * 27}%`
  } as CSSProperties;

  return (
    <section
      className={`aa-ear-hero ${playing ? "is-playing" : "is-paused"} ${aided ? "is-aided" : "is-natural"}`}
      style={heroStyle}
    >
      {/* VS-03. This was alt="" inside an aria-hidden wrapper — declared pure
          decoration on both axes. It is not: it is a detailed anatomical
          cutaway (canal, drum, ossicles, cochlea) with a behind-the-ear aid
          fitted, and it is the largest, highest-priority image on the site's
          most important page. Empty alt told Google to ignore our single best
          image-search asset. The overlay and the sound runner below ARE
          decoration and keep their aria-hidden. */}
      <div className="aa-ear-art">
        <Image
          alt="Cutaway illustration of the human ear showing the ear canal, eardrum, ossicles and cochlea, with a behind-the-ear hearing aid in place and a sound wave entering from the left."
          fill
          fetchPriority="high"
          priority
          quality={78}
          sizes="100vw"
          src="/assets/ear-anatomy-hearing-aid-sound-waves.png"
        />
      </div>
      <div className="aa-ear-overlay" aria-hidden="true" />
      <div className="aa-sound-track" aria-hidden="true">
        <span className="aa-sound-runner" />
      </div>

      <div className="aa-ear-callout">
        <span className="aa-ear-callout-dot" />
        <div>
          <strong>{stages[activeStage].title}</strong>
          <span>{stages[activeStage].copy}</span>
        </div>
      </div>

      <div className="aa-ear-hotspots" aria-label="Explore the hearing pathway">
        {stages.map((stage, index) => (
          <button
            aria-label={`Explore ${stage.label} (step ${index + 1})`}
            aria-pressed={activeStage === index}
            className={`aa-ear-hotspot aa-ear-hotspot-${index + 1}`}
            key={stage.label}
            onClick={() => chooseStage(index, "hotspot")}
            type="button"
          >
            <span>{index + 1}</span>
          </button>
        ))}
      </div>

      <div className="container aa-ear-content">
        <div className="aa-ear-copy">
          <p className="aa-ear-eyebrow">Audiology Associates of Westchester</p>
          <h1>Hear the whole story.</h1>
          <p className="aa-ear-lede">
            Follow sound from the world around you to the moment your brain understands it—and discover how a hearing aid helps restore clarity along the way.
          </p>

          <div className="aa-hearing-toggle" aria-label="Compare the hearing journey">
            <button aria-pressed={!aided} onClick={() => chooseMode(false)} type="button">Natural hearing</button>
            <button aria-pressed={aided} onClick={() => chooseMode(true)} type="button">With hearing aid</button>
          </div>

          <div className="aa-ear-controls">
            <button className="aa-ear-play" onClick={toggleJourney} type="button">
              {playing ? <Pause aria-hidden="true" size={18} /> : <Play aria-hidden="true" size={18} />}
              {playing ? "Pause journey" : "Play journey + sound"}
            </button>
            <button className="aa-ear-sound" onClick={toggleSound} type="button">
              {soundEnabled ? <Volume2 aria-hidden="true" size={18} /> : <VolumeX aria-hidden="true" size={18} />}
              {soundEnabled ? "Sound on" : "Sound off"}
            </button>
          </div>

          <div className="aa-ear-actions">
            <a data-track="phone-home-hero" href={primaryPhoneHref}>
              <Phone aria-hidden="true" size={18} /> Call {primaryPhone}
            </a>
            <ZocdocButton label="Request Appointment" trackingId="appointment-home-hero" />
          </div>

          <div className="aa-ear-locations">
            <span>Serving</span>
            {locations.map((location) => (
              <Link href={location.href} key={location.href}>{location.label}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="aa-ear-stage-nav" aria-label="Hearing journey stages">
        <div className="aa-ear-stage-line" aria-hidden="true"><span /></div>
        {stages.map((stage, index) => (
          <button
            aria-current={activeStage === index ? "step" : undefined}
            key={stage.label}
            onClick={() => chooseStage(index, "tab")}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{stage.label}</strong>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Stage {activeStage + 1}: {stages[activeStage].title}. {stages[activeStage].copy}
      </p>
    </section>
  );
}

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}
