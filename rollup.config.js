import { babel as babelPlugin } from '@rollup/plugin-babel'

export default {
    input: './src/index.js',
    output: [
        {
            name: 'bundle',
            file: './dist/babel7/main.amd.js',
            format: 'amd',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel7/main.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel7/main.system.js',
            format: 'system',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel7/main.es.js',
            format: 'es',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel7/main.iife.js',
            format: 'iife',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel7/main.umd.js',
            format: 'umd',
            sourcemap: true,
        },
    ],
    plugins: [
        babelPlugin({
            babelHelpers: 'bundled',
            extensions: ['.js'],
            exclude: './node_modules/**',// 排除node_module下的所有文件
        }),
    ]
}