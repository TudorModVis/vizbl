import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-bg' : '#050505',
        'custom-white' : '#F1F1F1',
        'gray-border' : '#A0A0A0',
        'card-bg' : '#1E1E1E',
        'dark-gray' : '#111111'
      },
      fontFamily: {
        'roboto' : "'Roboto', sans-serif"
      },
    },
    screens: {
      xxs: "360px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smm: "900px",
      mmd: "1140px",
      md: "1280px",
      lg: "1500px",
      xl: "1700px",
      xxl: "1800px",
      '2k': "2048px",
      '4k': "3000px",
    },
  },
};
export default config;
