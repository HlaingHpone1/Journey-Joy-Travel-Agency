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
                'primary': "#05445E",
                'secondary': "#189AB4",
                'tertiary': "#D4F1F4",
                'nav': 'rgba(5, 68, 94, 0.5)',
                
            },
            fontFamily: {
                'Roboto': ['Roboto', 'sans-serif'],
                'Roboto-Slab': ['Roboto Slab', 'serif'],
            },
            fontWeight: {
                'active': 'bold',
            },
            
            maxWidth: {
                '1240px': '1240px',
            },
            opacity: {
                'active' : '1',
            },
            backgroundImage: {
                'gradient': 'linear-gradient(-45deg, rgba(24,154,180,1) 50%, rgba(37,118,152,1) 50%)',
            },
        },
    },
    plugins: [],
}