const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          cardapio:
            "cardapio@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          pedido:
            "pedido@http://localhost:3002/_next/static/chunks/remoteEntry.js",
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