
// FINAL ANSWER AT END journey there above
//3-1
// Declare a global variable named allBoldItems.

//3-2
// function getAllBoldItems() {
    // if something is inside a strong tag , assign it to the allBoldItems variable
//     const allBoldItems = document.querySelectorAll("strong");
// }
    //remember one way to do it is by class because we have a lot of repetition of the strong tag, and only the first one would be returned if we get by Id rather than class.  Therefore the class "strong" has to be added to each strong tag in the html to do this.  However, no matter what we choose, by class or by the tag using querySelectorAll, this requires looping through the items with forEach to access each of them in turn.
    //See https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll:
        //     Accessing the matches
        // Once the NodeList of matching elements is returned, you can examine it just like any array. If the array is empty (that is, its length property is 0), then no matches were found.

        // Otherwise, you can use standard array notation to access the contents of the list. You can use any common looping statement, such as:

        // JS
        // Copy to Clipboard
        // const highlightedItems = userList.querySelectorAll(".highlighted");

        // highlightedItems.forEach((userItem) => {
        //   deleteUser(userItem);
        // });

        // }
//3-3
// function getAllBoldItems() {
//     const allBoldItems = document.querySelectorAll("strong");
// }
// // Create a function called highlight()
// function highlight(event) {  //left with parameter for 3-5.  If no event listerners, "highlight ()""
//     //that changes the color of all bold text to blue
//     getAllBoldItems.style.color="blue";
// }
// //3-4
// // Create a function called returnItemsToDefault() 
// function returnItemsToDefault(event) {
//     // that changes the color of all the bold text back to black.
//     getAllBoldItems.style.fontWeight="normal";
// }
//the above functions act immediately without any particular event having to occur

//3-5
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). 

// for the above functions to run only when the following event listeners are activated, the no-parameter parentheses () after the function names above must be removed and replaced with (event).  The event listener will wait and call back the other functions after an event happens

// function mouseOver() {
//     getAllBoldItems.addEventListener("mouseover",highlight)
// }
// function mouseOut() {
//     getAllBoldItems.addEventListener("mouseout",returnItemsToDefault)
// }
//these two functions are working all the time because of the () no parameters therefore they need to be the outer part of the function

// REWORKING THE PROBLEM:
function GetAllBoldItems() {
    const addressAllBoldItems = document.querySelectorAll("strong");

    addressAllBoldItems.forEach(function(element) { //execute the js forEach function for each item in the const cited
        element.addEventListener("mouseover",function() { //for each element, add an EventListener.  No parameter, just "function()", so is listening all the time - ()
            element.style.color="blue" //what to do, what we see, nested inside 
    })});

    addressAllBoldItems.forEach(function(element) {  //execute the js forEach function for each item in the const cited
        element.addEventListener("mouseout", function() { //for each element, add an EventListener.  No parameter, just "function()", so is listening all the time - ()
            element.style.color="black" //what to do, what we see, nested inside.  
    })});}
GetAllBoldItems();
//maybe the tag was made to be strong because they wanted those words to always be bold, but the other things desired to do, i.e. color change, we wanted to do dynamically in real time, so left those for the js script.