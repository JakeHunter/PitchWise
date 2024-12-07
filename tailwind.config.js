// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS and TS files in the src folder
    "./public/index.html", // If you're using an HTML file
  ],
  theme: {
    extend: {
      colors: {
        magenta: {
          600: "#D5006D", // Customize your magenta color
        },
      },
    },
  },
  plugins: [],
};
