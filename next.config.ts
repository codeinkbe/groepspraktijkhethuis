import type { NextConfig } from "next";
import { withPlausibleProxy } from "next-plausible";  

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'tailwindcss.com'],
  },
};

export default withPlausibleProxy({
  customDomain: "https://analytics.codeink.be", // <-- Add it here too
})(nextConfig);
