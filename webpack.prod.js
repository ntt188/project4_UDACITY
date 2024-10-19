const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.[contenthash].js', // Generate file name with hash to avoid caching issues
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean old files before building
    },
    optimization: {
        minimizer: [
            new TerserPlugin(), // Minify JS
            new CssMinimizerPlugin(), // Minify CSS
        ],
    },
    module: {
    rules: [
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // Load SCSS files and extract them into CSS
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,// Exclude files in node_modules
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env'], // Use Babel to transpile ES6+ syntax
                },
            },
        },
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html', // Use the index.html template
            minify: {
            collapseWhitespace: true, // Optimize HTML by collapsing whitespace
            removeComments: true, // Remove comments from HTML
            removeRedundantAttributes: true, // Remove unnecessary attributes
            useShortDoctype: true, // Use a short DOCTYPE declaration
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css', // Generate CSS file name with hash
        }),
        new CleanWebpackPlugin(), // Clean old build files
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true, // Claim clients immediately after SW activation
            skipWaiting: true, // Activate the new service worker immediately
        }), // Configure Workbox for service workers
    ],
};