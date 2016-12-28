const path = require( 'path' );

const base_path = path.resolve(__dirname, 'src');


module.exports = {

    entry: path.join(base_path, 'main.js'),

    output: {
        path: './dist/',
        publicPath: './dist/',
        filename: 'build.js'
    },
    devtool: 'source-map',
    resolve: {

        alias:{
            _components: path.join(base_path, 'app', 'components'),
            _services: path.join(base_path, 'app', 'services'),
            _sass: path.join(base_path, 'assets', 'sass')
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
}
