module.exports = {
	rules: {
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-console': [
			'error'
		],
		'eqeqeq': [
			'error',
			'always'
		],
		'arrow-parens': [
			'error',
			'always'
		],
		'eol-last': [
			'error',
			'always'
		],
		'no-multi-spaces': [
			'error'
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxEOF': 0
			}
		],
		'spaced-comment': [
			'error',
			'always'
		],
		'no-trailing-spaces': [
			'error'
		],
		'no-whitespace-before-property': [
			'error'
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			'always'
		],
		'space-infix-ops': [
			'error'
		],
		'no-lonely-if': [
			'error'
		],
		'keyword-spacing': [
			'error'
		],
		'arrow-spacing': [
			'error'
		],
		'block-spacing': [
			'error',
			'always'
		],
		'brace-style': [
			'error',
			'stroustrup'
		],
		'comma-dangle': [
			'error',
			'never'
		],
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'array-element-newline': [
			'error',
			'consistent'
		],
		'array-bracket-newline': [
			'error',
			{
				'multiline': true
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'dot-location': [
			'error',
			'property'
		],
		'func-call-spacing': [
			'error',
			'never'
		],
		'function-call-argument-newline': [
			'error',
			'consistent'
		],
		'function-paren-newline': [
			'error',
			'multiline-arguments'
		],
		'generator-star-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'implicit-arrow-linebreak': [
			'error',
			'beside'
		],
		'jsx-quotes': [
			'error',
			'prefer-double'
		],
		'key-spacing': [
			'error',
			{
				'beforeColon': false,
				'afterColon': true,
				'mode': 'strict'
			}
		],
		'lines-between-class-members': [
			'error',
			'always'
		],
		'max-len': [
			'error',
			{
				'code': 120,
				'ignoreComments': true,
				'ignoreStrings': true,
				'ignoreRegExpLiterals': true,
				'ignoreTemplateLiterals': true
			}
		],
		'max-statements-per-line': [
			'error',
			{
				'max': 1
			}
		],
		'new-parens': [
			'error',
			'always'
		],
		'newline-per-chained-call': [
			'error'
		],
		'no-tabs': [
			'error',
			{
				'allowIndentationTabs': true
			}
		],
		'object-curly-newline': [
			'error',
			{
				'multiline': true
			}
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'object-property-newline': [
			'error'
		],
		'operator-linebreak': [
			'error',
			'none'
		],
		'padded-blocks': [
			'error',
			'never'
		],
		'rest-spread-spacing': [
			'error'
		],
		'semi-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'semi-style': [
			'error',
			'last'
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'switch-colon-spacing': [
			'error',
			{
				'after': true,
				'before': false
			}
		],
		'template-curly-spacing': [
			'error',
			'never'
		],
		'template-tag-spacing': [
			'error',
			'never'
		],
		'wrap-iife': [
			'error',
			'inside'
		],
		'yield-star-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'array-callback-return': [
			'error'
		],
		'no-constant-binary-expression': [
			'error'
		],
		'no-constructor-return': [
			'error'
		],
		'no-duplicate-imports': [
			'error'
		],
		'no-self-compare': [
			'error'
		],
		'no-unmodified-loop-condition': [
			'error'
		],
		'no-unreachable-loop': [
			'error'
		],
		'no-unused-private-class-members': [
			'error'
		],
		'arrow-body-style': [
			'error',
			'as-needed'
		],
		'block-scoped-var': [
			'error'
		],
		'curly': [
			'error',
			'all'
		],
		'default-param-last': [
			'error'
		],
		'dot-notation': [
			'error'
		],
		'max-classes-per-file': [
			'error',
			1
		],
		'max-nested-callbacks': [
			'error',
			3
		],
		'max-params': [
			'error',
			3
		],
		'no-alert': [
			'error'
		],
		'no-array-constructor': [
			'error'
		],
		'no-confusing-arrow': [
			'error'
		],
		'no-else-return': [
			'error',
			{
				'allowElseIf': false
			}
		],
		'no-empty-function': [
			'error'
		],
		'no-eval': [
			'error'
		],
		'no-extend-native': [
			'error'
		],
		'no-labels': [
			'error'
		],
		'no-floating-decimal': [
			'error'
		],
		'no-implicit-coercion': [
			'error'
		],
		'no-implicit-globals': [
			'error'
		],
		'no-implied-eval': [
			'error'
		],
		'no-invalid-this': [
			'error'
		],
		'no-lone-blocks': [
			'error'
		],
		'no-loop-func': [
			'error'
		],
		'no-mixed-operators': [
			'error'
		],
		'no-multi-assign': [
			'error'
		],
		'no-multi-str': [
			'error'
		],
		'no-negated-condition': [
			'error'
		],
		'no-nested-ternary': [
			'error'
		],
		'no-new-object': [
			'error'
		],
		'no-new-wrappers': [
			'error'
		],
		'no-param-reassign': [
			'error'
		],
		'no-return-assign': [
			'error',
			'always'
		],
		'no-return-await': [
			'error'
		],
		'no-script-url': [
			'error'
		],
		'no-shadow': [
			'error'
		],
		'no-throw-literal': [
			'error'
		],
		'no-undef-init': [
			'error'
		],
		'no-unneeded-ternary': [
			'error'
		],
		'no-unused-expressions': [
			'error'
		],
		'no-useless-call': [
			'error'
		],
		'no-useless-computed-key': [
			'error'
		],
		'no-useless-concat': [
			'error'
		],
		'no-useless-constructor': [
			'error'
		],
		'no-useless-rename': [
			'error'
		],
		'no-useless-return': [
			'error'
		],
		'no-var': [
			'error'
		],
		'no-void': [
			'error'
		],
		'object-shorthand': [
			'error'
		],
		'operator-assignment': [
			'error',
			'always'
		],
		'prefer-arrow-callback': [
			'error'
		],
		'prefer-const': [
			'error'
		],
		'prefer-destructuring': [
			'error',
			{
				'object': true,
				'array': false
			}
		],
		'prefer-exponentiation-operator': [
			'error'
		],
		'prefer-numeric-literals': [
			'error'
		],
		'prefer-object-has-own': [
			'error'
		],
		'prefer-object-spread': [
			'error'
		],
		'prefer-promise-reject-errors': [
			'error'
		],
		'prefer-regex-literals': [
			'error'
		],
		'prefer-rest-params': [
			'error'
		],
		'prefer-spread': [
			'error'
		],
		'prefer-template': [
			'error'
		],
		'radix': [
			'error',
			'as-needed'
		],
		'require-await': [
			'error'
		],
		'sort-imports': [
			'error'
		],
		'symbol-description': [
			'error'
		],
		'yoda': [
			'error',
			'never'
		]
	}
}
