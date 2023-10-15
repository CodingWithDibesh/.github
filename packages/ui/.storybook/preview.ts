import type { Preview } from '@storybook/react';

import '../styles/globals.css';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    globalTypes: {
        darkMode: {
            defaultValue: false, // Enable dark mode by default on all stories
        },
        // Optional (Default: 'dark')
        className: {
            defaultValue: 'dark', // Set your custom dark mode class name
        },
    },
};

export default preview;
