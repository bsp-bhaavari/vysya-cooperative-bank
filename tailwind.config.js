/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo: warm orange frame & brand (co-op emblem)
        primary: {
          50: '#FFF9F4',
          100: '#FFEFE4',
          200: '#FFDCC4',
          300: '#FFC090',
          400: '#F59E54',
          500: '#EA6F1A',
          600: '#D45A0F',
          700: '#B24A0D',
          800: '#8F3E10',
          900: '#6B3212',
          950: '#3D1C0A',
        },
        // Logo: "Yours Trusted Bank" blue
        trust: {
          50: '#EEF4FB',
          100: '#D9E6F5',
          200: '#B3CEEB',
          300: '#8AB0DC',
          400: '#5C8FC8',
          500: '#3B6FA8',
          600: '#2C5580',
          700: '#244468',
          800: '#1F3A56',
          900: '#1A3148',
          950: '#0F1C2C',
        },
        gold: {
          50: '#FBF7E8',
          100: '#F5ECD0',
          200: '#EAD9A0',
          300: '#DFC570',
          400: '#D4A017',
          500: '#B88A0E',
          600: '#9A740C',
          700: '#7D5E0A',
        },
        secondary: {
          50: '#FFF6E8',
          100: '#FFEBD0',
          200: '#F5D5A8',
          300: '#E8BC7A',
          400: '#D4A017',
          500: '#B8890E',
          600: '#9A720C',
          700: '#7C5C0A',
          800: '#5E4608',
          900: '#453306',
        },
        surface: {
          page: '#FFF9F4',
          muted: '#FFF3EA',
          tint: '#FFFBF7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 16px -4px rgba(107, 50, 18, 0.09), 0 8px 24px -8px rgba(26, 49, 72, 0.06)',
        premium: '0 4px 28px -6px rgba(107, 50, 18, 0.14), 0 12px 32px -12px rgba(26, 49, 72, 0.1)',
        'premium-sm': '0 2px 12px -2px rgba(107, 50, 18, 0.1), 0 4px 16px -4px rgba(26, 49, 72, 0.07)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(ellipse 120% 80% at 100% 0%, rgba(212, 90, 15, 0.14) 0%, transparent 52%), radial-gradient(ellipse 80% 60% at 0% 100%, rgba(44, 85, 128, 0.1) 0%, transparent 48%)',
        'section-fade': 'linear-gradient(180deg, #FFF9F4 0%, #FFFBF7 45%, #FFF3EA 100%)',
        'card-shine': 'linear-gradient(135deg, rgba(255, 249, 244, 0.98) 0%, rgba(255, 255, 255, 1) 45%, rgba(238, 244, 251, 0.35) 100%)',
      },
    },
  },
  plugins: [],
}
