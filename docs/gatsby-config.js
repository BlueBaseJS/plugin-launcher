// const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
	pathPrefix: '/docs',
	plugins: [
		{
			resolve: 'gatsby-theme-apollo-docs',
			options: {
				// ...themeOptions,
				siteName: 'BlueBase App Launcher',
				// trackingId: 'UA-74643563-13',
				algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
				algoliaIndexName: 'apollodata',
				baseUrl: 'https://www.apollographql.com',
				twitterHandle: 'apollographql',
				navConfig: {
					'https://www.demo.com': {
						text: 'Demo',
						matchRegex: '^/demo',
					},
					'/api-reference': {
						text: 'Api Reference',
						matchRegex: '^/api-reference',
					},
					'/storybook': {
						text: 'Storybook',
						matchRegex: '^/storybook',
					},
				},
				root: __dirname,
				subtitle: '',
				description: 'A plugin that replaces HomeScreen to show Apps just like any mobile OS',
				githubRepo: 'BlueBaseJS/plugin-launcher',
				spectrumPath: 'apollo-platform',
				sidebarCategories: {
					null: ['index', '../README', 'configs'],
					Components: [
						'components/app-card',
						'components/app-grid',
						'components/launcher-screen',
						'components/wallpaper',
					],
					Contributing: [
						'contributing/introduction',
						'contributing/code-of-conduct',
						'contributing/changelog',
					],
				},
			},
		},
	],
};
