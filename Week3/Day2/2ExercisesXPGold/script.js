// EXERCISE 1

// Instructions
// let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let sentence = ["my","favorite","color","is","blue"];
let sentenceString=sentence.join();
console.log(sentenceString);


// EXERCISE 2

// Instructions
// Create 2 variables. The values should be strings. 
let str1 = "Bald";
let str2 = "Torn";


// 2. Slice out and swap the first 2 characters of the two strings from part 1.
result1=str1.slice(0,2);
result2=str2.slice(0,2);
str1=result2+"ld";
str2=result1+"rn";
console.log(str1);
console.log(str2);

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
sentence="I "+str1+" her to go to the "+str2;
compositeWord=str1.concat(str2);


// 4. Finally console.log the new concatenated string.

console.log(sentence);
console.log(compositeWord);

// EXERCISE 3

// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1.number=prompt("What is the first number?");
let num2.number=prompt("What is the second number?");
alert("The sum of "+num1+" and "+num2+" is: "+(num1+num2));
// alert("num1 minus num2 is: "+(num-num2));
// alert("num1 times num2 is: "+(num1*num2));
// alert("num1 divided by num2 is: "+(num1/num2));
