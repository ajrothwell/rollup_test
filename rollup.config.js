import babel from "rollup-plugin-babel";
import globals from 'rollup-plugin-node-globals';
import vue from 'rollup-plugin-vue';
import packageJson from "./package.json";

const dependencies = packageJson.dependencies || {};
const external = Object.keys(dependencies || {});
console.log('external:', external);

export default {
  input: "src/main.js",
  output: {
    file: "dist/components.js",
    format: "es",
    globals: {
      vue: 'Vue',
    },
  },
  external,
  plugins: [
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
