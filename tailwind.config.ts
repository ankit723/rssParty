import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-color': '#fc6e00',
        'primary-color-10': 'rgba(252, 110, 0, 0.1)',
      },
    },
  },
   plugins: [
    function ({ addUtilities }:{addUtilities:any}) {
      addUtilities({
        'no-scrollbar': {
          'overflow': 'hidden',
        },
      });
    },
  ],
};
export default config;
