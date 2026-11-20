/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        genesis: {
          navy: '#10367D',       // Primary Brand Deep Blue (Hex 10367D)
          sky: '#74B4DA',        // Secondary Brand Sky Blue (Hex 74B4DA)
          light: '#EBEBEB',      // Neutral Off-White/Grey (Hex EBEBEB)
          white: '#FFFFFF',      // Pure White
          dark: '#0A204C',       // Darker Navy
          darkest: '#05122B',    // Obsidian Deep Blue
          blueHover: '#0D2B63',
          skyHover: '#5FA3CD',
          softBg: '#F5F7FA',
        },
        brand: {
          50: '#F0F6FC',
          100: '#E1EDF9',
          200: '#C3DCF4',
          300: '#94C3EC',
          400: '#74B4DA',
          500: '#2A72BA',
          600: '#10367D',        // Core Hex 10367D
          700: '#0C2B64',
          800: '#09214D',
          900: '#061736',
          950: '#040F24'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 6px -1px rgba(16, 54, 125, 0.06)',
        'card': '0 4px 16px -2px rgba(16, 54, 125, 0.08), 0 2px 6px -1px rgba(16, 54, 125, 0.04)',
        'card-hover': '0 16px 32px -4px rgba(16, 54, 125, 0.16), 0 6px 12px -2px rgba(16, 54, 125, 0.08)',
        'glow-sky': '0 0 24px -2px rgba(116, 180, 218, 0.45)',
        'glow-navy': '0 0 30px -4px rgba(16, 54, 125, 0.35)',
      }
    },
  },
  plugins: [],
}
