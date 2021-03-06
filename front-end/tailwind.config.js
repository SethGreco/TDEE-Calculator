const tailwindcss = require("tailwindcss");

module.exports = {
  prefix: '',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
