"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Phone, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ZocdocButton } from "@/components/ZocdocButton";
import { primaryPhone, primaryPhoneHref } from "@/lib/siteConfig";

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

const locations = [
  { label: "Greenwich", href: "/greenwich-ct" },
  { label: "Westchester County", href: "/areas-we-serve/westchester-county-ny" },
  { label: "Somers", href: "/Somers-NY" }
];

export function InteractiveEarHero() {
  const [activeStage, setActiveStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [aided, setAided] = useState(true);
  const audioContext = useRef<AudioContext | null>(null);

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

  useEffect(() => {
    if (!soundEnabled) return;

    const Context = window.AudioContext || window.webkitAudioContext;
    const context = audioContext.current ?? new Context();
    audioContext.current = context;
    if (context.state === "suspended") void context.resume();

    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const harmonic = context.createOscillator();
    const filter = context.createBiquadFilter();
    const panner = context.createStereoPanner();
    const gain = context.createGain();
    const harmonicGain = context.createGain();

    oscillator.type = "sine";
    harmonic.type = "triangle";
    oscillator.frequency.value = stages[activeStage].frequency;
    harmonic.frequency.value = stages[activeStage].frequency * 2;
    harmonicGain.gain.value = aided ? 0.16 : 0.05;
    filter.type = "lowpass";
    filter.frequency.value = aided ? 5200 : 1250;
    filter.Q.value = aided ? 0.7 : 1.8;
    panner.pan.value = stages[activeStage].pan;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(aided ? 0.052 : 0.026, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

    oscillator.connect(filter);
    harmonic.connect(harmonicGain).connect(filter);
    filter.connect(panner).connect(gain).connect(context.destination);
    oscillator.start(now);
    harmonic.start(now);
    oscillator.stop(now + 0.72);
    harmonic.stop(now + 0.72);

    return () => {
      oscillator.disconnect();
      harmonic.disconnect();
    };
  }, [activeStage, aided, soundEnabled]);

  useEffect(() => {
    return () => {
      if (audioContext.current) void audioContext.current.close();
    };
  }, []);

  function enableSound() {
    const Context = window.AudioContext || window.webkitAudioContext;
    const context = audioContext.current ?? new Context();
    audioContext.current = context;
    if (context.state === "suspended") void context.resume();
    setSoundEnabled(true);
  }

  function toggleJourney() {
    if (playing) {
      setPlaying(false);
      return;
    }

    enableSound();
    if (activeStage === stages.length - 1) setActiveStage(0);
    setPlaying(true);
  }

  function toggleSound() {
    if (!soundEnabled) {
      enableSound();
      return;
    }

    setSoundEnabled(false);
    if (audioContext.current?.state === "running") void audioContext.current.suspend();
  }

  function chooseStage(index: number) {
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
      <div className="aa-ear-art" aria-hidden="true">
        <Image
          alt=""
          fill
          fetchPriority="high"
          priority
          quality={78}
          sizes="100vw"
          src="/assets/interactive-ear-hero.png"
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
            aria-label={`Explore ${stage.label}`}
            aria-pressed={activeStage === index}
            className={`aa-ear-hotspot aa-ear-hotspot-${index + 1}`}
            key={stage.label}
            onClick={() => chooseStage(index)}
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
            <button aria-pressed={!aided} onClick={() => setAided(false)} type="button">Natural hearing</button>
            <button aria-pressed={aided} onClick={() => setAided(true)} type="button">With hearing aid</button>
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
            onClick={() => chooseStage(index)}
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
