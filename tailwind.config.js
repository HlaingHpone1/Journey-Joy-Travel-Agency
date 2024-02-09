/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
    mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#05445E",
                secondary: "#189AB4",
                tertiary: "#D4F1F4",
            },
            fontFamily: {
                'Roboto': ['Roboto', 'sans-serif'],
                'Roboto-Slab': ['Roboto Slab', 'serif'],
            },
        },
    },
    plugins: [],
}