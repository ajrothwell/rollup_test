import babel from "rollup-plugin-babel";
import globals from 'rollup-plugin-node-globals';
import vue from 'rollup-plugin-vue';
// import packageJson from "./package.json";

// const dependencies = packageJson.dependencies || {};
// const external = Object.keys(dependencies || {});
// console.log('external:', external);
import fs from 'fs';
import path from 'path';
const pkg = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf-8'));
const external = Object.keys(pkg.dependencies || {});

export default {
  input: "src/main.js",
  output: {
    file: "dist/rollup-test.js",
    format: "es",
    globals: {
      vue: 'Vue',
    },
  },
  external,
  plugins: [
    globals(),
    babel({
      exclude: "node_modules/**",
      // presets: [
      //   ["env", { modules: false }],
      // ]
    }),
    vue({
      css: true,
    })
  ],
};
