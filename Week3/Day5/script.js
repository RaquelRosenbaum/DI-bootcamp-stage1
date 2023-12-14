
// lecture3 javascript THurs 14/12/2023

// debugging - better to do it in Chrome, the dev tools are better than anything you’ll find in VS Code

// i++ == i=i+1

// for (let i = 0; i < 11; i++) {
// 	console.log(i);
// 	}
// the loop increases to 11 from 10, then checks condition i<11, then does not console.log - the loop ends in other words.

// let colors = [“red”, “yellow”, “black”, “pink”]
// for (let i = 0; i < 4; i++) {
// 	console.log(i);
// 	console.log(colors[i]);

// but it needs to be more dynamic:

// .length property gives us the length of the array and this is useful

// dynamic loop:
// let colors = [“red”, “yellow”, “black”, “pink”]
// for (let i = 0; i < colors.length; i++) {
// 	console.log(i);
// 	console.log(colors[i]);

// this is also useful because maybe the length of the array is changing all the time (people logging in and out)

//loop through numbers 0 to 15, say whether each is odd or even

// for (let i = 0; i < 15; i++) {
// 	if (i % 2 === 0 ) {
//         console.log(i%2);
//         console.log(i+" is an even number");}
//     else {
//         console.log(i%2);
//         console.log(i+" is an odd number");}
// 	}
    
        // shearit is remainder in hebrew - modulo



// FOR IN LOOPS (objects only):
            // always used when we loop through an object
// let person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25,
// };

// for (let key in person) {
//     console.log(person[key]);
//         }
       
// console.log(person.lname);
 // We do the following and the person[key] above because we get a string back from a previous step, so need to access it as an Object.  person.lname gets us an index
// console.log(person["lname"]);

// For / Of Looping thru array or strings:
// let colors = ["blue", "yellow", "red"];

// for (let element of colors) {
//      console.log(element);
// }
//sometimes need the number of your current position though, to know the index but otherwise this is shorter and we can use this

// iterate over multiple objects in an array - a loop inside a loop

// let myArray=[
// {
//     fname: "John",
//     lname: "Doe",
//     age: 26,
// },
// {
//     fname: "John",
//     lname: "Doe",
//     age: 27,
// },
// {
//     fname: "John",
//     lname: "Doe",
//     age: 28,
// },
// {
//     fname: "John",
//     lname: "Doe",
//     age: 29,
// },];

// for (let element of myArr) {
//     console.log("start of arr element");
//     for (let key in element){
//         console.log(element[key]);
//     }
// }

// WHILE LOOPS - while a condition is true we want it to keep iterating

// 1st example:
// let n = 0;
// while (n<3) {
//     n++;
//     console.log(n)
// }
// zero doesn't appear because first n++ goes before console.log(n) goes

// 2nd example:
// let username=prompt("please enter username");
// while (username != "admin") {
//     username=prompt("please enter CORRECT username)
// }
// console.log("welcome")

// 3rd example:

// Do WHILE Loop

// let username;

// do{
//     username = prompt("enter username");
// }   while (username !=="admin");

// do while executes code block at least once, first do at least once, then check condition

// break

// for(leti=0; i<10; i++_ {
//     console.log("before if statement");
//     console.log(i);
//     if (i === 3) {
//         break;
//     }
//     console.log("after if statement");
// };

// continue doesn't break out of loop, just skips to the next iteration
// for (leti=0; i<10; i++_ {
//     if(i===3 || i === 7 || i === 8) {
        //continue skips the current iteration
//         continue;
//     }
//     console.log("the number is " + i); //0123456789");
// };

// CLASS EXERCISE 2
// #1:
// let names=["john", "sarah", 23, "Rudolf", 34];
// for (let name of names) {
//     of!(i===string) {
//         if (typeof name === "string"){
//             if (name[0]!==name[0].toUpperCase())
//                 {
//                 name = name[0].toUpperCase()+name.slice(1);
//             }
//         }
//         console.log(name);
//     }

// // #2:
// let names=["john", "sarah", 23, "Rudolf", 34];
// for (let name of names) {
//     if (typeof name !== "string"){
//         continue;
//     }
//     console.log(name);
//     }