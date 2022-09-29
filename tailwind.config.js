/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "login": "url('~/assets/images/image1.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      }),
    },
  },
  plugins: [],
};
