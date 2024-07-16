/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                base: `'Poppins', sans-serif`,
            },
            colors: {
                brand: '#A88165',
                'brand-dark': '#5C4636',
                secondary: '#4C5733',
                dark: '#2E2E2E',
                base: '#443E3E',
            },
        },
    },
    plugins: [],
}
