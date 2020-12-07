const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#d6336c",
              "@text-selection-bg": "#3390FF",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
