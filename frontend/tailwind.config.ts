import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern, professional palette (deep blue + teal accent + soft neutrals)
        primary: '#0B63A6',    // strong professional blue
        accent: '#00BFA6',     // teal accent for highlights and CTAs
        dark: '#06263A',       // deep navy for headings and text
        text: '#06263A',       // main text color (same as dark)
        gray: '#94A3B8',       // neutral gray for muted text
        secondary: '#F4F7FB',  // soft off-white backgrounds
        light: '#FBFDFF',      // page background
        casestudy: 'rgba(255, 247, 238, 0.95)', // warm case-study card bg
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-1000px) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        floatUp: "floatUp 25s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;