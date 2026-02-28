import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Webpack config needed for three.js and @react-three/fiber
  webpack: (config) => {
    // three.js GLSL shader file support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
