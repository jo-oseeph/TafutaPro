/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#718CD7",      // Your main blue
        coral: "#F76C6C",      // Complementary red/coral
        background: "#F9FAFB", // Light background
        heading: "#1E293B",    // Dark text
        muted: "#6B7280",      // Gray text
      },
    },
  },
  plugins: [],
};
