module.exports = {
  plugins: [
    // Correct way to include Tailwind CSS as a PostCSS plugin
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
