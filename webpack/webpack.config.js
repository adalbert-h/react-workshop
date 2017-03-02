const path = require('path');

module.exports = {
    entry: path.resolve('./src/index.js'),
    cache: true,
    output: {
        path: path.resolve('./static'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve('./src')
                ],
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
