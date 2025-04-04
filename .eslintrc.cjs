module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"no-unused-vars": ["warn"],
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
	},
};
