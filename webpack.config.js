const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
let plugins = [];

const bannerPlugin = new webpack.BannerPlugin({
    banner: "#!/usr/bin/env node",
    raw: true,
});

const copyPlugin = new CopyPlugin([
    {
        from: "scripts/**/*.js",
        flatten: true,
    },
]);

plugins.push(bannerPlugin);

if ("production" === process.env.NODE_ENV) {
    console.log("prod");
    plugins.push(copyPlugin);
}
console.log(process.env.NODE_ENV);
module.exports = {
    target: "node",
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, "/bin"),
        filename: "cli.js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
            },
        ],
    },
    plugins: [...plugins],
};
