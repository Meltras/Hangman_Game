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

	wordlist_browser = new Array("Mosaic", "Netscape", "Internet Explorer", "Mozilla Firefox", "Opera", "Safari", "Google Chrome");
	wordlist_games = new Array(
								"Battlefield 1942", "Battlefield Vietnam", "Battlefield 2", "Battlefield 2 Modern Combat", "Battlefield 2142", "Battlefield Bad Company", "Battlefield Heroes", 
								"Battlefield 1943", "Battlefield Bad Company 2", "Battlefield Play4Free", "Battlefield 3", "Battlefield 4", "Crysis", "Crysis Warhead", "Crysis 2", "Crysis 3",
								"Crysis Wars", "Crysis Maximum Edition"
								);
								
	wordlist_all = wordlist_browser.concat(wordlist_games);
	var WordToFind;
	var Tries;
	var Accom;
	var Failed;
	var TotalTries = 0;
	var TotalFailed = 0;
	var TotalAccom = 0;

function GenerateWord(){
	init();
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
		Cry = "•";
		Leer = " ";
		if(counter == WordToFind.indexOf(' ',counter)){
			EncodedWord = EncodedWord + Leer;
		}else{
			EncodedWord = EncodedWord + Cry;
		};
	};

	document.getElementById('EncodedWord').innerHTML = EncodedWord;
	return WordToFind;
};

function GenerateWord_games(){
	init();
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
		Cry = "•";
		Leer = " ";
		if(counter == WordToFind.indexOf(' ',counter)){
		EncodedWord = EncodedWord + Leer;
		}else{
		EncodedWord = EncodedWord + Cry;
		};
	};
	
	document.getElementById('EncodedWord').innerHTML = EncodedWord;
	return WordToFind;;
};

function GenerateWord_browser(){
	init();
	lang = wordlist_browser.length;
	index = Math.random();
	index = index*(lang-1);
	index = Math.round(index);
	
	WordToFind = wordlist_browser[index];
	console.log(WordToFind);
	
	number = WordToFind.length;
	maxindex = number-1;
	EncodedWord="";
	
	
	for(counter=0; counter <= maxindex; counter++){
		Cry = "•";
		Leer = " ";
		if(counter == WordToFind.indexOf(' ',counter)){
		EncodedWord = EncodedWord + Leer;
		}else{
		EncodedWord = EncodedWord + Cry;
		};
	};
	
	document.getElementById('EncodedWord').innerHTML = EncodedWord;
	return WordToFind;
};

function FindLetter(){
	var GuessedLetter = document.getElementById('guess').value;
	var EncodedWord = document.getElementById('EncodedWord').innerHTML;
	var first = "";
	var last = "";
	var Wlength = EncodedWord.length;
	var Cl = 0;
	
	Tries++;
	TotalTries++;
	
	GuessedLetter = GuessedLetter.charAt(0);
	document.getElementById('guess').value = "";
	
	for(var i = 0; i < Wlength; i++){
		Cl++;
		if(WordToFind.charAt(i) == GuessedLetter){
			Cl = 0;
			Accom++;
			TotalAccom++;
			
			document.getElementById("bgher").style.backgroundColor = "green";
			first = EncodedWord.substring(0, i);
			last = EncodedWord.substring((i+1), Wlength);
			EncodedWord = first + GuessedLetter + last;
		};
		if(Cl == Wlength){
			Failed++;
			TotalFailed++;
			
			document.getElementById("bgher").style.backgroundColor = "red";
		};
	};
	document.getElementById('EncodedWord').innerHTML = EncodedWord;
	
	document.getElementById('try').innerHTML = Tries;
	document.getElementById('fail').innerHTML = Failed;
	document.getElementById('acc').innerHTML = Accom;
	window.setTimeout("ResetColor()", 250);
};

function ResetColor(){
	document.getElementById("bgher").style.backgroundColor = "";
};

function init(){
	Tries = 0;
	Accom = 0;
	Failed = 0;
	
	document.getElementById('try').innerHTML = Tries;
	document.getElementById('fail').innerHTML = Failed;
	document.getElementById('acc').innerHTML = Accom;
	
	document.getElementById('totaltry').innerHTML = TotalTries;
	document.getElementById('totalfail').innerHTML = TotalFailed;
	document.getElementById('totalacc').innerHTML = TotalAccom;
};