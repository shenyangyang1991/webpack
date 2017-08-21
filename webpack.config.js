 module.exports = {
     entry: './test.js',
     output: {
         path: __dirname,
         filename: 'test.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         },{ 
            test: /\.css$/, 
            loaders: ["style-loader", "css-loader"], 
            include: __dirname 
        },]
     }
 }