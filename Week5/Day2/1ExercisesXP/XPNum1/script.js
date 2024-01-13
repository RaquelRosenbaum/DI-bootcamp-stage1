//1-1.
const addressSomeFacts = document.querySelector("body article h1");  //the spaces allow the combination so multiple statements don't have to be made - the h1 element in the article element in the body element
console.log(addressSomeFacts);

//1-2.
const lastPTagInArticle = document.querySelector("article").lastElementChild;
lastPTagInArticle.remove();

//1-3.
const addressTheChocolateH2 = document.querySelector("body article h2");
addressTheChocolateH2.addEventListener("click", function); //this is an internal function associated with the eventlistener, which executes the eventlistener - that's why it doesn't need to be a function that was defined before expressing for this code snippet
    addressTheChocolateH2.style.backgroundColor = "red"

//1-4. Same as above just needs changes
const addressHistoryChocolateH3 = document.querySelector("body article h2");
addressHistoryChocolateH3.addEventListener("click", function);
    addressHistoryChocolateH3.style.display = "none";

//1-5.
const textbolderbutton = document.getElementbyId("makeTextBigger");
textbolderbutton.addEventListener("click",function);//add an event listener at the location of the button id makeTextBigger that I put in the html, and execute the javascript internal function for event listeners when the user clicks the button.

//the operation of making the text bold
//designating which text is going to be made bolder - get the address of the contents of the article tag

const ppToBeBolded = document.getElementsByTagName("article");
ppToBeBolded.style.fontWeight = "bold";



