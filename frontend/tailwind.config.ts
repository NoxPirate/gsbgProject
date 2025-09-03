import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4682B4',
        secondary: '#E6F0FA',
        dark: '#0A2540',
        gray: '#A9B7C6',
        light: '#F5F7FA',
        accent: '#00CED1',
        text: '#0096D6',
        casestudy: 'rgba(255, 218, 224, 0.871)',
      },
    },
  },
  plugins: [],
};
export default config;
