
//2-1.
// const form = document.getElementsByTagName("form");
// console.log(form);
// //2-2.
const addressFName = document.getElementById("fname");
// console.log("addressFName");
const addressLName = document.getElementById("lname");
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
}

button.addEventListener("submit",addInputToUsersAnswerUI) {
    event.preventDefault();
}
//2-4-b.

//2-4-c.
//2-4-d.
//2-4-e.


