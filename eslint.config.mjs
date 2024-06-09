import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    {
        rules: {
            semi: 'off',
            'prefer-const': 'off',
            'no-console': 'off',
        },
    },
]
