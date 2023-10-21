/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "jakarta-sans": ["Plus Jakarta Sans", 'sans-serif'],
      "noto-sans": ['Noto Sans', 'sans-serif'],
      "Red-Hat": ['Red Hat Display', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
