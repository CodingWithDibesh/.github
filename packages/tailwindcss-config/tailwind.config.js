/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './page/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        '../../packages/ui/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        // All Other Dir/Sub-Dir
        './**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                blue: '#3b5998',
                'night_blue': '#1877f2',
                gray: '#8b9dc3',
                'night_gray': '#b0b3b8',
                'night_black': '#000000',
                white: '#ffffff',
                'night_white': '#f7f7f7',
            },
        },
    },
    plugins: [],
};
