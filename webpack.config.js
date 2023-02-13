const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    mode: "development",
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    // webpack 5 comes with devServer which loads in development mode
    context: __dirname,
    devtool: "source-map",
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};