/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './theme.config.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-hover': 'var(--primary-hover)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'var(--primary-color)',
              textDecoration: 'none',
              '&:hover': {
                color: 'var(--primary-hover)',
              },
            },
            pre: {
              backgroundColor: 'var(--background-light)',
            },
            code: {
              color: 'var(--text-light)',
              backgroundColor: 'var(--background-light)',
              borderRadius: '0.25rem',
              padding: '0.15rem 0.3rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 