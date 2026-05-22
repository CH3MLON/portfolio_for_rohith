/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#040d06',
        surface: '#09150e',
        border: '#122c1b',
        muted: '#c3d6cb',
        primary: '#34d399',
        accent: '#059669',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        bounce3: 'bounce 0.8s infinite',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } }
      }
    },
  },
  plugins: [],
}
