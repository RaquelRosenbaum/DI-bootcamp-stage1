// Instructions
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
// Example:

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'
  
  
  
// ANSWER THAT FUNCTIONS CORRECTLY:
// let x=5;
// let y=2;
// if (x>y) {
//     console.log("x is the bigger number");}
// else if(x=y) {
//     console.log("the two numbers are equal");}
// else if(x<y) {
//     console.log("y is the bigger number");}

// ANSWER: FUNCTIONS CORRECTLY        
// let newDog="Chihuahhua";
// console.log(newDog.length);
// console.log(newDog.toUpperCase);
// console.log(newDog.toLowerCase);
// if (newDog==="Chihuahua")
//     console.log("I love Chihuahuas, it's my favorite dog breed");
// else if (newDog!=="Chihuahua")
//     console.log("I don't care, I prefer cats");

// OR another way to do it using regex:
// var newerDog="CHIHUAHUAAAAAA";
// var regex = /[a-zA-Z0-9]/g;
// console.log(newerDog.match(regex).length);
// console.log(newerDog.toUpperCase);
// console.log(newerDog.toLowerCase);
// console.log(newerDog);


// ANSWER: FUNCTIONS CORRECTLY
var num1 = prompt("Please enter a number");
if (num1 % 2 == 0 ) {
    alert("x is an even number");}
else {
    alert("x is an odd number");}



