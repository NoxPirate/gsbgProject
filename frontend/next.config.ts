import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Create a new watchOptions object to avoid modifying read-only properties
      const newWatchOptions = { ...config.watchOptions };

      // Ensure ignored is an array and add the new pattern
      newWatchOptions.ignored = [
        ...(Array.isArray(newWatchOptions.ignored) ? newWatchOptions.ignored : []),
        '**/google-cloud-sdk/**',
      ];

      // Assign the new watchOptions object back to config
      config.watchOptions = newWatchOptions;
    }
    return config;
  },
};

export default nextConfig;
