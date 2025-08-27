import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return[
      {
        source:'/series/:slug',
        destination:'/articles/:slug',
        permanent:true
      }
    ]
  },
};

export default nextConfig;
