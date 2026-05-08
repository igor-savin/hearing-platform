import { ImageResponse } from "next/og";
import { siteName } from "@/lib/site";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#115e68",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%"
        }}
      >
        <div style={{ color: "#f3c37a", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
          AUDIOLOGY AND HEARING CARE
        </div>
        <div style={{ fontSize: 70, fontWeight: 900, lineHeight: 1.05, marginTop: 24, textAlign: "center" }}>
          {siteName}
        </div>
        <div style={{ fontSize: 32, marginTop: 28 }}>
          Serving Westchester County and nearby communities
        </div>
      </div>
    ),
    size
  );
}
