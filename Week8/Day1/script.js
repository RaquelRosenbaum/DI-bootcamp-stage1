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

