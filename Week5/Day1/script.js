// class notes intro on DOM

//changing HTML without making changes in the HTML, saving it only in the js file

// but the DOM of the HTML is altered - under elements tab in the browser in inspector

//a space is drilling down to nested elements
// let elem = document.querySelector("div .submainclass p.header")
//the first div with a child thatis a submainclass, with a child that has a p with a class header inside it

//to change something, need to access element and append to it

// DOM events

//to add an event to an element, add it to the element itself in the HTML, the part that doesn't need to be dynamic

// HTML:
//<button onClick="handleClick()">Click!!!/button>
//input onInput="handleInput(event)"/>
// event listener in js
// function handleInput(event) {
//     console.log(event);
// }
// function handleInput(event) {
//     console.log(event);
// }function handleInput(event) {
    //}
//console.log(even.target.value);

//the events are listed on the console under the dropdown on that object

// if charset is 13 this is the return Key, so user can press return to activate the button after entering data
//e by itself can be used to refer to event object

//there has to be event object on the html to control it in the js file referring to it as e


//appendchild or whatever has to be a separate line below the line that describes the element you are adding

//add row upon pushing button

// there is tbody in every table even if you don't put it, part of the html structure - table.lastElementChild  first is the table itself

//see scrnshot appendrowuponclickbutton

//function insertRow() {
    // const table = document.getElementById("sampleTable");
    // console.log(table);
    // const tbody = table.firstElementChild;
    //const new_row = row.cloneNode(true);  //duplicating,cloning row element - if false it doesn't clone any of the subchildren, just the element itself
    // console.log("new_row=>", new_row);
    //table.appendChild(new_row);  //clones the row each time the button is pressed
//clone with all its subchildren then append

// innerText and text.content is the same

//click and onclick are different - *******************???

// the target of a button is the button itself
//adding the function call at the end of the function is a best practice
//the fn is called only when there is an event that triggers its being called - this why called call-back function
//that's why its ("click", functionName) instead of ("click", (functionName()) - the latter executes the function immediately

//true on the eventListener = from inside element to outside elements

// 3 elements nested - bubbling propogation from inside or from outside according to false or true accordingly

//form element is spatial element with lots of input

//there is a default behavior tied to refreshing the page

//on terminal in the inspector in browser do this to see all the methods:
//     http
//post appends the info entered to the body, rather than putting it into the url (passwords etc.)

//e.preventDefault(); prevents default behavior of the element, like a button - whose default beh is refreshing the page

// preventdefault with alert is used for verification that what was entered is correct, they press ok that yes that's what they entered or some aspect about it is what was requested by the form, etc.

//