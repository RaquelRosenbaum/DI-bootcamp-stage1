
//2-1.
// const form = document.getElementsByTagName("form");
// console.log(form);
//2-2.
// const addressFName = document.getElementById("fname");
// console.log("addressFName");
// const addressLName = document.getElementById("lname");
// console.log("addressLName");

//2-3.
// const addressFNameByAtt = document.getAttribute("firstname");
// console.log(addressFNameByAtt);
// const addressLNameByAtt = document.getAttribute("lastname");
// console.log(addressLNameByAtt);

//2-4-a.
//the default action of the button is simply to refresh the page, this is why we have to prevent the default so we can ask it to do something else instead
button.addEventListener("click",addInputToUsersAnswerUI) {
    event.preventDefault();
    if input.value.length > 0 {
        document.createTextNode()
        document.createElement("li");
        ("li").append(TextNode)
        usersAnswer.append("li");
    }
}
button.addEventListener("submit",addInputToUsersAnswerUI) {
    event.preventDefault();
}
//2-4-b.
//2-4-c.
//2-4-d.
//2-4-e.










// Notes on Video:  Learning DOM Events Video Wk5Dy2
// example which allows the user to add items to a to-do list on the same page

//The HTML for the js code below from this example:

// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Javascript + DOM</title>
// 	<link rel="stylesheet" type="text/css" href="style.css">
// </head>	
// <body>
// 	<h1>Shopping List</h1>
// 	<p id="first">Get it done today</p>
// 	<input type="text" placeholder="enter items">
// 	<button class="enter">Enter</button>
// 	<ul>
// 		<li class="bold red" random="23">Notebook</li>
// 		<li>Jello</li>
// 		<li>Spinach</li>
// 		<li>Rice</li>
// 		<li>Birthday Cakes</li>
// 		<li>Candles</li>
// 	</ul>
// 	<script type="text/javascript" src="script.js"></script>
// </body>	
// </html>

{
    /* // INITIAL CODING PRE-REFACTORING:
    const input = document.getElementById(“userinput”); 
    const button = document.getElementById(“enter”); 
    const ul = document.querySelector(“ul”);
    
    button.addEventListener(“click”, function(event) {
    	if (input.value.length > 0 {
    		event.preventDefault();
    		let li = document.createElement(“li”);
    		li.appendChild(document.createTextNode(input.value));
    		ul.appendChild(li);
    		input.value = “”;
    	}
    })
    
    input.addEventListener(“keypress”, function(event) {
    	if (input.value.length >0 && event.keyCode === 13) {
    		event.preventDefault();
    		let li = document.createElement(“li”);
    		li.appendChild(document.createTextNode(input.value));
    		ul.appendChild(li);
    		input.value = “”;
    	}
    })
    
    too much repetition, not as easy to understand the intent of the code, what it’s doing
    
    
    AFTER REFACTORING:
    
    const input = document.getElementById(“userinput”);  //the text entry field
    const button = document.getElementById(“enter”);  //the  enter button next to the entry field
    const ul = document.querySelector(“ul”);
    
    the above are cached for repeated use throughout the rest of the code, during each function - less processor time, more concise code (DOM consumes a lot of processor time)
    
    
    now below the four functions sit ready to run according to the two eventListeners at the end of the code.  They determine what the length of the entry is if any, create a list element
    
    
    function inputLength() {
        return input.value.length;
    }
    
    function createListElement() {
        const li = document.createElement(“li”);  //creates list item, li, type element
        li.appendChild(document.createTextNode(input.value));  //makes a text node into which it places the value of the input, then appends it to the li element created above
        ul.appendChild(li);  //appends that whole thing in the new li element to the ul parent
        input.value = “”;  //resets the input to null so that the user can start fresh with no characters in the entry field (not necessary therefore for user to delete the last entry they put in order to make a new entry)
    }
    
    function addToListAfterClick() {     //if they click the enter button, this function activates the createListElement function
        if (input.value.length() > 0 {    //if they click the enter button, this function also checks whether there is an entry, if not, it does not activate the createListElement function
            createListElement();
        }
    }
    
    function addToListAfterKeypress(event) {   //if they instead press the return key to activate the enter button, this function activates the createListElement function
        if (event.keyCode ===13 && inputLength() > 0) {   //but not before checking to see if there is an entry as a part of linking the pressing of the return key to activating the createListElement function
            createListElement();
        }
    }
    
    the following listen to see if the button is clicked to add a list item, or if the return key is pressed. and makes sure that an item is NOT added to the list if both letters have been entered and the return key has been pressed
    
    
    button.addEventListener(“click”, addToListAfterClick);   //an event listener is a call-back function: there is no () after addToListAfterClick because that would call the function immediately, we want it called only when a click happens and this absence tells js to not call it immediately
        
    input.addEventListener(“keypress”, addToListAfterKeypress);   //same thing as above, want addToListAfterKeypress only after keypress event occurs */}