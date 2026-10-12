// Plays the test sounds in the browser with the Web Audio API.
//
// Browser only. The recordings are in public/screener/audio:
//   <voice>-<digit>.wav   one spoken digit each (generated speech, see the README note below)
//   <voice>-noise.wav     12 seconds of noise with the same average spectrum as the digits
//
// The digit clips and the noise were made to have the same loudness (RMS), so the
// speech-to-noise ratio is set purely by two gains. The gains are chosen so the
// combined loudness stays about the same at every level; only the balance moves.
// That keeps hard trials from being louder than easy ones and avoids clipping.
//
// README NOTE: the digits are generated speech, not a human recording. They have
// not been listened to by an audiologist. Before launch, have someone listen to
// all eight digits for clarity, and consider replacing them with a real recording
// (same file names). A different voice will change how hard each level is, so
// re-check the cutoffs after any change.

import { ALLOWED_DIGITS, type Ear } from "./scoring";
import { VOICE } from "./config";

/** Overall output level before the person's own volume control. */
const OUTPUT_SCALE = 1.2;
/** Seconds of silence between the three digits. */
const GAP_S = 0.22;
/** Seconds of noise before the first digit and after the last. */
const LEAD_S = 0.55;
const TAIL_S = 0.4;

function decode(ctx: AudioContext, data: ArrayBuffer): Promise<AudioBuffer> {
  // Older Safari only supports the callback form.
  return new Promise((resolve, reject) => {
    ctx.decodeAudioData(data, resolve, reject);
  });
}

async function fetchBuffer(ctx: AudioContext, url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load ${url}`);
  return decode(ctx, await res.arrayBuffer());
}

export class ScreenerAudio {
  readonly ctx: AudioContext;
  private digits = new Map<number, AudioBuffer>();
  private noise: AudioBuffer | null = null;

  constructor() {
    const w = window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext };
    const Ctx = w.AudioContext || w.webkitAudioContext;
    if (!Ctx) throw new Error("This browser cannot play the test sounds.");
    this.ctx = new Ctx();
  }

  /** Call from a tap or click: browsers only allow sound after one. */
  async init() {
    await this.wake();
    if (this.noise) return;
    const base = `/screener/audio/${VOICE}`;
    const [noise, ...clips] = await Promise.all([
      fetchBuffer(this.ctx, `${base}-noise.wav`),
      ...ALLOWED_DIGITS.map((d) => fetchBuffer(this.ctx, `${base}-${d}.wav`)),
    ]);
    this.noise = noise;
    ALLOWED_DIGITS.forEach((d, i) => this.digits.set(d, clips[i]));
  }

  /** Resume the audio engine. Never waits forever: some phones leave resume() pending. */
  private async wake() {
    if (this.ctx.state === "running") return;
    await Promise.race([this.ctx.resume().catch(() => undefined), new Promise((r) => setTimeout(r, 1500))]);
  }

  /** True when the browser is letting us play sound. */
  get running() {
    return this.ctx.state === "running";
  }

  private route(ear: Ear) {
    // A mono source feeds the left input, the right input, or both of a 2-channel
    // merger, so "left" really is left only. Works in every browser.
    const merger = this.ctx.createChannelMerger(2);
    const out = this.ctx.createGain();
    out.gain.value = OUTPUT_SCALE;
    merger.connect(out).connect(this.ctx.destination);
    const inputs = ear === "left" ? [0] : ear === "right" ? [1] : [0, 1];
    return { merger, inputs };
  }

  /** A short beep in one ear, for the headphone check. */
  async tone(side: "left" | "right"): Promise<void> {
    await this.wake();
    const ctx = this.ctx;
    const { merger, inputs } = this.route(side);
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 1000;
    const g = ctx.createGain();
    const t0 = ctx.currentTime + 0.05;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(0.12, t0 + 0.05);
    g.gain.setValueAtTime(0.12, t0 + 0.6);
    g.gain.linearRampToValueAtTime(0, t0 + 0.7);
    osc.connect(g);
    for (const i of inputs) g.connect(merger, 0, i);
    osc.start(t0);
    osc.stop(t0 + 0.75);
    return new Promise((resolve) => {
      osc.onended = () => resolve();
    });
  }

  /** One triplet in noise at the given speech-to-noise ratio. Resolves when it has finished. */
  async playTriplet(digits: number[], snrDb: number, ear: Ear): Promise<void> {
    await this.wake();
    const ctx = this.ctx;
    if (!this.noise) throw new Error("Sounds are not loaded.");
    const ratio = Math.pow(10, snrDb / 10);
    const norm = 1 / Math.sqrt(1 + ratio);
    const speechGain = Math.sqrt(ratio) * norm;
    const noiseGain = norm;

    const { merger, inputs } = this.route(ear);
    const start = ctx.currentTime + 0.05;

    // Noise: starts at a random point so it never sounds the same twice.
    const noise = ctx.createBufferSource();
    noise.buffer = this.noise;
    noise.loop = true;
    const ng = ctx.createGain();
    noise.connect(ng);
    for (const i of inputs) ng.connect(merger, 0, i);

    // Speech.
    const sg = ctx.createGain();
    sg.gain.value = speechGain;
    for (const i of inputs) sg.connect(merger, 0, i);

    let t = start + LEAD_S;
    for (const d of digits) {
      const buf = this.digits.get(d);
      if (!buf) throw new Error(`Digit ${d} is not loaded.`);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(sg);
      src.start(t);
      t += buf.duration + GAP_S;
    }
    const end = t - GAP_S + TAIL_S;

    ng.gain.setValueAtTime(0, start);
    ng.gain.linearRampToValueAtTime(noiseGain, start + 0.1);
    ng.gain.setValueAtTime(noiseGain, end - 0.1);
    ng.gain.linearRampToValueAtTime(0, end);
    noise.start(start, Math.random() * Math.max(0, this.noise.duration - 1));
    noise.stop(end);

    return new Promise((resolve) => {
      noise.onended = () => resolve();
    });
  }

  /** A sample at an easy level, for setting the volume. */
  async sample(): Promise<void> {
    return this.playTriplet([2, 5, 9], 6, "both");
  }

  close() {
    void this.ctx.close().catch(() => undefined);
  }
}
