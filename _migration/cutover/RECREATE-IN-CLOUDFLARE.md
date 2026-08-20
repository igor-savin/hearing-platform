# calhearing.com — records to recreate in Cloudflare

Captured from the authoritative GoDaddy nameserver (ns33.domaincontrol.com)
on 2026-08-20, immediately before the nameserver move. Full raw dump is in
`zone-calhearing-pre-cutover.txt`.

The whole zone is nine records. Verified absent, so there is nothing hidden
to lose: no AAAA, no CAA, no SRV, no DKIM, no SPF, no DMARC. The only
subdomain is `www`.

## Must exist in Cloudflare BEFORE the nameservers are switched

Email is the thing a nameserver move breaks, because the new provider starts
with an empty zone. Confirm all seven of these first.

| Type | Name | Value | Priority |
|------|------|-------|----------|
| MX | @ | aspmx.l.google.com | 1 |
| MX | @ | alt1.aspmx.l.google.com | 5 |
| MX | @ | alt2.aspmx.l.google.com | 5 |
| MX | @ | alt3.aspmx.l.google.com | 10 |
| MX | @ | alt4.aspmx.l.google.com | 10 |
| TXT | @ | google-site-verification=4d9EGs-Qji8we9yUnAU7ggJpjqT0HPE6GlaUeGdzUso | — |
| TXT | @ | google-site-verification=5ZviaZJSPQ5bfBB8WuG9rKo0I8uhXWFeJK7Wx39m3x8 | — |

Those two TXT records are Search Console ownership for two different
accounts. They are what makes Search Console access survive the move, so
they matter as much as the MX records.

## Pointed at Vercel

| Type | Name | Value | Proxy |
|------|------|-------|-------|
| A | @ | read off the Vercel domains screen | DNS only (grey cloud) |
| CNAME | www | read off the Vercel domains screen | DNS only (grey cloud) |

Do not copy these values from anywhere else — they are account and project
specific. Keep them unproxied: the sister site is not proxied either, and
putting Cloudflare in front of Vercel means two CDNs and two certificates
for no gain.

## Deliberately NOT recreated

`mail.calhearing.com` and `admin.calhearing.com` both pointed at
45.33.82.117. Ports 22, 25, 80, 110, 143, 443, 465, 587, 993 and 995 were
all verified closed, and neither host answered HTTP. They are dead records;
letting them lapse is the point of the exercise.

## New records worth adding while the zone is being rebuilt

Neither exists today. See the cutover report for the reasoning.

| Type | Name | Value |
|------|------|-------|
| TXT | @ | v=spf1 include:_spf.google.com ~all |
| TXT | _dmarc | v=DMARC1; p=none; rua=mailto:dmarc@calhearing.com; fo=1 |

`dmarc@calhearing.com` must exist as a Workspace alias or group first, or
the reports bounce. Keep the rua address on this domain — pointing it at a
gmail.com address needs an authorisation record on gmail.com that you cannot
add, and the reports would be silently dropped.
