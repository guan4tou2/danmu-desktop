const path = require('path');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');

// Minimal zero-dependency stand-in for copy-webpack-plugin (2026-07-07 UIUX
// polish E3): mirrors shared/tokens.css into dist/ so it travels alongside
// the JS bundles. Not strictly required at runtime today — index.html/
// child.html/about.html load their CSS straight from the source directory
// (see danmu-desktop/tokens.css symlink), not from dist/ — but this keeps
// dist/ a complete, self-contained build output and matches the other two
// tokens.css consumers (server/static/css/tokens.css symlink) having a
// real copy present wherever their bundle lives.
class CopyTokensCssPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('CopyTokensCssPlugin', () => {
      const src = path.resolve(__dirname, '../shared/tokens.css');
      const destDir = path.resolve(__dirname, 'dist');
      const dest = path.join(destDir, 'tokens.css');
      if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(src, dest);
    });
  }
}

module.exports = [
  {
    mode: 'production',
    entry: './main.js',
    target: 'electron-main',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.bundle.js'
    },
    node: {
      __dirname: false,
      __filename: false
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  },
  {
    mode: 'production',
    entry: './renderer.js',
    target: 'electron-renderer',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'renderer.bundle.js'
    },
    plugins: [new CopyTokensCssPlugin()],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  },
  {
    mode: 'production',
    entry: './preload.js',
    target: 'electron-preload',
    output: {
      path: path.resolve(__dirname, 'dist'), // Reverted path
      filename: 'preload.bundle.js',
      libraryTarget: 'commonjs2'
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  }
];
