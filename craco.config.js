const path = require('path');

// Добавляем логирование
const logConfig = (config, level) => {
  console.log(`[Webpack Config ${level}]`, JSON.stringify(config, null, 2));
};

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
      // Логируем начальную конфигурацию
      logConfig(webpackConfig, 'Initial');

      // Настройка для HashRouter
      webpackConfig.output.publicPath = '';
      console.log('[HashRouter] Public path set to empty string');
      
      // Настройка для статических файлов
      webpackConfig.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        }
      });
      console.log('[Static Files] Rules added for media files');

      // Оптимизация разделения кода
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
      };
      console.log('[Optimization] Basic optimization applied');

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
          console.log('[CSS] Minimizer options updated');
        }
        return minimizer;
      });

      // Логируем финальную конфигурацию
      logConfig(webpackConfig, 'Final');

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
      console.log('[DevServer] Listening on port 3000');
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