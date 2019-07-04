import {uglify} from 'rollup-plugin-uglify'; //压缩bundle文件

const isProduction = process.env.NODE_ENV === 'production';
const input = 'src/index.js';

export default {
  input: input,
  output: {
    file: `lib/XX.${isProduction ? 'min.' : ''}js`,
    format: 'umd',
    name: 'XX'
  },
  plugins: [
    (isProduction && uglify())
  ]
};
