module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        quotes: [1, 'single'],
        indent: ['error', 4, {SwitchCase: 1}],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'no-shadow': 'off',
    },
};
