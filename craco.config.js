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


      // Настройка для HashRouter
      webpackConfig.output.publicPath = '';
      
      // Настройка для статических файлов
      webpackConfig.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        }
      });

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