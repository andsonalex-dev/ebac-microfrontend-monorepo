const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "cardapio",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Cardapio": "./src/components/Cardapio",
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
};