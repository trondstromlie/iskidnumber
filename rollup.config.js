const babel = require( '@rollup/plugin-babel');
const resolve = require( '@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');

module.exports = {
    input: 'src/isKidValid.js',
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
        }),
        terser(),
    ],
    output: [
        {
            file: 'dist/isKidValid.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/isKidValid.cjs.js.esm.js',
            format: 'esm',
        },
        {
            file: 'dist/isKidValid.cjs.js.umd.js',
            format: 'umd',
            name: 'ApiClient',
            sourcemap: true,
        },
    ],
};
