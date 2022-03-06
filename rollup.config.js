import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external';
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy';
import svgr from "@svgr/rollup";

export default [
    {
        input: 'src/index.tsx',
        plugins: [
            resolve(),
            external(),
            commonjs(),
            typescript(),
            svgr({ svgo: false }),
            terser({
                compress: true,
            }),
            copy({
                targets: [
                    { src: './assets/css/*', dest: 'dist/styles' },

                ]
            })
        ],
        output: [{ dir: 'dist', format: 'es', sourcemap: true }]
    }
]