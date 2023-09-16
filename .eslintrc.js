module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest/globals': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'overrides': [
		{
			files: ['**/*.test.jsx'],
			rules: {
				'react/react-in-jsx-scope': 'off',
				'react/display-name': 'off',
				'react/jsx-key': 'off'
			},
		},
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'jest'
	],
	settings: {
		react: {
		  version: 'detect'
		},
	},
	'rules': {
		'react/prop-types': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error'
	}
};
