import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [],
}
export default config
