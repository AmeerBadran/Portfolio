/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInZoomOut: {
          '0%': { transform: 'scale(0.8)', opacity: '0.1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeOutZoomIn: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0.1' },
        },
      },
      animation: {
        fadeInZoomOut: 'fadeInZoomOut 0.4s ease-out forwards',
        fadeOutZoomIn: 'fadeOutZoomIn 0.4s ease-out forwards',
      },
      boxShadow: {
        'box': '6px 6px 0px 0px rgba(30, 30, 30, 0.24)',
        'hoverbox': '0px 0px 0px 0px rgba(130, 130, 130, 0.24)',
      },
      width: {
        'calc-full-minus-40': 'calc(100% - 40px)',
      },
      height: {
        'calc-full-minus-40': 'calc(100% - 40px)',
      },
    },
    screens: {
      'mobile': '320px',
      'xmobile': '350px',
      '2xmobile': '520px',
      'md': '640px',
      '2md': '820px',
      'slg': '950px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1480px',
      '3xl': '1680px',
    },
  },
  plugins: [],
}

