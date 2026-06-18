import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/courts/:id",
        destination: "/creches/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
