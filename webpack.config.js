var path = require("path");
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devServer: {       
        historyApiFallback: true        
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ["react","es2015","stage-0"]
                    }
                }
            },
            {
                test: /\.css$/, use: ['style-loader','css-loader']
            },
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, use: ['file-loader'] },
           
        ]
    },
    // resolve: {
    //     alias: {
    //         "jquery": path.join(__dirname, "./jquery-stub.js")
    //     }
    // },
    plugins: [new HTMLWebpackPlugin({
      template: 'src/index.html'
  })]
}