/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1E42B4",      // Your main blue
        coral: "#2560E6",      // Complementary red/coral
        background: "#F9FAFB", // Light background
        heading: "#1E293B",    // Dark text
        muted: "#6B7280",      // Gray text
      },
    },
  },
  plugins: [],
};
