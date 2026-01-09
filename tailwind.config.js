/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'font-sans' utilisera Inter par défaut (pour tout le texte courant)
        sans: ['"Inter"', 'sans-serif'],
        // 'font-display' pour les gros titres (Archivo Black)
        display: ['"Archivo Black"', 'sans-serif'],
        // 'font-mono' pour le code (JetBrains Mono)
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          900: '#020617',
          800: '#0f172a',
          700: '#1e3a8a',
        },
        primary: {
          blue: '#3b82f6',
          cyan: '#22d3ee',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}