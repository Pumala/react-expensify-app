// entry point => output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// gives us the absolute path
// __dirname

module.exports = (env) => {
    console.log("PATH******************** ", path.join(__dirname, 'public', 'dist'));
    const isProduction = env === 'production';

    console.log("MATCHED::", isProduction);


    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },{
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'

        }
    };
};