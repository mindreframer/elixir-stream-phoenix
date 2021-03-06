exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo:{
        'js/app.js':  /^(web\/static\/js\/app)/,
        'js/admin/app.js':  /^(web\/static\/js\/admin)/,
        'js/google_analytics.js': /^(web\/static\/js\/google_analytics)/,
        'js/vendor.js': /^(web\/static\/vendor)/,
	'js/phoenix.js': /^(deps\/phoenix\/web\/static\/js\/phoenix)/,
	'js/phoenix_html.js': /^(deps\/phoenix_html\/web\/static\/js\/phoenix_html)/,
      }
      // To use a separate vendor.js bundle, specify two files path
      // https://github.com/brunch/brunch/blob/stable/docs/config.md#files
      // joinTo: {
      //  'js/app.js': /^(web\/static\/js)/,
      //  'js/vendor.js': /^(web\/static\/vendor)/
      // }
      //
      // To change the order of concatenation of files, explictly mention here
      // https://github.com/brunch/brunch/tree/stable/docs#concatenation
      // order: {
      //   before: [
      //     'web/static/vendor/js/jquery-2.1.1.js',
      //     'web/static/vendor/js/bootstrap.min.js'
      //   ]
      // }
    },
    stylesheets: {
      joinTo: {
        'css/app.css':  /^(web\/static\/css\/app)/,
        'css/admin/app.css':  /^(web\/static\/css\/admin)/
      }
    },
    templates: {
      joinTo: 'js/app.js'
    }
  },

  // Phoenix paths configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: ["deps/phoenix/web/static",
              "deps/phoenix_html/web/static",
              "web/static", "test/static"],

    // Where to compile files to
    public: "priv/static"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/^(web\/static\/vendor)/]
    }
  }
};
