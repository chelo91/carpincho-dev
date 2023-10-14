import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  }),
  output: "hybrid",
  integrations: [react()]
});