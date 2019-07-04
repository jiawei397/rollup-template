import {uglify} from 'rollup-plugin-uglify'; //压缩bundle文件

const isProduction = process.env.NODE_ENV === 'production';
const input = 'src/menus/main.js';

export default {
  input: input,
  output: {
    file: `lib/menuTools.${isProduction ? 'min.' : ''}js`,
    format: 'umd',
    name: 'menuTools'
  },
  plugins: [
    (isProduction && uglify())
  ]
};
