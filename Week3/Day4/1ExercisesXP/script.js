// Exercise 1: Simple If/Else Statement
// Instructions
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.
// Example :

// let x = 5;
// let y = 2;

// You should display:
// x is the biggest number

// ANSWER THAT FUNCTIONS CORRECTLY:
// let x=5;
// let y=2;
// if (x>y) {
//     console.log("x is the bigger number");}
// else if(x=y) {
//     console.log("the two numbers are equal");}
// else if(x<y) {
//     console.log("y is the bigger number");}

// Exercise 2: Chihuahua
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’


// ANSWER: FUNCTIONS CORRECTLY        
// let newDog="Chihuahhua";
// console.log(newDog.length);
// console.log(newDog.toUpperCase);
// console.log(newDog.toLowerCase);
// if (newDog==="Chihuahua")
//     console.log("I love Chihuahuas, it's my favorite dog breed");
// else if (newDog!=="Chihuahua")
//     console.log("I don't care, I prefer cats");

// // OR another way to do it using regex:
// var newerDog="CHIHUAHUAAAAAA";
// var regex = /[a-zA-Z0-9]/g;
// console.log(newerDog.match(regex).length);
// console.log(newerDog.toUpperCase);
// console.log(newerDog.toLowerCase);
// console.log(newerDog);

//  Exercise 3: Even Or Odd
// Instructions
// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

// ANSWER: FUNCTIONS CORRECTLY
// var num1 = prompt("Please enter a number");
// if (num1 % 2 == 0 ) {
//     alert("x is an even number");}
// else {
//     alert("x is an odd number");}


// Exercise 4: Group Chat
// Instructions
// Below is an array of users that are online in a group chat.

// const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online

// OPTION WITHOUT USING USERNAME/PASS OBJECTS INSIDE THE ARRAY:
const users=["Lea123"];
if (users.length===0) {   
    console.log("no one is online");}
else if (users.length===1){
    console.log(users[0]+"is online");}
else if (users.length===2){
    console.log(users[0]+users[1]+"is online");}
else (users.length>2);{
    console.log(users[0]+", "+users[1]+","+" and "+((users.length)-2)+" more are online");}
    // ,"Princess45","doglovers","helooo@000"