// Exercise 1 : List Of People

// Instructions


// const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// people.shift();
// console.log(people);

// Write code to replace “James” with “Jason”.

// people.splice(2,1,"Jason");
// console.log(people);

// Write code to add your name to the end of the people array.

// people.push("Raquel");
// console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// indMary = people.indexOf("Mary");
// console.log(indMary);

// Write code to make a copy of the people array using the slice method.

// shortenedPeople = people.slice(1,3);
// console.log(shortenedPeople);

// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?
// ********CAN'T FIND THIS*************
// console.log(people.indexOf([foo]));

// Create a variable called last which value is the last element of the array.
// ********CAN'T FIND THIS*************
// let last = people[people.length+1];
// console.log(last);
//  **************returns UNDEFINED on line 45*************

// Hint: What is the relationship between the index of the last element in the array and the length of the array?
    // Answer:  It's the length of the array plus one

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// const people = ["Greg", "Mary", "Devon", "James"];
// let (i=0; i<4; i++)  {
//     console.log(people[i]);
// }
// const people = ["Greg", "Mary", "Devon", "James"];
// for (let i = 0; i < 11; i++) {
//     	console.log(people[i]);
// }

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

// const people = ["Greg", "Mary", "Devon", "James"];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i], "before if statement");{
//         if (i ===3) {
//             break;
//             } 
//             console.log((people[i]), "after if statement")
//     }
// }
// THE ABOVE RETURNS:
// Greg before if statement
// script.js:72 Greg after if statement
// script.js:68 Mary before if statement
// script.js:72 Mary after if statement
// script.js:68 Devon before if statement
// script.js:72 Devon after if statement
// script.js:68 James before if statement  
//YAYYYYY!!!  

// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// STARTING POINT (NOT AN ANSWER):
// let colors = ["brown", "green", "beige", "brown-mustard yellow", "obergine"];
// for (let i = 0; i < colors.length; i++) {
//     console.log("My #1 choice is "+colors[0]);
//     console.log("My #2 choice is "+colors[1]);
//     console.log("My #3 choice is "+colors[2]);
//     console.log("My #4 choice is "+colors[3]);
//     console.log("My #5 choice is "+colors[4]);
// }

// NEEDS WORK ******************* THIS IS THE ANSWER):
// let colors = ["brown", "green", "beige", "brown-mustard yellow", "obergine"];
// for (let i = 0; i < colors.length; i++) {
//     let suffix = ["1st", "2nd", "3rd", "4th", "5th"];
//     for (elements in suffix) {
//         console.log("My "+suffix[j]+" choice is "+colors[i]);
//     }  
// }

// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// AN ATTEMPT:
// var num1 = prompt("Please enter a number");
// let (for i = 0; i < 10; i++) {
//     while (typeof num1 !== “number”) {
//         alert("Not a number, please enter another number");
//     }
// }
 

// Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Instructions:
// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor,building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building.nameOfTenants[1],building.numberOfRoomsAndRent[1,0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”


// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
//endings

// ATTEMPT:

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//     for (element of names) {
//         (names.splice[0]);
//         console.log(names)
//     }
    

// Solution from class:
// see scrnshot


// another example from class:
let x = 0 
while(x<4){
    x++
    console.log("while",x);
}
// AND:

let x=0;
do {
    x++;
    console.log("do",x);
}
while(x<0);