import babelPlugin from 'rollup-plugin-babel'

export default {
    input: './src/index.js',
    output: [
        {
            name: 'bundle',
            file: './dist/babel6/main.amd.js',
            format: 'amd',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel6/main.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel6/main.system.js',
            format: 'system',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel6/main.es.js',
            format: 'es',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel6/main.iife.js',
            format: 'iife',
            sourcemap: true,
        },
        {
            name: 'bundle',
            file: './dist/babel6/main.umd.js',
            format: 'umd',
            sourcemap: true,
        },
    ],
    plugins: [
        babelPlugin({
            exclude: './node_modules/**' // 排除node_module下的所有文件
        }),
    ]
}