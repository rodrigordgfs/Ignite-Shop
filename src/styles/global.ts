import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$gray-900',
        color: '$gray-100',
    },

    'body, input, button, textarea': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
    }
})