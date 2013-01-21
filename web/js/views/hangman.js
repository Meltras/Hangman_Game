define(['jquery', 'underscore', 'backbone', 'text!templates/hangman.html'], function($, _, Backbone, Template) {
	
    var HangmanView = Backbone.View.extend({

        tagName: "div",

        // define class attributes
        className: "unstlyed",

        template: Template,

        // this is called when we create an instance of this object
        initialize: function() {
            //this.collection.on('reset', this.render, this);
        },

        // render generates the view's state as html string
        // it return this (so the object it self) by accessing
        // this.el or view.el we get the html string
        render:function () {
            this.$el.empty();
            this.$el.append(this.template);
            
            return this;
		},

       
    });

    return HangmanView;

});


wordlist_test = new Array("wordlist_games");
wordlist_games = new Array(
							"Battlefield 1942", "Battlefield Vietnam", "Battlefield 2", "Battlefield 2 Modern Combat", "Battlefield 2142", "Battlefield Bad Company", "Battlefield Heroes", 
							"Battlefield 1943", "Battlefield Bad Company 2", "Battlefield Play4Free", "Battlefield 3", "Battlefield 4", "Crysis", "Crysis Warhead", "Crysis 2", "Crysis 3",
							"Crysis Wars", "Crysis Maximum Edition"
							);
							
wordlist_all = wordlist_test.concat(wordlist_games);

function GenerateWord(){
	lang = wordlist_all.length;
	index = Math.random();
	index = index*(lang-1);
	index = Math.round(index);
	
	WordToFind = wordlist_all[index];
	console.log(WordToFind);
	
	number = WordToFind.length;
	maxindex = number-1;
	EncodedWord="";
	
	for(counter=0; counter <= maxindex; counter++){
		Cry = "*";
		Leer = " ";
		if(counter == WordToFind.indexOf(' ',counter)){
		EncodedWord = EncodedWord + Leer;
		}else{
		EncodedWord = EncodedWord + Cry;
		};
	};
	
	document.getElementById('EncodedWord').innerHTML = EncodedWord;
	return false;
};

function GenerateWord_games(){
	lang = wordlist_games.length;
	index = Math.random();
	index = index*(lang-1);
	index = Math.round(index);
	
	WordToFind = wordlist_games[index];
	console.log(WordToFind);
	
	number = WordToFind.length;
	maxindex = number-1;
	EncodedWord="";
	
	
	for(counter=0; counter <= maxindex; counter++){
		Cry = "*";
		Leer = " ";
		if(counter == WordToFind.indexOf(' ',counter)){
		EncodedWord = EncodedWord + Leer;
		}else{
		EncodedWord = EncodedWord + Cry;
		};
	};
	
	document.getElementById('EncodedWord').innerHTML = EncodedWord;
	return false;
};

function FindLetter(){
};