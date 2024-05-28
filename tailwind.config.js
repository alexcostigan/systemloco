module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'menu-bg': '#7593af',
        'font-colour': '#ebeff2',
        'button-primary': '#476f95'

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}
