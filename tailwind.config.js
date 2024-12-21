import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities }) => {
      addBase({
        '*': { "@apply antialiased": {}, },
        "html": { "@apply scroll-smooth": {} },
        "body": { "@apply text-base": {} },
        "body::-webkit-scrollbar": { "@apply hidden": {} },
        "input, textarea": { "@apply bg-transparent": {} },
        "input:focus, textarea:focus, select:focus, button:focus": { "@apply outline-none": {} },
        "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button": { "@apply hidden": {} },
      });
      addComponents({
        ".main-layout::-webkit-scrollbar": { "@apply hidden": {} },
      });
      addUtilities({
        ".center": { "@apply grid place-items-center": {} },
        ".prevent-scrolling": { "@apply overflow-hidden": {} },
      });
    }),
  ],
}