/*
World list is in a separate file called ""eff_large_wordlist.js". It is a single const WORLD_LIST.
Credits go to eff.org for making this word list.
https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases

It has been converter into an array for use in this script in the form of an array of arrays:
[
[x,y],
[x,y],
...
]
x - diceware digit
y - word for password
*/

const ALL_LOWER = "1";
const ALL_UPPER = "2";
const FIRST_UPPER = "3";

const PASSWORD_SETTINGS = {
	allLower: false,
	firstCapital: false,
	allCapitals: false,
	numberOfWords: 5,
	weakPassword: false
};

function pageLoaded(){
	console.log("DEBUG: page loaded.");
};
document.getElementsByTagName("body").onload = pageLoaded();

/*generate 5 digit number as diceroll*/
function diceRoll(){
	let max = 6;
	let min = 1;
	let number = 0;
	for(let i = 0; i < 5; i++){
		number = number * 10 + Math.floor(Math.random() * (max - min + 1) + min);
	};
	return number;
};

/*lookup the word based on generated diceroll number*/
function wordLookup(number){
	for(let i = 0; i < WORD_LIST.length; i++){
		if(WORD_LIST[i][0] == number){
			return WORD_LIST[i][1];
		};
	};
};

/*Save password settings*/
function setPasswordSettings(){
	/*read settings from HTML element*/
	PASSWORD_SETTINGS.allLower = document.getElementById("all-lower").checked ? true : false;
	PASSWORD_SETTINGS.firstCapital = document.getElementById("first-capital").checked ? true : false;
	PASSWORD_SETTINGS.allCapitals = document.getElementById("all-capital").checked ? true : false;
	PASSWORD_SETTINGS.numberOfWords = parseInt(document.getElementById("word-count").innerHTML);
};

function generatePassword(){
	setPasswordSettings();
	/*Generate password*/
	let numberOfWords = PASSWORD_SETTINGS.numberOfWords;
	let generatedPassword = "";
	for(let i = 1; i <= numberOfWords; i++){
		let wordNumber = diceRoll();
		let word = wordLookup(wordNumber);
		word = checkLetterCase(word);
		generatedPassword = generatedPassword.concat(word);
	};
	console.log(generatedPassword);
	document.getElementById("generated-password").innerHTML = generatedPassword;
};

/*Set either all caps, first cap letter or leave default (all lower case)*/
function checkLetterCase(string){
	if(PASSWORD_SETTINGS.allLower){
		return string;
	} else if(PASSWORD_SETTINGS.firstCapital){
		return string[0].toUpperCase() + string.substring(1);
	} else{
		return string.toUpperCase();
	};
};

/*increment number of words used in password*/
function incrementValue(){
	let numberOfWords = parseInt(document.getElementById("word-count").innerHTML);
	/*check the current value to prevent going above 5*/
	numberOfWords = numberOfWords == 5? numberOfWords : numberOfWords + 1;
	PASSWORD_SETTINGS.numberOfWords = numberOfWords;
	document.getElementById("word-count").innerHTML = numberOfWords;
	
	checkWeakPassword();
};
/*decrement number of words used in password*/
function decrementValue(){
	let numberOfWords = parseInt(document.getElementById("word-count").innerHTML);
	/*check the current value to prevent going below 1*/
	numberOfWords = numberOfWords == 1? numberOfWords : numberOfWords - 1;
	PASSWORD_SETTINGS.numberOfWords = numberOfWords;
	document.getElementById("word-count").innerHTML = numberOfWords;
	
	checkWeakPassword();
};

function checkWeakPassword(){
	/*when number of words is below 3, add a recommendation to increase number of words for security reasons*/
	if(PASSWORD_SETTINGS.numberOfWords < 3){
		PASSWORD_SETTINGS.weakPassword = true;
	} else {
		PASSWORD_SETTINGS.weakPassword = false;
	};
	if(PASSWORD_SETTINGS.weakPassword){
		document.getElementById("weak-password-warning").innerHTML = "WARNING: weak password.";
	} else {
		document.getElementById("weak-password-warning").innerHTML = "";
	};
};