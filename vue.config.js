const path = require('path')

module.exports = {
	configureWebpack: {

		resolve: {
			alias: {
				assets: "@/assets",
				components: "@/components",
				views: "@/views"
				/* 由于router和store只在main.js里引用，
		且其他地方只需要 this.$router就可以，所以不需要 */
			}
		}
	},
	devServer: {
		port: 8080,
		open: true
	}
};
