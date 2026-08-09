import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Demo product imagery is local, trusted SVG placeholders.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
