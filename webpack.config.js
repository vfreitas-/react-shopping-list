const path = require( 'path' );

const base_path = path.resolve(__dirname, 'src');


module.exports = {

    entry: ['babel-polyfill','./src/main.js'],

    output: {
        path: './dist/',
        publicPath: "./dist/",
        filename: 'build.js'
    },
    devtool: 'source-map',
    resolve: {

        alias:{
            _components: path.join(base_path, 'components'),
            _services: path.join(base_path, 'services')
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}
