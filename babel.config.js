module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'ie 11',
          ]
        },
        useBuiltIns: 'usage',
        corejs: 2,
      },
    ],
  ],
  plugins: [
    'codegen',
  ],
};
