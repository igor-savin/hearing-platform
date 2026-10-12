// A continuous, lifelike "this is what you hear" soundscape, built entirely in
// the browser with the Web Audio API — no audio files to download or license.
//
// The point: demonstrate the most common kind of hearing loss (age-related,
// high-frequency) the way a patient actually experiences it. A warm room tone
// and low murmur are always there; on top sit the HIGH-FREQUENCY details that
// loss steals first — birdsong, a bright sparkle, the crisp consonants of
// speech. In "natural" (unaided) mode a heavy low-pass rolls those details away
// into a muffle: you can tell sound is present but the life is gone. Flip to
// "with hearing aid" and the top end, a gentle clarity boost, and light
// compression bring the detail right back.
//
// One toggle, an obvious and emotional difference. setAided() ramps smoothly so
// switching feels instant and live.

export class HearingScene {
  private ctx: AudioContext;
  private master: GainNode;
  private comp: DynamicsCompressorNode;
  private lossFilter: BiquadFilterNode;
  private highShelf: BiquadFilterNode;
  private preBus: GainNode;
  private bedGain: GainNode;
  private lifeGain: GainNode;
  private noiseBuffer: AudioBuffer;
  private bedNodes: AudioScheduledSourceNode[] = [];
  private lifeTimer: number | null = null;
  private running = false;
  private aided = true;

  constructor(ctx: AudioContext) {
    this.ctx = ctx;

    // Output chain: (bed + life) -> preBus -> highShelf -> lossFilter -> comp -> master
    this.master = ctx.createGain();
    this.master.gain.value = 0.0001;
    this.master.connect(ctx.destination);

    this.comp = ctx.createDynamicsCompressor();
    this.comp.connect(this.master);

    this.lossFilter = ctx.createBiquadFilter();
    this.lossFilter.type = "lowpass";
    this.lossFilter.frequency.value = 7000;
    this.lossFilter.Q.value = 0.6;
    this.lossFilter.connect(this.comp);

    this.highShelf = ctx.createBiquadFilter();
    this.highShelf.type = "highshelf";
    this.highShelf.frequency.value = 3000;
    this.highShelf.gain.value = 5;
    this.highShelf.connect(this.lossFilter);

    this.preBus = ctx.createGain();
    this.preBus.connect(this.highShelf);

    this.bedGain = ctx.createGain();
    this.bedGain.gain.value = 0.5;
    this.bedGain.connect(this.preBus);

    this.lifeGain = ctx.createGain();
    this.lifeGain.gain.value = 0.9;
    this.lifeGain.connect(this.preBus);

    // Reusable 1s white-noise buffer for murmur + consonant ticks.
    const len = Math.floor(ctx.sampleRate);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buf;
  }

  start() {
    if (this.running) return;
    this.running = true;
    const ctx = this.ctx;
    if (ctx.state === "suspended") void ctx.resume();

    // Warm pad: two detuned low sines = a soft, present room tone.
    const oscA = ctx.createOscillator();
    oscA.type = "sine";
    oscA.frequency.value = 180;
    const oscB = ctx.createOscillator();
    oscB.type = "sine";
    oscB.frequency.value = 185.5;
    const padGain = ctx.createGain();
    padGain.gain.value = 0.05;
    oscA.connect(padGain);
    oscB.connect(padGain);
    padGain.connect(this.bedGain);

    // Murmur: looped noise band-passed to ~voice range = "people are around."
    const murmur = ctx.createBufferSource();
    murmur.buffer = this.noiseBuffer;
    murmur.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 520;
    bp.Q.value = 0.8;
    const murmurGain = ctx.createGain();
    murmurGain.gain.value = 0.045;
    murmur.connect(bp).connect(murmurGain).connect(this.bedGain);

    // Slow swell so the murmur breathes.
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.15;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain).connect(murmurGain.gain);

    oscA.start();
    oscB.start();
    murmur.start();
    lfo.start();
    this.bedNodes = [oscA, oscB, murmur, lfo];

    this.applyAided(false);

    const now = ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(0.0001, now);
    this.master.gain.exponentialRampToValueAtTime(this.aided ? 0.9 : 0.6, now + 0.4);

    this.scheduleLife();
  }

  setAided(aided: boolean) {
    this.aided = aided;
    this.applyAided(true);
  }

  stop() {
    if (!this.running) return;
    this.running = false;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    if (this.lifeTimer != null) {
      window.clearTimeout(this.lifeTimer);
      this.lifeTimer = null;
    }
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(Math.max(this.master.gain.value, 0.0001), now);
    this.master.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    const nodes = this.bedNodes;
    this.bedNodes = [];
    window.setTimeout(() => {
      nodes.forEach((n) => {
        try {
          n.stop();
        } catch {
          // already stopped
        }
        try {
          n.disconnect();
        } catch {
          // already disconnected
        }
      });
    }, 300);
  }

  isRunning() {
    return this.running;
  }

  // Smoothly move the whole chain between "natural loss" and "aided" voicings.
  private applyAided(ramp: boolean) {
    const now = this.ctx.currentTime;
    const tc = 0.04;
    const set = (p: AudioParam, v: number) =>
      ramp ? p.setTargetAtTime(v, now, tc) : p.setValueAtTime(v, now);

    set(this.lossFilter.frequency, this.aided ? 7000 : 1350);
    set(this.highShelf.gain, this.aided ? 5 : -24);
    set(this.master.gain, this.running ? (this.aided ? 0.9 : 0.6) : 0.0001);
    // Light wide-dynamic-range compression only when aided (what a hearing aid does).
    set(this.comp.threshold, this.aided ? -26 : 0);
    set(this.comp.ratio, this.aided ? 3 : 1);
    set(this.comp.knee, 24);
  }

  private scheduleLife() {
    if (!this.running) return;
    this.spawnLifeEvent();
    const delay = 500 + Math.random() * 1300;
    this.lifeTimer = window.setTimeout(() => this.scheduleLife(), delay);
  }

  // A high-frequency detail event — the kind of sound loss removes first.
  private spawnLifeEvent() {
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const kind = Math.random();

    if (kind < 0.5) {
      // Bird chirp: a quick rising-then-settling sine near 3-5 kHz.
      const f0 = 3200 + Math.random() * 2000;
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f0, now);
      osc.frequency.exponentialRampToValueAtTime(f0 * 1.5, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(f0 * 1.15, now + 0.2);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.5, now + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
      osc.connect(g).connect(this.lifeGain);
      osc.start(now);
      osc.stop(now + 0.32);
    } else if (kind < 0.8) {
      // Sparkle: a bright bell that decays.
      const f = 4500 + Math.random() * 2000;
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = f;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.32, now + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      osc.connect(g).connect(this.lifeGain);
      osc.start(now);
      osc.stop(now + 0.55);
    } else {
      // Consonant tick: the crisp "t / s / k" energy that makes speech legible.
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.value = 3800;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.28, now + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      src.connect(hp).connect(g).connect(this.lifeGain);
      src.start(now);
      src.stop(now + 0.1);
    }
  }
}
