require.config({

	paths : {

		"jquery"      : "vendor/jquery/jquery",
		"backbone" 	  : "vendor/backbone-amd/backbone",
		"underscore"  : "vendor/underscore-amd/underscore",
		"bootstrap"   : "vendor/bootstrap/bootstrap",
		"text"		  : "vendor/requirejs/text"

	},

	shim: {
        jquery: {
            exports: "$"
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        bootstrap: {
            deps: ['jquery'],
            exports: "bootstrap"
        },
        app: {
            deps: ["backbone", "bootstrap"],
            exports: "App"
        }
    }

});

require(["routes"], function(App){

	var app = new App;

	   Backbone.history.start();

});
