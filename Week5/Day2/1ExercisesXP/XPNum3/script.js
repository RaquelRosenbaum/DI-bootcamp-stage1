
DOES NOT FUNCTION - //I missed something, probably related to the number of tags that need to be identified at once.
//3-1
// Declare a global variable named allBoldItems.

//3-2
function getAllBoldItems() {
    // if something is inside a strong tag , assign it to the allBoldItems variable
    const allBoldItems = document.getElementsByClassName("strong");//remember it has to be by class because we have a lot of repetition of the strong tag, and only the first one would be returned if we get by Id rather than class.  Therefore the class "strong" has to be added to each strong tag in the html to do this.
}
//3-3
// Create a function called highlight()
function highlight(event) {  //left with parameter for 3-5.  If no event listerners, "highlight ()""
    //that changes the color of all bold text to blue
    getAllBoldItems.style.color="blue";
}
//3-4
// Create a function called returnItemsToDefault() 
function returnItemsToDefault(event) {
    // that changes the color of all the bold text back to black.
    getAllBoldItems.style.fontweight="normal";
}
//the above functions act immediately without any particular event having to occur

//3-5
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). 

// for the above functions to run only when the following event listeners are activated, the no-parameter parentheses () after the function names above must be removed and replaced with (event).  The event listener will wait and call back the other functions after an event happens

function mouseOver() {
    getAllBoldItems.addEventListener("mouseover",highlight)
}
function mouseOut() {
    getAllBoldItems.addEventListener("mouseout",returnItemsToDefault)
}
//these two functions are working all the time because of the () no parameters
