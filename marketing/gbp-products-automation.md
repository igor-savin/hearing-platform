# Driving the Google Business Profile **Products** section

Verified working 2026-08-26 against California Hearing Center (San Mateo, San Carlos)
and Audiology Associates of Westchester (Harrison). Six products entered.

This is the sibling of `references/gbp-automation.md`, which covers **Posts**. Products
is a different section with a different form and different traps. Read both.

## The UI path

Google Search, signed in as owner → search the business name → owner toolbar →
**Edit products** → **Add product**.

Faster than Posts: there is no "Manage your Business Profile" hop, the toolbar on the
search page goes straight there.

## The form

Six fields, in this order:

| Field | Notes |
|---|---|
| Product name* | 58-char limit. Use the bare product name — `Signia MaX`, not `Signia MaX Hearing Aids`. Matches the existing catalogue. |
| Select a category* | Dropdown. **See the reorder trap below.** |
| Product price (USD) | Optional. Leave empty when no price is published — an invented range is a false claim on a medical profile. |
| Product description | 1,000-char limit. House style is ~300 chars, one paragraph. |
| Product landing page url | Optional, 1,500-char limit. This is what produces the **Visit site** button; there is no separate button picker as there is on Posts. |
| Photo | Dropzone. See the upload section. |

`Publish` bottom right. On success the URL becomes `.../editprofile/products/confirmation`.

## Traps

**1. The form renders blank for up to ~20 seconds.** The dialog frame appears with
the title "Add product" and an empty body. Typing into it goes nowhere — silently.
This bit us twice. **Always screenshot and confirm the fields are visible before
typing.** Waiting 8s is not always enough; 20s happens.

**2. The category dropdown re-orders between loads.** On one load it was
`Create a new category / Hearing Protection / Hearing Aid`; on the next,
`Create a new category / Hearing Aid / Hearing Protection`. Clicking a remembered
coordinate will silently file the product under the wrong category. **Screenshot the
open dropdown, read the labels, then click — and screenshot again to confirm what
landed in the field.**

**3. Fill the category LAST.** Typing into the text fields first and selecting the
category at the end avoids the dropdown re-render interfering with the typed fields.

**4. Category names differ per practice.** CHC uses **"Hearing Aid"** (singular).
AAW uses **"Hearing Aids"** (plural). Picking the wrong one creates a second,
near-duplicate category section on the profile. Always read the listing's own
existing category rather than assuming.

**5. New products enter a PENDING review queue.** The tile carries a `PENDING` badge
in the products grid. In practice most cleared within a few minutes, but a submitted
product is not an approved product — re-open the list and check, exactly as with Posts.

## The photo upload

Same iframe problem as Posts, same fix. The compose dialog lives in a **same-origin
iframe**; `find` / `read_page` only walk the top document, so `file_upload` cannot
target the real input.

1. Create a bridge `<input type="file" id="claude-up">` in the **top** document with
   an `aria-label`, styled visible.
2. `find` it, `file_upload` a **container path** into it.
3. Copy the bytes into the iframe realm explicitly and assign (see below).
4. Dispatch `input` then `change` built with `new win.Event(...)`.
5. Remove the bridge input **before** publishing, or it stays visible on the page.

```js
await (async () => {
  const src = document.getElementById('claude-up')?.files?.[0];
  let target = null, win = null;
  for (const f of document.querySelectorAll('iframe')) {
    try { const d = f.contentDocument; if (!d) continue;
      const el = d.querySelector('input[type=file]');
      if (el) { target = el; win = f.contentWindow; break; } } catch (e) {}
  }
  const bytes = new Uint8Array(await src.arrayBuffer());
  const wb = new win.Uint8Array(bytes.length); wb.set(bytes);   // explicit copy
  const inner = new win.File([wb], src.name, { type: 'image/jpeg' });
  const dt = new win.DataTransfer(); dt.items.add(inner);
  target.files = dt.files;
  if (target.files[0].size !== src.size) return 'ABORT';        // guard, do not skip
  target.dispatchEvent(new win.Event('input',  { bubbles: true }));
  target.dispatchEvent(new win.Event('change', { bubbles: true }));
  document.getElementById('claude-up')?.remove();
  return 'OK';
})()
```

Two things worth knowing that are not in the Posts playbook:

- **Wrap in `await (async () => { ... })()`.** A bare `(async () => {...})()` returns a
  Promise that the tool serialises as `{}` — you get no result and cannot tell whether
  it worked.
- **`file_upload` only accepts session paths.** Container paths under the working
  directory are rejected; copy the file into the session outputs folder first.
- **Verify `target.files[0].size` before dispatching.** Handing the isolated-world
  ArrayBuffer straight to `new win.File([...])` produces a silent 0-byte file.

## Image preparation

Square, white ground, device centred. Trim the source to its content bounding box and
re-centre with equal padding so a set of products reads as a set in the grid rather
than as three different croppings:

```python
box = ImageChops.difference(flat, white).convert("L").point(lambda v: 255 if v > 8 else 0).getbbox()
```

1000×1000 JPEG at quality 92 lands around 50 KB. WebP sources from the sites need
converting; transparency needs flattening onto white.

## Check before you add

**Read the existing catalogue first.** Oticon Reveal was already on all three listings —
half the intended work was already done, and adding it again would have created
duplicates. `View all` on the public panel shows the full list including a `View more`
fold.
