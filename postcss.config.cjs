const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
	plugins: [
		purgecss({
			content: ['./src/routes/*.svelte'],
			css: ['./src/lib/scss/*.scss']
		})
	]
};
