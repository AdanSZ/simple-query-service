import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import typescript from "rollup-plugin-typescript2"; // For Typescript
import dts from 'rollup-plugin-dts';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external({
        includeDependencies: true
      }),
      resolve(),
      terser(),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
    external: ["react", "react-dom"],
  },
  {
      input: './src/index.d.ts',
      output: [
        { 
          file: 'dist/index.d.ts',
          format: 'ts' 
        },
      ],
      plugins: [
        dts(),
      ],
  },
];