import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import svgr from "@svgr/rollup";
const packageJson = require('./package.json');

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@interopio/react-hooks': "interopio-hooks"
};


export default [
    {
        input: 'src/index.tsx',
        plugins: [
            resolve(),
            external(),
            commonjs(),
            typescript(),
            svgr({ svgo: false }),
            copy({
                targets: [
                    { src: './assets/css/*', dest: 'dist/styles' },

                ]
            })
        ],
        output: [
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            },
            {
                file: packageJson.main,
                name: 'groups-ui-react',
                format: 'umd',
                sourcemap: true,
                globals,
            }
        ],
    }
]