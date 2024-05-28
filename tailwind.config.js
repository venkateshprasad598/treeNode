/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        "border-color": "#6B6B6B",
        pulseYellow: {
          300: "#FFE88A",
          600: '#8C7000',
        },
        pulseGreen: {
          500: '#34C759', // Default shade
        },
        pulseGrey: {
          100: "#E2E2E2",
          700: "#4f4f50",
          800: '#323232',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg,rgba(255, 255, 255, 0) 10%,#ffffff 250%)',
      }
    },
  },
  plugins: [],
}

