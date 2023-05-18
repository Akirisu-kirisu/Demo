// // content: ['./public/**/*.html', '**/**/*.svelte'], //filtering all svelte
// // whitelistPatterns: [/svelte-/, /fa-icon/], //Svelte compiler adds these prefixes. We won't mess with it!
// // defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
// module.exports = {
// 	plugins: [
// 		purgecss({
// 			// css: ['.svelte-kit/output/server/_app/immutable/assets/_layout.d7c189cd.css '],
// 			// content: ['./src/routes/*.svelte']
// 			// css: ['/src/lib/scss/*.scss']
// 			content: ['./public/**/*.html', '**/**/*.svelte'] //filtering all svete
// 			// whitelistPatterns: [/svelte-/, /fa-icon/] //Svelte compiler adds these prefixes. We won't mess with it!
// 			// defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
// 		})
// 	]
// };

const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		purgecss({
			// 			// content: ['./src/routes/*.svelte']

			content: ['./public/**/*.html', '**/**/*.svelte'], //filtering all svete

			css: [
				'.svelte-kit/output/server/_app/immutable/assets/_layout.d7c189cd.css ',
				'./src/lib/scss/*.scss',
				'**/**/*.svelte'
			]
		}),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
