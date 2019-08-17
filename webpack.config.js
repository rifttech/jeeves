const path = require("path");
const webpack = require("webpack");
module.exports = {
    target: "node",
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
    ]
}
