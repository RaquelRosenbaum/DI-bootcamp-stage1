// Learning DOM Events Video Wk5Dy2
// example which allows the user to add items to a to-do list on the same page


// INITIAL CODING PRE-REFACTORING:
const input = document.getElementById("form"); 
const button = document.getElementById("submit"); 
const ul = document.querySelector("ul");

button.addEventListener("click", function() {
	if (input.value.length > 0) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
})

input.addEventListener("keypress", function(event) {
	if (input.value.length >0 && event.keyCode === 13) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
})

//More notes- too much repetition, not as easy to understand the intent of the code, what it’s doing


// AFTER REFACTORING:

// const input = document.getElementById(“userinput”);  //the text entry field
// const button = document.getElementById(“enter”);  //the  enter button next to the entry field
// const ul = document.querySelector(“ul”);

//the above are cached for repeated use throughout the rest of the code, during each function - less processor time, more concise code (DOM consumes a lot of processor time)


//now below the four functions sit ready to run according to the two eventListeners at the end of the code.  They determine what the length of the entry is if any, create a list element


// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	const li = document.createElement(“li”);  //creates list item, li, type element
// 	li.appendChild(document.createTextNode(input.value));  //makes a text node into which it places the value of the input, then appends it to the li element created above
	// ul.appendChild(li);  //appends that whole thing in the new li element to the ul parent
	// input.value = “”;  //resets the input to null so that the user can start fresh with no characters in the entry field (not necessary therefore for user to delete the last entry they put in order to make a new entry)


// function addToListAfterClick() {     //if they click the enter button, this function activates the createListElement function
// 	if (input.value.length() > 0 {    //if they click the enter button, this function also checks whether there is an entry, if not, it does not activate the createListElement function
// 		createListElement();
// 	}
// }

// function addToListAfterKeypress(event) {   //if they instead press the return key to activate the enter button, this function activates the createListElement function
// 	if (event.keyCode ===13 && inputLength() > 0) {   //but not before checking to see if there is an entry, as a part of linking the pressing of the return key to activating the createListElement function
// 		createListElement();
// 	}
// }

// the following listen to see if the button is clicked to add a list item, or if the return key is pressed. and makes sure that an item is NOT added to the list if both letters have been entered and the return key has been pressed


// button.addEventListener(“click”, addToListAfterClick);   //an event listener is a call-back function: there is no () after addToListAfterClick because that would call the function immediately, we want it called only when a click happens and this absence tells js to not call it immediately
	
// input.addEventListener(“keypress”, addToListAfterKeypress);   //same thing as above, want addToListAfterKeypress only after keypress event occurs