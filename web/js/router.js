define(['jquery', 'underscore', 'backbone', "views/home", "views/about", "views/hangman"], function($, _, Backbone, HomeView, AboutView, HangmanView) {

    var Router;

    // Extend the router prototype in the backbone object
    Router = Backbone.Router.extend({

        routes: {
            // example: index.html
            "":        		"index",
			"about":		"about",
			"hangman":		"hangman",
        },

        // is executed on index.html
        index: function() {
            console.log();
			$('div#content').empty().append(new HomeView().render().el);
        },
		
		about: function(){
			console.log();
			$('div#content').empty().append(new AboutView().render().el);
		},
		
		hangman: function(){
			console.log();
			$('div#content').empty().append(new HangmanView().render().el);
		},

    });

    return Router;

});