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
      // В режиме разработки используем корневой путь
      if (process.env.NODE_ENV === 'development') {
        webpackConfig.output.publicPath = '/';
      }

      // Удаляем source-map-loader из правил
      webpackConfig.module.rules = webpackConfig.module.rules.filter(rule => {
        if (rule.use && Array.isArray(rule.use)) {
          rule.use = rule.use.filter(use => {
            if (typeof use === 'string') {
              return use !== 'source-map-loader';
            }
            if (use.loader) {
              return use.loader !== 'source-map-loader';
            }
            return true;
          });
        }
        return true;
      });

      // Настройка для статических файлов
      webpackConfig.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name][ext]'
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
    open: {
      target: ['http://localhost:3000'],
      app: {
        name: process.platform === 'win32' ? 'chrome' : 'google-chrome'
      }
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/beauty-space\/index\.html$/, to: '/beauty-space/' }
      ]
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    client: {
      overlay: true,
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