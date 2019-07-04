const ip = 'http://192.168.1.190:1661';

module.exports = {
  '/dcv-api/': {
    target: ip,
    pathRewrite: {'^/dcv-api': '/tarsier-dcv/dcv'}
  }
};
