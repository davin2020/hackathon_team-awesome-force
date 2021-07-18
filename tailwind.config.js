const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        enabled: true,
        content: ['./build/**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                sky: colors.sky,
                cyan: colors.cyan,
                sunglow: {
                    50: '#fffcf4',
                    100: '#fefaea',
                    200: '#fdf2ca',
                    300: '#fceaa9',
                    400: '#fadb69',
                    500: '#f8cb29',
                    600: '#dfb725',
                    700: '#ba981f',
                    800: '#957a19',
                    900: '#7a6314',
                },
            },
            fontFamily: {
                lemtitle: ['Eczar', 'Georgia', 'ui-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}