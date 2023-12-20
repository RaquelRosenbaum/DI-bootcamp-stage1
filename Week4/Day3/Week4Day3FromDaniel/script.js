//Functions

// function greetUser() {
//   console.log("Welcome new user!");
// }

// greetUser();

//Function Parameters

// function greetUser(username, age, height = "unknown") {
//   console.log(`Welcome ${username}. You are ${age} and your height is ${height}!`);
// }

// greetUser("User1", 28, "180cm");
// greetUser("User2", 30);

// const fname = "Daniel";
// const lname = "Robin";

// console.log("My name is " + myName );
// console.log(`My name is ${fname} ${lname}`);

//Dom Manipulation

// const myDiv = document.querySelector("div");
// const myUl = document.querySelector("ul");
// console.log(myUl);

// const myLi = document.querySelector("li");
// console.log(myLi);

//Get all of specific element :
// const myLi = document.querySelectorAll("li");
// console.log(myLi);

//Get Elements By Their CSSselectors with Qselector

// const firstLi1 = document.querySelector("#firstLi");

// console.log(firstLi);

// const headers = document.querySelector(".headers");

// console.log(headers);

//getElementById
// const firstLi = document.getElementById("firstLi");
// console.log(firstLi);

//getElementByClassName

// const headers = document.getElementsByClassName("headers");
// console.log(headers);

// const myUl = document.querySelector("ul");
// console.log(myUl.lastElementChild);

//Exercise 1

// const body = document.querySelector("body");

// console.log(body.firstElementChild);

// const myDiv = document.querySelector("div");

// console.log(myDiv);

// console.log(myDiv.nextElementSibling);

// const myUl = document.querySelector("ul");

// console.log(myUl);

// const myUlAgain = document.getElementsByTagName("ul");

// console.log(myUlAgain[0].lastElementChild);

//Creating An Element
// const newElement = document.createElement("li");
// newElement.textContent = "Bob";
// myUl.append(newElement);

// const newH2 = document.createElement("h2");
// newH2.textContent = "This is the second header";
// body.append(newH2);

//Removing an element from DOM

// const myUl = document.querySelector("ul");
// myUl.remove();

//Matches

// const li = document.getElementById("firstLi");
// console.log(li.matches("#firstLi"));

//Closest

// const li = document.getElementById("firstLi");

// console.log(li.closest(".x"));

//Exercise 2
// const div1 = document.getElementById("container");

// const div1again = document.querySelector("div");

// const ul = document.querySelectorAll("ul");
// console.log(ul[0].children[0].innerText);
// console.log(ul[0].children[1].innerText);

// console.log(ul[1].children[0].innerText);

// console.log(ul[1].children[1].innerText);

// for (let element of ul) {
//   for (let child of element.children) {
//     console.log(child.innerText);
//   }
// }

//HTML Attributes
//Checks for EXISTENCE
// const div = document.getElementById("container");

// console.log(div.hasAttribute("id"));
// console.log(div.hasAttribute("class"));

//Get Attribute

// console.log(div.getAttribute("class"));

// if (div.hasAttribute("class")) {
//   console.log(div.getAttribute("id"));
// } else {
//   console.log("This attribute does not exist");
// }

//Creating/Updating an attribute
// const img = document.querySelector("img");
// img.setAttribute(
//   "src",
//   "https://tribuneonlineng.com/wp-content/uploads/2022/07/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg"
// );

// const div = document.querySelectorAll("#container");

// div[0].setAttribute("class", "red");

// div[0].removeAttribute("class");
// const a = document.querySelector("a");

// console.log(a.getAttribute("href"));
// console.log(a.getAttribute("rel"));
// console.log(a.getAttribute("type"));

//Changing style of element

// const div = document.getElementById("container");
// // console.log(div.innerText);
// div.style.backgroundColor = "salmon";
// div.style.border = "2px dotted blue";
// div.style.borderRadius = "14px";

//Dom Classname Property
// const div = document.getElementById("container");
// div.className = "red";

//Dom ClassList
// div.classList.add("red", "yellow", "green");
// div.classList.remove("class2", "yellow");
