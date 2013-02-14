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
			window.setInterval("printTime()", 1000);
        },
		
		about: function(){
			console.log();
			$('div#content').empty().append(new AboutView().render().el);
			window.setInterval("printTime()", 1000);
		},
		
		hangman: function(){
			console.log();
			$('div#content').empty().append(new HangmanView().render().el);
			window.setInterval("printTime()", 1000);
			setNick();
		},

    });

    return Router;

});

function printTime(){
	var time = new Date();
	var Sec = time.getSeconds();
	var Min = time.getMinutes();
	var Hour = time.getHours();
	var secnull = "";
	var minnull = "";
	var hnull = "";
	if(Sec < 10){
		secnull = 0;
	} else {
		secnull = "";
	};
	if(Min < 10){
		minnull = 0;
	} else {
		minnull = "";
	};
	if(Hour < 10){
		hnull = 0;
	} else {
		hnull = "";
	};	
	
	var formattedTime = (hnull + Hour + ":" + minnull + Min + ":" + secnull + Sec);
	
	document.getElementById('Time').innerHTML = formattedTime;
	return false;
};

function setNick(){
	var NickName = prompt("Geben Sie Ihr Nickname ein: ","");
	document.getElementById('nickname').innerHTML = NickName;
};