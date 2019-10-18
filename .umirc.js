export default {
  // base: '/umi-plugin-arms/',
  // publicPath: '/umi-plugin-arms/',
  // cssPublicPath: '/umi-plugin-arms/',
  // runtimePublicPath: true,
  outputPath: 'docs',
  chainWebpack(config) {
    config.plugins.delete('progress');
  },
  plugins: [
    [
      `${__dirname}/lib`,
      {
        pid: '123456',
        test: () => {
          alert(111);
        },
      },
    ],
  ],
};
