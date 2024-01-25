/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        barlowbold: ['vessel-barlow-bold', 'sans-serif'],
        roboto: ['vessel-roboto', 'sans-serif'],
        robotobold: ['vessel-roboto-bold', 'sans-serif']
      },
      colors: {
        'vp-yellow': '#FFbF40',
        'vp-white': '#fffef2',
        'vp-copper': '#cf8c61',
        'vp-green': '#a8d6ba',
        'vp-black': '#1a1a1a',
        'vp-orchid': '#fffef2'
      },
      lineHeight: {
        '11': '0.9',
        '12': '2'
      },
      fontSize: {
        small: '0.85rem'
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
        const extendUnderline = {
            '.underline': {
                'textDecoration': 'underline',
                'text-decoration-color': '#FFbF40',
                'text-decoration-skip': 'ink 0.5rem',
            },
        }
        addUtilities(extendUnderline)
    }
]
}
