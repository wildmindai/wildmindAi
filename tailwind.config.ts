import type { Config } from 'tailwindcss';
import {
  colors,
  fontFamily,
  fontSize,
  screens,
  spacing,
  borderRadius,
  backdropBlur,
  boxShadow,
  animation,
  keyframes,
  backgroundImage,
} from './src/config/tailwind';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      spacing,
      borderRadius,
      backdropBlur,
      boxShadow,
      animation,
      keyframes,
      backgroundImage,
      screens,
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode with class strategy
};

export default config; 