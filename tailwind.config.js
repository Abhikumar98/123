module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],

    darkMode: false, // or 'media' or 'class'
    theme: {
        zIndex: {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
        },
        extend: {
            colors: {
                background: '#E8EBF3',
                primary: '#CD7DF0',
                secondary: '#4B006A',
                border: '#707070',
                white: '#ffffff',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
