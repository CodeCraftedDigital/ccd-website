import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Code Crafted Digital - Enterprise Software Engineering for Michigan";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #000000 0%, #0062a4 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      {/* Company Name */}
      <div
        style={{
          fontSize: 80,
          fontWeight: "bold",
          color: "#ffffff",
          textAlign: "center",
          marginBottom: 40,
          letterSpacing: "-2px",
        }}
      >
        Code Crafted Digital
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 48,
          color: "#ffffff",
          textAlign: "center",
          opacity: 0.9,
        }}
      >
        Enterprise Software Engineering for Michigan
      </div>

      {/* Accent bar */}
      <div
        style={{
          width: "200px",
          height: "4px",
          background: "#ffffff",
          marginTop: 40,
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
