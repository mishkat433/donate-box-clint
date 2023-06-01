/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

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
      },
      colors: {
        'white-text': "#fff",
        'primary-text': '#111827',
        'secondary-text': '#6B7280',
        'primary-red': '#C30047',
        'error-color': '#F43F5E',
        'border-color': '#E5E7EB',

        // 'aide-bg': '#FDFBF8',
        // 'aide-secondary-bg': '#F9FAFB',
        // 'aide-gray': '#eee',
        // 'blue-bg': '#E6EFFB',
        // 'aide-primary': '#00AF9E',
        // 'heading-text': '#212121',
        // 'icon-color': '#6F767E',
        'error-bg': 'rgba(255, 0, 0, 0.1)',
        // 'btn-hover-color': '#07B6B6',
        // 'blue-text': '#007ACC',
        // 'blue-light': '#E6EFFB',
        // 'green-text': '#0F870F',
        // 'green-light': '#CFE7CF',
        // 'star-color': '#FFC107',
        // 'yellow-text': "#CA8A2A",
        // 'yellow-light': '#FEFFD9',
        // 'green-yellow-text': '#56CA00',
        // 'light-gray': '#F7F7F9',

        // color-adivise-from-sir
        // 
        // 'placeholder-text': '#9CA3AF',
        // 'input-background': '#F9FAFB',
        // 'menu-bg': '#F3F4F6',
        // 'bg-white': '#FFFFFF',
        // 'purple': '#7C3AED',
      },
      borderWidth: {
        // '1': '1px'
      },
      boxShadow: {
        // 'small-card-shadow': '0px 4px 7px rgba(0, 0, 0, 0.25)',
        // 'fev-icon-box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'main-bg': "url('/public/donate blood 4.png')",
      }
    },
  },

}
