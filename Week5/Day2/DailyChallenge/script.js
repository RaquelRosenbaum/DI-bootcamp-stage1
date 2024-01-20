// wk5dy2dailychall mad libs

// story text: 
// If you go to some {Adjective1} place like Yellowstone National {Noun1}, you must know how to deal with the wild animals such as bears and wolves and {Noun Plural1}.  The most important of these is the bear. There are three kinds of bears, the grizzly bear, the {Adjective2} bear, and the {Adjective3} bear.  Bears spend most of the time {Verb ending in 'ing'1} or {Verb ending in 'ing'2}.  Bears will come up to your car and beg for {Food Plural1}.  They will stand on their hind legs and clap their {Body part plural} together and pretend to be {Adjective6}.  But do not get out of your {Vehicle} or offer the bears {Food plural2} or {Food plural3}.  This same advice applies to other wild creatures such as {Something alive plural1} and {Something alive plural2}.  Remember all these rules and you will spend your vacation {Adverb} and not get hugged by a/an {Noun3}.

//things the game needs to accomplish:
//1.receive input for each {blank} in the story, probably the user filling in a form where the blanks are listed without the story, each one an input like in a form for first name, last name, etc.
//2.insert those inputs into the story already in the html, probably by adding elements to the html and then appending the input as a new text node, each positioned appropriately inside the story in the html on the webpage.

//Relevant example below - working with forms exercise that involved inserting elements in the html:

// Learning DOM Events Video Wk5Dy2
// example which allows the user to add items to a to-do list on the same page

// const input = document.getElementById(“userinput”);  
// const button = document.getElementById(“enter”);  
// const ul = document.querySelector(“ul”);

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	const li = document.createElement(“li”);  
// 	li.appendChild(document.createTextNode(input.value));  
// 	ul.appendChild(li);  
// 	input.value = “”;  

// function addToListAfterClick() {     
// 	if (input.value.length() > 0 {    
// createListElement();
// 	}
// }

// function addToListAfterKeypress(event) {   
// 	if (event.keyCode ===13 && inputLength() > 0) {   
// 		createListElement();
// 	}
// }

// button.addEventListener(“click”, addToListAfterClick);   
// input.addEventListener(“keypress”, addToListAfterKeypress);  
//END EXAMPLE CODE


// CODE:
//definitions/addresses of elements in html:
const input = document.getElementById("libform");  
const button = document.getElementById(“submit”);  
const span = document.getElementById(“story”);

//function which in combo with the if statement below ensures each field is not empty before the form is submitted:
function inputLength() {
	return input.value.length;
}
//function which adds the form input to fill in the blanks in the story on the html:
function createListElement() {
	const li = document.createElement(“li”);  
	li.appendChild(document.createTextNode(input.value));  
	span.appendChild(li);  
	input.value = “”;  

function addToListAfterClick() {     
	if (input.value.length() > 0 {    
createListElement();
	}
}
//functions that enable them to either click the submit button or press return to submit the form:
function addToListAfterKeypress(event) {   
	if (event.keyCode ===13 && inputLength() > 0) {   
		createListElement();
	}
}
button.addEventListener(“click”, addToListAfterClick);   
input.addEventListener(“keypress”, addToListAfterKeypress);  