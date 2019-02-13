require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
	siteMetadata: {
		title: 'Lowell Evolution',
		author: 'Peter Martin',
		imageUrl: `${__dirname}/images/lhsmockupjan2019.jpg`,
		description: 'Building a stronger, smarter Lowell.',
		keywords: `Lowell, city, campaign, politics, policy`,
		twitter: 'https://twitter.com/lowellevolution',
		facebook: 'https://facebook.com/lowellevolution',
		// github: `https://github.com/petermartin`,
		// medium: 'https://medium.com/@amanhimself',
		// gatsby: 'https://www.gatsbyjs.org/',
		// bulma: 'https://bulma.io/',
		siteUrl: `https://lowellevolution.com`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Lowell Evolution',
				short_name: 'LowellEvolution',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/favicon.svg',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-###',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: false
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: '6ybd6wpmyxhc',
				// Learn about environment variables: https://gatsby.app/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [
					`gatsby-remark-responsive-iframe`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 780,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content`,
				name: 'content',
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
