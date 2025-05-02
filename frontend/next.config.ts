import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // This rule prevents issues with pdf.js and canvas
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    
    // Ensure node native modules are ignored
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };
    
    return config;
  },
  // Add this section to resolve the cross-origin warning
  experimental: {
    allowedDevOrigins: [
      'https://main-sunai.jml2s5.easypanel.host',
      'main-sunai.jml2s5.easypanel.host'
    ],
  },
};

export default nextConfig;
