// function- doing a specific action that we can call again and again dont have to define each time

// a block is what comes between two curly brackets

// function a() {   //fn declaration
//     console.log("Hello Javascript Students"); //arguments
// }
// a()  //this calls the function

// b() {
//     a()
// }  //a called from within b

// only have access to let variable within the code block itself; but var is usable outside that

//can't change const after declaring it, and it can't be an empty set
    // always capitalized by convention so everyone knows it's a const


//EXERCISE 1 in class
// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

// function myAge(myAge) {
//     let momAge = 2 * myAge;
//     let dadAge = 1.2 * momAge;
    // return [mom,dad]
//     return {
//         momAge:momAge
//         dadAge:dadAge
//     }
// }
// let result = myAge(22);
// console.log(result);

// the root object of the browser is called "this"
// a function can be a key:value pair in an Object
// object method - a function in an object
// everything is an Object, even an Array, in actuality

//the argument of the function is inside the parens when it is called - 
//myAge(22);
//the parameter is the specification inside the parens in the line instantiating the function - function myAge(age=40)

//because we can call a string, or call an expression, calling an expression when we call the function is a way of specifying a new input, the argument  -

// Example:
// function square(number) {
//     return number * number;
// }
// console.log(square(2));  the expression "square(2)"  is the argument that tells the function that doesn't have a parameter set.

