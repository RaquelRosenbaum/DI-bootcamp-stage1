// QUESTION ON HOMEWORK:
// let bankAmount = 1000;
// const VAT = 1.17;
// const details = [200, -100, +146, +167, 
//     2900];

// details.forEach((item, index, arr)=>{
//     arr[index]= arr[index] * (1 + VAT);
//     bankAmount += arr[index];
// });
// console.log(bankAmount);


// IN-CLASS EXERCISE:
//Return the num (count) of vowels in the given strring. aeiou but not y
// input string lower case letters or spaces

// CORRECT ANSWER:
//function countVowels(text {
    // const vowels = ["a","e","i","o","u"];
    // let count = 0:
    // for(let char of text) {
    //     if(vowels.includes(char)) {
    //         count++;
    //     }
    // }
    // return count;
    // console.log(countVowels("The input stng will only consist of lower case letters and/or spaces"));

    // can also do with forEach

// NOTES - FUNCTIONS

function x() {
    return 1;
}
const x1 = function(){
    return 2;
}
const x3 = () => 5
//arrow fns are great because it's one line, don't need line "return 2"
    //see them a lot in react and nodejs
const x3 = (a,b) => a+b;

//nested functions
functionx() {
    function y() {
        console.log("hello"+name+" " + age);
    }
    return y;
}
let hi = x(26);
hi('Dan');// y is inside this
x()();
//with nested function, the inner one needs a return statement because it's not defined outside the fn

//children have access to parent, not the other way around

//currying - like a nested function but 
const y = (a) => {
    return (b) => {
         return a + b;
}};
console.log(y(5)(6));
//don't need return when using curly braces
const y1 = (a) => (b) => a+b; //a fn that is returning a fn that is returning a value
console.log(y1(5)(6));

// compose
const x = (a,b) => {
    return (c) => {
        return a(b(c))  //c is a value inserted into b, that returns a value after the fn of a is applied to it
    }
}
const x1 = (a,b) =>(c) => a(b(c)); // this is the same code as the above

//example of the above:
const sum2 = (num)=> num * 2;
const sum = (num) => num +1;
let result = x1(sum, sum2)(6);//this is called compose
console.log(result); //13 is the result

const x1 = (sum,sum2) =>(c) => sum(sum2(6));
//6 is multiplied by 2 and then one is added to it

//objects:
let obj = {};
let obj1 = new Object();
console.log(obj);
console.log(obj1);
obj.name = 'John';
obj1.car = 'Alfa';
console.log(obj);
console.log(obj1);

//destructuring an object is dissecting it, calling functions to get the contents

const {name,  age, email} = obj; //these are keywords
console.log(name, age, email);

//computed properties///dynamic key values

let obj = {
    age: 32,
    name: "Dan",
}

let objKey = "userage";
let ojbName = "username";
let obj = {
    [objKey]: 32,
    [objName]: "Dan",
};
console.log(obj);

// Property Value Shorthand:

const name = 'John';
const age = 32;

let obj = {
    [name]: name
    [age]: age
}
console.log(obj);

//the above is the same as:
//if key and value are the same name, don't need the bits after the colon
const name = 'John';
const age = 32;

let obj = {
    name,
    age
}
console.log(obj);

//loop through the object;

//for each is an array method, for in is not, remember

for(x in obj){
    console.log(x, obj[x]);
}
//making declaration in simple variables variables occupy different slots in memory, but if variables are by reference, they occupy the same slot - the second that is declared to the be the first variable just has a pointer to the location of the first variable-  though it is located in a different slot, it's just the pointer that is located there, not its actual value - value vs. reference being located in the memory slot.  The second variable that is defined to be the first variable doesn't actually contain the value, only a reference to the value in the first variable

//a cloned variable is a reference from a third location, pointing back to the address where the value of the variable resides

//cloning doesn't affect nested arrays because this is like yet another address to the same location in memory

//to clone a nested array or object, use JSON

//JSON = text, string with special structure
{"a":"value","b":12}  //double quotes in the key and in the value are hallmarks of the JSON
[{"a":"value","b":12}]

//Javascript Object Notation

//one example - using APIs we use JSON
//  to fetch because we can't fetch an object - on http we can't fetch anything but a string
//so send as JSON to be converted to an array of objects
//characterized by double quotes - let jsonArr = JSON.stringify(arr);  which produces a string whose keys and values are in double quotes that are used in strings

//then it's converted back to an array of objects by:
let arrJson = JSON.parse(jsonArr);




