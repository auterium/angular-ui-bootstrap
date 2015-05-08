Package.describe({
	name: 'marcantuan:angular-ui-bootstrap',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'Angular UI import',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/auterium/angular-ui-bootstrap.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');
	api.addFiles('ui-bootstrap-tpls.min.js.js', 'client');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('marcantuan:angular-ui-bootstrap');
	api.addFiles('angular-ui-bootstrap-tests.js');
});
