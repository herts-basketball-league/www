export default async function( eleventyConfig ) {
	eleventyConfig.addPassthroughCopy( './src/assets/**' );
	eleventyConfig.addPassthroughCopy( './src/.htaccess' );
	eleventyConfig.addPassthroughCopy( './src/documents/**' );
};

import 'dotenv/config';

export const config = {
	dir: {
		input: 'src',
		layouts: '_includes/layouts'
	}
};
