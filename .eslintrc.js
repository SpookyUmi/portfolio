module.exports = {
	root: true,
	globals: {
		require: false,
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	extends: [
		'plugin:prettier/recommended',
		'plugin:vue/recommended',
		'eslint:recommended',
		'prettier/vue',
	],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		'no-console': ['warn', { allow: ['warn', 'debug'] }],
		'no-warning-comments': [
			'warn',
			{ terms: ['todo', 'debug', 'fixme'], location: 'anywhere' },
		],
		'no-mixed-spaces-and-tabs': 'warn',
		'no-empty-pattern': 'warn',
		'no-unused-vars': 'warn',
	},
}
