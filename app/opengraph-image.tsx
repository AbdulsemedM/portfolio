import { ImageResponse } from "next/og";
import { SITE, SEO } from "@/lib/constants";

export const runtime = "edge";
export const alt = SEO.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#030712",
          padding: "80px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #22d3ee, #a855f7)",
            marginBottom: "40px",
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#94A3B8",
            lineHeight: 1.4,
          }}
        >
          {SITE.shortTitle} · {SITE.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
