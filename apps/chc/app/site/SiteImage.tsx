import NextImage from "next/image";
import { imageDimensions } from "../data/imageDimensions";

// Every image on the site goes through here.
//
// WHY: two problems, one component. First, images shipped without width and
// height reserve no space, so the page reflows as they arrive — that is what
// put 61 mobile URLs into Search Console's "poor CLS" bucket at 0.30 in June
// 2026. Second, nothing was going through the image optimizer, so 67 MB of
// legacy WordPress PNGs were served at full size to phones.
//
// SiteImage looks the intrinsic size up in the generated manifest, so no call
// site has to remember it, and hands local raster images to next/image for
// AVIF/WebP conversion and responsive sizing.
//
// SVG and anything not in the manifest still render, just as a plain <img>:
// vectors gain nothing from the optimizer, and a missing entry must never be
// able to break a page. Run _migration/genImageDimensions.mjs after adding
// files to public/ and the manifest catches up.

type SiteImageProps = {
  src?: string;
  alt: string;
  className?: string;
  /**
   * Viewport-relative layout hint, e.g. "(max-width: 860px) 100vw, 760px".
   * Only pass this for images whose box actually changes with the viewport.
   * next/image treats a `sizes` string with no `vw` unit as "I do not know the
   * width", and emits every entry of deviceSizes AND imageSizes — eleven
   * candidates for a 60px icon. Fixed boxes use `box` instead.
   */
  sizes?: string;
  /**
   * CSS box size in pixels for an image whose layout width never changes.
   * next/image is handed this rather than the intrinsic size, so the srcset is
   * 1x/2x of the box instead of eleven widths up to 1920.
   */
  box?: { width: number; height: number };
  /** Above the fold: eager, preloaded, high priority. Use sparingly. */
  priority?: boolean;
  /**
   * Load immediately but do not preload. For images that sit above the fold on
   * a wide screen and below it on a phone, where preloading would cost mobile
   * bandwidth for something the visitor may never scroll to.
   */
  eager?: boolean;
};

export function SiteImage({ src, alt, className, sizes, box, priority, eager }: SiteImageProps) {
  if (!src) return null;
  const key = src.split("?")[0].split("#")[0];
  const dim = imageDimensions[key];
  const optimizable =
    dim && !key.toLowerCase().endsWith(".svg") && key.startsWith("/") && !key.startsWith("//");

  if (!optimizable) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        {...(dim ? { width: dim[0], height: dim[1] } : {})}
        loading={priority || eager ? "eager" : "lazy"}
        decoding="async"
        {...(priority
          ? { fetchPriority: "high" as const }
          : eager
            // React's server renderer emits <link rel="preload"> for any image
            // that is neither lazy nor low priority. Without this, `eager` also
            // preloads, which is exactly what it exists not to do.
            ? { fetchPriority: "low" as const }
            : {})}
      />
    );
  }

  // A fixed box gets its display size, so the optimizer produces 1x/2x of the
  // real slot. Everything else keeps its intrinsic size and a `vw`-based hint.
  const width = box ? box.width : dim[0];
  const height = box ? box.height : dim[1];
  const responsive = sizes && sizes.includes("vw") ? { sizes } : {};

  return (
    <NextImage
      src={key}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...responsive}
      priority={priority}
      {...(!priority && eager ? { loading: "eager" as const, fetchPriority: "low" as const } : {})}
    />
  );
}
