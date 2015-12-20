var webpack=require('webpack');
module.exports={
    output: {
        filename: "bundle.js",
		publicPath:'http://localhost/DG_blog/'
    },
    module:{
    	loaders:[{
    		test:/\.js$/,
    		loader:'babel',
    		exclude:[/node_modules/],
			query: {
				plugins: ['transform-runtime'],
				presets: ['es2015']
			}
    	},{
    		test:/\.html$/,
    		loader:'html?attrs=false',
    		exclude:[/node_modules/]
    	}]
    },
    plugins: [
		new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};












