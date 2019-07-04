const express = require('express');
const compression = require('compression');
const http_proxy = require('http-proxy-middleware');
const path = require('path');
const proxy = require('./proxy.js');
const root = '/';
const port = 6001;
const app = express();

for (let key in proxy) {
  app.use(key, http_proxy(proxy[key]));
}

app.use(compression());
app.use(root, express.static(path.join(__dirname, '../public')));//为了以当前目录为准，必须使用__dirname来处理相当路径
app.use('/lib', express.static(path.join(__dirname, '../lib')));
app.use('/plugins/utils.js', express.static(path.join(__dirname, '../node_modules/dcv-tool/lib/utils.js')));
app.use('/plugins/axios.js', express.static(path.join(__dirname, '../node_modules/axios/dist/axios.js')));
app.use('/plugins/uino-i18n.js', express.static(path.join(__dirname, '../node_modules/uino-i18n/index.js')));
app.use('/plugins/crypto-js.js', express.static(path.join(__dirname, '../node_modules/crypto-js/crypto-js.js')));

app.listen(port, () => {
  let uri = 'http://localhost:' + port + root;
  console.log('Listening at ' + uri + '\n');
});
