import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'], // tells ESLint the kinds of files it can target
        plugins: { js }, // tells ESLint to load extra rule sets. For our case, we set it to load JS, which can allows us use things like JS Recommended
        extends: ['js/recommended'], // applies ESLint recommended rules
        languageOptions: { globals: globals.node }, // setting languageOptions to globals.node tells ESLint to use global variables
        rules: {
            'no-console': 'warn', // we tell ESLint to warn us if we have console logs in our code. It is useful since we don't want dev level console logs in production
            'prefer-const': 'error',
        },
    },
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } }, // this specifies that we are treating JS files as commonJS modules
]);
