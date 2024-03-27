/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    // themes: ['cupcake'],
  },

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
    },
    extend: {
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'sunrise': ["Waiting for the Sunrise", 'cursive'],
      },
    },
    colors: {
      'white-text': "#fff",
      'primary-text': '#111827',
      'secondary-text': '#6B7280',
      'primary-red': '#C30047',
      'error-color': '#F43F5E',
      'border-color': '#E5E7EB',
      'error-bg': 'rgba(255, 0, 0, 0.1)',
    },
    borderWidth: {
      '1': '1px'
    },

    boxShadow: {
      // 'small-card-shadow': '0px 4px 7px rgba(0, 0, 0, 0.25)',
      // 'fev-icon-box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.08)',
    },
    backgroundImage: {
      'main-bg': "url('/assets/donate blood 4.png')",
      'statics-bg': "linear-gradient(to bottom , rgba(3, 1, 10, 0.4), rgba(3, 1, 10, 0.5)), url('/assets/h1_hero2.jpg.webp') ",
      'needBlood-bg': "linear-gradient(to bottom , rgba(5, 1, 52, 0.2), rgba(5, 52, 15, 0.2)), url('/assets/mainBg.jpg') ",
      'heroSlider-bg': "linear-gradient(to bottom , rgba(240, 20, 0, 0.4), rgba(240, 20, 0, 0.4)), url('/assets/HeroSlider/shape1.jpg') ",
      // 'needBlood-bg': "linear-gradient(to bottom , rgba(3, 1, 10, 0.4), rgba(3, 1, 10, 0.5)), url('/assets/needBlood.jpg') ",
    }
  }

};
