// Review on FUnctions - 

//need to run multiple times
//when concatinating - "lkjlkjl" + sdfs + " etc., backticks and curly braces, and $ in front -  instead of double quotes allows us to inject javascript code inside that string.
// key under esc
//it injects the actual value passed to it and no + signs or spaces needed to be put to ensure that it is grammatically correct in the return
//EXAMPLE: (`My name is ${myName}`);

//
//Functions can have default values, but when it is called, new values can be inserted in the call instead

//DOM Manipulation using Javascript

//query selector all always returns an array even if there is only one specific object in it that you called for

//hashtag or dot - get elements by their CSS Selectors with Query Selector - need hashtag to the left of the name of the element -- need to call according to the way it would be called in css - # or .

// Exercise 1

// const myDiv = document.getElementsByTagName("div");
//alternative is  firstElementChild of body
// const myul = document.getElementsByTagName("ul");
//also .nextElementSibling of the div - not nextSibling, which would be the text
//also though querySelector
// const myliPete = document.querySelector("li:last-child");
//myUl[0].lastElementChild);

// console.log(myDiv[0]);
// console.log(myul[0]);
// console.log(myliPete);

//only use const, not var or let

//Creating, Adding, and Deleting elements

// const newelement=document.createElement("li");

// newElement.textContent="Bob";
//now append it to the ul above:
//myUl.append(newElement);
//const newH2=document.createElement("h2);
//newH2.textContent = "This is the second header";
//body.append(newH2);
//
//you have to make containers for these elements you are adding in the html or css

//const li = document.getElementById("firstLi");
//console.log(li.matches("#firstLi"));) - does this item match any css selector of this type?  Will return T or F

//elem.closest(css):

//const li = document.getElementById("firstLi");

//console.log(li.closest("#ul"));

// EXERCISE 2
//const div1=document.getElementById("container");
// const div1again = document.querySelector("div");

// const ul=document.querySelectorAll("ul");
// console.log(ul);
// console.lot(ul[0].children[0].innerText);
// console.lot(ul[0].children[1].innerText);
// console.lot(ul[1].children[0].innerText);
// console.lot(ul[1].children[1].innerText);

// Better way is to loop through the two ul's instead of 4 lines of code above

// for(let element of ul) {
    // console.log(element);
    //OR
    // console.log(element.children);
    // OR
    //for (let child of element.children) {
    // console.log(child.innerText);
// }

//result is a list of the four people names

// DOM ATTRIBUTES:

//checks for existance

//const div=document.getElementById("container");
//console.log(div.hasAttribute("id"));
//console.log(div.hasAttribute("class"));

//some people only use querySelector and get away with just that!

//get attribute

//console.log(div.getAttribute("id"));

//if else statement also used to check and then if it exists, get it

//setAttribute - set or override attribute

//attribute is tchunah in hebrew

//if there is a bunch of a specific class or div or whatever, a list of 5 divs, and you only want to give an attribute to one of them, just put an id for that one to make it simple so you don't have to loop through that list to designate it

//Changing style of element

//innerText - just the text
//innerHTML - the text and the tags surrounding it

//const div=document.getElementById("container");
    //console.log(div.innerText);
//div.style.backgroundColor = "salmon";
//div.className = "red";

//to override all classes for an element use className
//to add one more class to an element's classes, use classList - this is safest



