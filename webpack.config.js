const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { plugin, ungicSassThemeIntegrator:integrator } = require('theme-colors-extractor');

module.exports = function (env = {}) {
  const isProductionMode = env.production;
  return {
    entry: {
      index: "./app/index.js"
    },
    output: {
      filename: "[name].min.js",
      path: path.resolve(__dirname, "app", "dist"),
      publicPath: '/'
    },
    devServer: {
      static: [
        {
          directory: path.join(__dirname, "app"),
          serveIndex: true,
          watch: true,
        }
      ],
      compress: true,
      port: 9002,
      host: '192.168.1.58'
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin()
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].min.css",
        chunkFilename: "[id].min.css",
        ignoreOrder: false,
      })
    ],
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "app", "src")],
      alias: {
        appConfig: path.join(__dirname, 'config', env.production ? 'prod' : 'dev')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                comments: false,
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: {
                        browsers: ["last 2 versions"],
                      },
                      debug: false,
                    },
                  ]
                ],
                plugins: [
                  ["@babel/plugin-transform-react-jsx", {
                    "pragma": "h",
                    "pragmaFrag": "Fragment",
                  }]
                ],
              },
            },
          ],
        },
        {
          test: /\.ya?ml$/,
          include: path.resolve(__dirname, "app", "src"),
          loader: "yaml-loader",
        },
        {
          test: /\.html$/i,
          use: "raw-loader",
        },
        {
          test: /\.scss$/,
          use: [
            isProductionMode ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                url: false,
                import: false,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: (loaderContext) => {
                  let plugins = [
                    require("postcss-rtl")(),
                    require("autoprefixer")()
                  ]

                  if (isProductionMode) {
                    plugins.push(plugin({
                      loaderContext,
                      root: path.join(__dirname, 'app'),
                      extract: {
                        fileName: '[name]-theme'+ (env.inverse? '-inv' : '') + '-[suffix].css',
                      },
                      selector: {
                        before: true,
                        as: 'className',
                        value: env.inverse ? env.theme + '-inv' : env.theme, // Theme name
                        replace: ['html', ':root', 'body', '[dir]'],
                      }
                    }))
                  }

                  return {
                    plugins
                  }
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                additionalData: integrator({
                  themeName: env.theme,
                  themeOptions: {
                    'inverse-mode': !!env.inverse
                  }
                }),
                sassOptions: {
                  outputStyle: "expanded",
                  sourceComments: true
                },
              },
            }
          ],
        },
      ],
    },
  }
}


