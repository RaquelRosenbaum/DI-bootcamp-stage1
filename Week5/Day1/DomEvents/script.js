/**
 * DOM - Events
 */

function handleMySubmit(e) {
  e.preventDefault();
  const email = document.getElementById("nameinput");
  alert(email.value);
  e.target.submit();
}

// const div = document.getElementById("root");
// const innerdiv = document.getElementById("root");
// const innerbutton = document.getElementById("root");

// div.addEventListener("click", divclick, false);
// innerdiv.addEventListener("click", innerdivclick, false);
// innerbutton.addEventListener("click", innerbuttonclick, false);

// function divclick(e) {
//   alert("root");
//   e.stopPropagation();
// }
// function innerdivclick() {
//   alert("main");
// }
// function innerbuttonclick() {
//   alert("button");
// }
/*
const root = document.getElementById("root");

const but = document.createElement("button");
const but1 = document.createElement("button");

but.innerText = "Click Me!!";
but1.innerText = "Click Me 1!!";

but.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "yellow";
  //   changBG("yellow");
  changBGPink();
});
// but1.addEventListener("click", function (event) {
//   event.target.style.backgroundColor = "red";
//   changBG("red");
// });
but1.addEventListener("click", changBGPink);

function changBGPink() {
  root.style.backgroundColor = "pink";
}

root.appendChild(but);
root.appendChild(but1);

function changBG(color) {
  root.style.backgroundColor = color;
}
*/
// function insertRow() {
//   const table = document.getElementById("sampleTable");
//   //   console.log(table);
//   const tbody = table.firstElementChild;
//   //   console.log(tbody);
//   const row = tbody.lastElementChild;
//   //   console.log(row);
//   const new_row = row.cloneNode(true);
//   new_row.firstElementChild.textContent = "123456";
//   new_row.lastElementChild.textContent = "abcd";
//   console.log("new row=>", new_row);
//   table.appendChild(new_row);
// }

// let maindiv = document.getElementById("main");
// console.log(maindiv);

// let divs = document.getElementsByTagName("div");
// console.log(divs[0]);

// let headers = document.getElementsByClassName("header");
// console.log(headers[0]);

// let elem = document.querySelector("div .submainclass p.content");
// console.log("elem=>", elem);

// function handleClick() {
//   console.log("Hey");
// }

// function handleInput(event) {
//   console.log(event.target.value);
// }

// function handleEnter(e) {
//   e.target.style.backgroundColor = "pink";
// }

// function handleLeave(e) {
//   // let div = document.getElementById("root")
//   e.target.style.backgroundColor = "";
//   e.target.style.border = "1px solid red";
// }
