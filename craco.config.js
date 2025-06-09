const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets')
    },
    configure: (webpackConfig) => {
      // Настройка для HashRouter и GitHub Pages
      webpackConfig.output.publicPath = process.env.NODE_ENV === 'production' 
        ? '/beauty-space/'
        : '/';

      // Настройка для статических файлов
      webpackConfig.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        }
      });

      // Добавляем плагин для копирования статических файлов
      const CopyWebpackPlugin = require('copy-webpack-plugin');
      webpackConfig.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: 'public/images',
              to: 'images',
              noErrorOnMissing: true
            },
            {
              from: 'public/favicon.ico',
              to: 'favicon.ico',
              noErrorOnMissing: true
            },
            {
              from: 'public/logo192.png',
              to: 'logo192.png',
              noErrorOnMissing: true
            },
            {
              from: 'public/logo512.png',
              to: 'logo512.png',
              noErrorOnMissing: true
            }
          ]
        })
      );

      // Оптимизация разделения кода
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
      };

      // Оптимизация CSS
      webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.map(minimizer => {
        if (minimizer.constructor.name === 'CssMinimizerPlugin') {
          minimizer.options.minimizerOptions = {
            ...minimizer.options.minimizerOptions,
            preset: ['default', {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
            }],
          };
        }
        return minimizer;
      });

      return webpackConfig;
    },
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /^\//, to: '/index.html' }
      ]
    },
    onListening: function(devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
    }
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "@styles/variables.scss";`
      }
    }
  }
}; 