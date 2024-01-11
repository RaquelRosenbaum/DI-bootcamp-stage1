// //arrow function
// //functions

// //declare

// function showMessage() {
//     //do something'
//     return {msg1: "message1", msg2:"message2"};
// }

// let messages = showMessages();
// console.log(messages.msg1);
// //etc.

// //expression

// //hosting - javascript reads everything first, not line by line, so a function can be called before it is declared

// //when assigning a function into a variable, like sum, though, you have to call it only after you declare it

// const sum = function (a,b) {
//     return a+b
// }
// console.log(sum(3,5));
// //can't call it before the delaration of the above function

// //arrow functions
// const hello = (val) => {
//     return val;
// }
// console.log(hello("dddd"));


// //binding function into an object also enables calling a fn before it is declared

// //block scope
// //block is everything inside curly brackets

// {let x = 10;}
// console.log(x); //undefined because let has block scope it's not global variable

// //variables consume memory when outside a function, this is why using functions is better because the variables inside them don't consume memory

// //let y = 1
// //let y = 4
// //ordinarily, y = 1 and then y = 4, y will equal 4 because it's the last one, but if you use let, it throws an error, can't let the same variable equal two diff things

// //for const can't reassign a value to a variable once you assign it
// //with let, you can reassign provided you use let:
// //let x = 1
// //let x = 2
// // now x = 2  ********check this

// //ternary operator
// //here's a more complex one that is sort of nested:
// // let a = 9;
// // let b = 4;
// // let c = (a ==9)
// //  ?  !(d ==0) ?  -10 : -20 : b == 5 ? 8 : -1


// //hosting above is actually hoisting

// //
// //template string
// //this is the ${}  nomenclature that calls js to insert functions

// // console.log("Name: ' + name + \nEmail:' + email');
// // console.log('Name: ${name} Email:${email}');

// // what is \n?************

// let arr = < array>
// arr.forEach((item, indx, arr) => {
//     console.log(item, indx);
//     arr[indx] = item + ####
// });
// console.log(arr);

// /* callback fns call themselves (is it a nested function then?) */******** */

// {/* arr.some */}

// //arr.every - every element of the array is returned **************

let b = 3, d = b, u = b;

const tree = ++d * d*b * b++ +
+ --d+ + +b-- +
+ +d*b+ +
u
console.log(tree); //163
//it's kind of like math expressions concatenated with + between each
//--d - decrement d by one before the action
//b++ - increment b by one after the action
//the * between the expressions are multiplying them
//parens can be used also instead of the concatenating with the plusses

//used in algorithms - javascript used a lot for algorithms

