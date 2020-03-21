// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
	siteName: "Welcome to Chloe's Portfolio",
	siteDescription: 'Get spooked: Web Development and art creator ! :3',
	siteUrl: 'https://spookyumi.dev',
	plugins: [
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: 'UA-161543975-1',
			},
		},
		{
			use: '@gridsome/vue-remark',
			options: {
				typeName: 'Documentation', // Required
				baseDir: './docs', // Where .md files are located
				pathPrefix: '/docs', // Add route prefix. Optional
				template: './src/templates/Documentation.vue', // Optional
				plugins: [
					['gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true }],
				],
			},
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/**/*.md',
				typeName: 'Post',
				refs: {
					tags: {
						typeName: 'Tag',
						create: true,
					},
				},
			},
		},
		{
			use: 'gridsome-plugin-rss',
			options: {
				contentTypeName: 'Post',
				feedOptions: {
					title: 'Gridsome Portfolio Starter Blog',
					feed_url: 'https://spookyumi.dev/rss.xml',
					site_url: 'https://spookyumi.dev',
				},
				feedItemOptions: (node) => ({
					title: node.title,
					description: node.summary,
					url: 'https://spookyumi.dev' + node.path,
					author: 'Spooky Umi',
					date: node.date,
				}),
				output: {
					dir: './static',
					name: 'rss.xml',
				},
			},
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000, // default
			},
		},
	],
	templates: {
		Tag: '/tag/:id',
	},
	transformers: {
		remark: {
			plugins: [
				['gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true }],
			],
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
		},
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins,
			},
		},
	},
}
