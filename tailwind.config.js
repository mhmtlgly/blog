/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addBase, config }) => {
      addBase({
        html: {
          color: config("theme.colors.gray.700"),
          "&.dark": {
            "background-color": config("theme.colors.gray.700"),
          },
        },
      }),
        addBase({
          ".dark": {
            color: config("theme.colors.gray.300"),
            img: {
              // filter: "grayscale(1)",
            },
            a: {
              color: config("theme.colors.gray.300"),
            },
          },
        })
    },
  ],
}
