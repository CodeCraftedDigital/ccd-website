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
  // Fetch the SVG logo
  const logoData = await fetch(
    new URL("/images/ccd-logo-white.svg", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      {/* Logo */}
      <img
        // @ts-ignore
        src={logoData}
        alt='Code Crafted Digital Logo'
        width='250'
        height='250'
        style={{ marginBottom: 50 }}
      />

      {/* Tagline */}
      <div
        style={{
          fontSize: 52,
          color: "#0062a4",
          textAlign: "center",
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        Enterprise Software Engineering for Michigan
      </div>
    </div>,
    {
      ...size,
    },
  );
}
