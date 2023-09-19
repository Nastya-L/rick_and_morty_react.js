const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    const is_development = (env.production === undefined);
    return {
        entry: ["@babel/polyfill", "./src/index.jsx"],
        output: {
            clean: true,
            path: path.resolve(__dirname, "dist"),
            filename: "[name].[fullhash].js",
            assetModuleFilename: 'images/[name][ext]',
        },
        devtool: (is_development === 'development') ? 'inline-source-map' : false,
        performance: {
            hints: false,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        mode: is_development ? 'development' : 'production',
        devServer: {
            port: 8080
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: "./src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css",
            }),
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [is_development
                    ? "style-loader"
                    : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"]
                },
                {
                    test: /\.(png|jpeg|gif|svg)$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: "babel-loader",
                      options: {
                        presets: ['@babel/preset-env']
                            }
                    }
                },
                {
                    test: /\.m?jsx$/,
                    exclude: /node_modules/,
                    use: {
                      loader: "babel-loader",
                      options: {
                        presets: ["@babel/preset-react", '@babel/preset-env']
                            }
                    }
                }
            ]
        }
    }
}
