// Generates the Hearing Better hub graphics (SVG, live text) into public/assets/core/.
// Usage: node _migration/genHearingBetterGraphics.mjs
import { writeFileSync } from "node:fs";
const OUT = "public/assets/core/";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Segoe UI', Helvetica, Arial, sans-serif";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function hero(file, label, sub) {
  const words = label.split(" "); const lines = []; let cur = "";
  for (const w of words) { if ((cur + " " + w).trim().length > 22) { lines.push(cur); cur = w; } else cur = (cur + " " + w).trim(); }
  lines.push(cur);
  const t = lines.map((l, i) => `<text x="70" y="${170 + i * 54}" font-family="${SERIF}" font-size="46" font-weight="700" fill="#ffffff">${esc(l)}</text>`).join("\n    ");
  const y = 170 + lines.length * 54;
  writeFileSync(OUT + file, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" role="img" aria-label="${esc(label)}">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#155f6b"/><stop offset="1" stop-color="#105966"/></linearGradient><clipPath id="card"><rect width="900" height="480" rx="26"/></clipPath></defs>
  <g clip-path="url(#card)">
    <rect width="900" height="480" fill="url(#bg)"/>
    <circle cx="700" cy="150" r="230" fill="#ffffff" opacity="0.05"/>
    <circle cx="740" cy="120" r="140" fill="#86d0d5" opacity="0.14"/>
    <g stroke="#86d0d5" stroke-width="6" fill="none" opacity="0.5"><path d="M70 420 a40 40 0 0 1 0 -80"/><path d="M96 440 a70 70 0 0 1 0 -120"/></g>
    ${t}
    <rect x="70" y="${y - 20}" width="70" height="6" rx="3" fill="#86d0d5"/>
    <text x="70" y="${y + 25}" font-family="${SANS}" font-size="19" fill="#86d0d5" letter-spacing="1.2">${esc(sub)}</text>
  </g>
</svg>\n`);
}
hero("hearing-better__tv-and-streaming.svg", "Hear the TV clearly", "CALIFORNIA HEARING CENTER");
hero("hearing-better__phones-and-captions.svg", "Phone calls and captions", "CALIFORNIA HEARING CENTER");
hero("hearing-better__noisy-rooms-and-distance.svg", "Noisy rooms and distance", "CALIFORNIA HEARING CENTER");
hero("hearing-better__family-guide.svg", "Helping someone you love hear", "CALIFORNIA HEARING CENTER");

function frame(w, h, label, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">
  <rect width="${w}" height="${h}" rx="26" fill="#fbf7ef"/>
  ${body}
</svg>\n`;
}
// Five ways
{
  const items = [["1", "Communication skills", "Learn 5 Keys skills for noisy rooms."], ["2", "Listening training", "Practice at home with LACE or clEAR."], ["3", "TV streamer", "Send TV sound to your hearing aids."], ["4", "Captioning glasses", "See live captions of speech."], ["5", "Wireless microphone", "Put a mic near the speaker."]];
  let b = `<text x="50" y="80" font-family="${SERIF}" font-size="40" font-weight="700" fill="#155f6b">Five ways to hear better</text>
  <text x="50" y="118" font-family="${SANS}" font-size="20" fill="#5c7178">Hearing aids help. These help too. Try at least two.</text>`;
  items.forEach(([n, t, d], i) => {
    const y = 150 + i * 88;
    b += `<rect x="50" y="${y}" width="800" height="72" rx="14" fill="#ffffff" stroke="#86d0d5" stroke-width="2"/>
  <circle cx="92" cy="${y + 36}" r="22" fill="#155f6b"/><text x="92" y="${y + 44}" text-anchor="middle" font-family="${SANS}" font-size="24" font-weight="700" fill="#ffffff">${n}</text>
  <text x="135" y="${y + 32}" font-family="${SANS}" font-size="24" font-weight="700" fill="#21424b">${esc(t)}</text>
  <text x="135" y="${y + 58}" font-family="${SANS}" font-size="19" fill="#5c7178">${esc(d)}</text>`;
  });
  b += `<text x="50" y="612" font-family="${SANS}" font-size="17" fill="#155f6b" font-weight="700" letter-spacing="1">CALIFORNIA HEARING CENTER · 650-342-9449</text>`;
  writeFileSync(OUT + "hearing-better__five-ways.svg", frame(900, 640, "Five ways to hear better: communication skills, listening training, a TV streamer, captioning glasses and a wireless microphone.", b));
}
// Family talk card
{
  const items = [["Get their attention", "Say their name. Wait for eye contact."], ["Face them", "Stay close. Keep your face in the light."], ["Rephrase", "Use different words. Do not just repeat."], ["Cut the noise", "Turn off the TV. Move to a quiet spot."], ["Pause", "Give them time to follow. Do not rush."]];
  let b = `<text x="50" y="80" font-family="${SERIF}" font-size="40" font-weight="700" fill="#155f6b">Five habits for talking together</text>
  <text x="50" y="118" font-family="${SANS}" font-size="20" fill="#5c7178">Small changes that help someone with hearing loss follow you.</text>`;
  items.forEach(([t, d], i) => {
    const y = 150 + i * 88;
    b += `<rect x="50" y="${y}" width="800" height="72" rx="14" fill="#ffffff" stroke="#86d0d5" stroke-width="2"/>
  <circle cx="92" cy="${y + 36}" r="22" fill="#e0ae3c"/><text x="92" y="${y + 44}" text-anchor="middle" font-family="${SANS}" font-size="24" font-weight="700" fill="#21424b">${i + 1}</text>
  <text x="135" y="${y + 32}" font-family="${SANS}" font-size="24" font-weight="700" fill="#21424b">${esc(t)}</text>
  <text x="135" y="${y + 58}" font-family="${SANS}" font-size="19" fill="#5c7178">${esc(d)}</text>`;
  });
  b += `<text x="50" y="612" font-family="${SANS}" font-size="17" fill="#155f6b" font-weight="700" letter-spacing="1">CALIFORNIA HEARING CENTER · 650-342-9449</text>`;
  writeFileSync(OUT + "hearing-better__family-talk-card.svg", frame(900, 640, "Five habits for talking with someone who has hearing loss: get their attention, face them, rephrase, cut the noise, and pause.", b));
}
// Lancet chart
{
  const d = [["Hearing loss (midlife)", 7], ["High LDL cholesterol (midlife)", 7], ["Less education (early life)", 5], ["Social isolation (later life)", 5], ["Depression", 3], ["Traumatic brain injury", 3], ["Air pollution", 3], ["Vision loss (untreated)", 2], ["Physical inactivity", 2], ["Diabetes", 2], ["Smoking", 2], ["High blood pressure", 2], ["Obesity", 1], ["Alcohol (over 21 units a week)", 1]];
  const W = 900, rowH = 38, top = 150, H = top + d.length * rowH + 120;
  let b = `<text x="40" y="70" font-family="${SERIF}" font-size="34" font-weight="700" fill="#155f6b">14 risk factors for dementia</text>
  <text x="40" y="104" font-family="${SANS}" font-size="19" fill="#5c7178">Share of dementia cases worldwide linked to each factor. About 45% in total.</text>`;
  d.forEach(([n, v], i) => {
    const y = top + i * rowH; const hl = i === 0;
    b += `<text x="40" y="${y + 24}" font-family="${SANS}" font-size="18" ${hl ? 'font-weight="700"' : ""} fill="#21424b">${esc(n)}</text>
  <rect x="380" y="${y + 4}" width="${v * 62}" height="26" rx="6" fill="${hl ? "#155f6b" : "#86d0d5"}"/>
  <text x="${380 + v * 62 + 10}" y="${y + 24}" font-family="${SANS}" font-size="18" font-weight="700" fill="${hl ? "#155f6b" : "#21424b"}">${v}%</text>`;
  });
  const fy = top + d.length * rowH + 30;
  b += `<text x="40" y="${fy}" font-family="${SANS}" font-size="15" fill="#5c7178">These are population estimates, not your personal risk. They show association, not proof of cause.</text>
  <text x="40" y="${fy + 24}" font-family="${SANS}" font-size="15" fill="#5c7178">Source: Livingston et al., Lancet Commission, 2024. doi 10.1016/S0140-6736(24)01296-0</text>
  <text x="40" y="${fy + 60}" font-family="${SANS}" font-size="16" font-weight="700" fill="#155f6b" letter-spacing="1">CALIFORNIA HEARING CENTER · Redrawn by CHC</text>`;
  writeFileSync(OUT + "hearing-better__lancet-2024-chart.svg", frame(W, H, "Bar chart of the 14 modifiable dementia risk factors in the 2024 Lancet Commission report. Hearing loss and high LDL cholesterol are tied highest at 7% each. Population estimates, not personal risk.", b));
}
// Wheel
{
  const items = ["Diabetes", "Smoking", "Medications", "Heart health", "Kidney disease", "Balance", "Dementia", "Tinnitus"];
  const cx = 450, cy = 400, R = 260;
  let b = `<text x="450" y="60" text-anchor="middle" font-family="${SERIF}" font-size="34" font-weight="700" fill="#155f6b">Hearing and your health</text>
  <text x="450" y="92" text-anchor="middle" font-family="${SANS}" font-size="18" fill="#5c7178">Hearing loss is linked to many other conditions.</text>`;
  items.forEach((t, i) => {
    const a = (-90 + i * 45) * Math.PI / 180; const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
    b += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(0)}" y2="${y.toFixed(0)}" stroke="#86d0d5" stroke-width="3"/>`;
  });
  items.forEach((t, i) => {
    const a = (-90 + i * 45) * Math.PI / 180; const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
    b += `<rect x="${(x - 90).toFixed(0)}" y="${(y - 28).toFixed(0)}" width="180" height="56" rx="28" fill="#ffffff" stroke="#155f6b" stroke-width="2.5"/>
  <text x="${x.toFixed(0)}" y="${(y + 7).toFixed(0)}" text-anchor="middle" font-family="${SANS}" font-size="18" font-weight="700" fill="#21424b">${esc(t)}</text>`;
  });
  b += `<circle cx="${cx}" cy="${cy}" r="88" fill="#155f6b"/><text x="${cx}" y="${cy - 4}" text-anchor="middle" font-family="${SERIF}" font-size="26" font-weight="700" fill="#ffffff">Hearing</text><text x="${cx}" y="${cy + 28}" text-anchor="middle" font-family="${SERIF}" font-size="26" font-weight="700" fill="#ffffff">loss</text>
  <text x="450" y="742" text-anchor="middle" font-family="${SANS}" font-size="15" fill="#5c7178">Links are associations found in research. They do not prove cause. Ask your doctor about your own health.</text>
  <text x="450" y="774" text-anchor="middle" font-family="${SANS}" font-size="16" font-weight="700" fill="#155f6b" letter-spacing="1">CALIFORNIA HEARING CENTER</text>`;
  writeFileSync(OUT + "hearing-better__health-wheel.svg", frame(900, 800, "Wheel graphic with hearing loss in the center and eight linked topics around it: diabetes, smoking, medications, heart health, kidney disease, balance, dementia, and tinnitus.", b));
}
console.log("done");
