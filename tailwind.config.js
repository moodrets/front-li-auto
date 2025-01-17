/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                base: `'Montserrat', sans-serif`,
            },
            colors: {
                brand: '#A88165',
                'brand-dark': '#5C4636',
                secondary: '#4C5733',
                dark: '#2E2E2E',
                base: '#443E3E',
                dirt: '#5B5B5B',
                warning: '#FFA033',
            },
        },
    },
    plugins: [],
}
