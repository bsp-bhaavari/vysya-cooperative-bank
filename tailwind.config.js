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
        // Logo: "Yours Trusted Bank" blue (modern banking navy)
        trust: {
          50: '#EEF4FB',
          100: '#D9E6F5',
          200: '#B3CEEB',
          300: '#8AB0DC',
          400: '#5C8FC8',
          500: '#3B6FA8',
          600: '#1E3A8A',
          700: '#162E6A',
          800: '#112250',
          900: '#0F172A',
          950: '#0A0F1E',
        },
        gold: {
          50: '#FBF7E8',
          100: '#F5ECD0',
          200: '#EAD9A0',
          300: '#DFC570',
          400: '#D4AF37',
          500: '#B8962E',
          600: '#9A7D25',
          700: '#7D641C',
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
          page: '#F8FAFC',
          muted: '#F1F5F9',
          tint: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 16px -4px rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(15, 23, 42, 0.04)',
        premium: '0 4px 28px -6px rgba(15, 23, 42, 0.1), 0 12px 32px -12px rgba(15, 23, 42, 0.06)',
        'premium-sm': '0 2px 12px -2px rgba(15, 23, 42, 0.06), 0 4px 16px -4px rgba(15, 23, 42, 0.04)',
        'card': '0 1px 3px rgba(15, 23, 42, 0.04), 0 8px 32px -8px rgba(15, 23, 42, 0.06)',
        'elevated': '0 4px 24px -8px rgba(15, 23, 42, 0.1), 0 12px 48px -16px rgba(15, 23, 42, 0.08)',
        'nav': '0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 16px -6px rgba(15, 23, 42, 0.06)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(ellipse 120% 80% at 100% 0%, rgba(44, 85, 128, 0.12) 0%, transparent 52%), radial-gradient(ellipse 80% 60% at 0% 100%, rgba(59, 111, 168, 0.08) 0%, transparent 48%)',
        'section-fade': 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 45%, #F1F5F9 100%)',
        'card-shine': 'linear-gradient(135deg, rgba(248, 250, 252, 0.98) 0%, rgba(255, 255, 255, 1) 45%, rgba(238, 244, 251, 0.35) 100%)',
        'subtle-glow': 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(44, 85, 128, 0.04) 0%, transparent 60%)',
        'premium-subtle': 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 50%, #F8FAFC 100%)',
      },
    },
  },
  plugins: [],
}
