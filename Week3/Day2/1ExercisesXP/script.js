// exercise 1

// 🌟 Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

let favoriteFood="Omelete";
let favoriteMeal="Breakfast";
console.log("I eat "+favoriteFood+" at every "+favoriteMeal);


// EXERCISE 2 - Part I

// 🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength=myWatchedSeries.length;
console.log(myWatchedSeries.length);

let myWatchedSeriesSentence="black mirror, money heist, and the big bang theory.";
console.log("I watched 3 series : "+myWatchedSeriesSentence);


// EXERCISE 2 - Part II

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

myWatchedSeries.splice(2,1,"Friends");
console.log(myWatchedSeries);

myWatchedSeries.push("For All Mankind");
console.log(myWatchedSeries);

myWatchedSeries.unshift("For All Mankind");
console.log(myWatchedSeries);

myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

let strmyWatchedSeries=myWatchedSeries.toString();
console.log(strmyWatchedSeries);

console.log(strmyWatchedSeries.indexOf("money","money"));

console.log(strmyWatchedSeries[18]);
// FIRST QUESTION ASKED IN SUBMIT NOTES - how to search for the second occurrence of "n" in the string.  Or, is there a way to search within the elements of the array as if each is a string so you don't have to toString the array?  


// EXERCISE 3

// 🌟 Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let temperature;
temperature=20;
let fahrenheitTemperature=((temperature/5)*9)+32;
console.log(fahrenheitTemperature);


// EXERCISE 4

// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Using the code below:

    let c;
    let a = 34;
    let b = 21;
    console.log(a+b) //first expression
    // Prediction: 55, they aren't strings, they are numbers, so math operations possible
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:  23
    // Actual: 23

// What will be the outcome of a + b in the first expression ?  55
// What will be the outcome of a + b in the second expression ?  23
// What is the value of c?  "" - no definition has been made yet, the variable has only been declared

// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
// Prediction:  75 where 5 is a string because 5 was in quotes and 7 is a number, the result of adding 3 plus 4
    // Actual: 75

// EXERCISE 5

// Exercise 5 : Guess The Answers #2

// What is the output of each of the expressions below?

typeof(15);
console.log(typeof(15));
// Prediction: number, no quotes, it's not a string
// Actual: number

console.log(typeof(5.5));
// Prediction: same thing, number: is one of the possible values returned for the typeof expression re w3schools site.
// Actual: number

console.log(typeof(NaN));
// Prediction: number (not-a-number=NaN, but the Nan entity is classified as a number re w3schools because it's just the undefined numberical entity - still a number then)
// Actual: number

console.log(typeof("hello"));
// Prediction: string, probably not an object or function
// Actual: string

console.log(typeof(true));

// Prediction: boolean, true or false
// Actual: boolean

console.log(typeof(1 != 2));
// Prediction:  true boolean yes 1 is not equal to 2
// Actual: just boolean - asking the type not to execute the expression

console.log("hamburger" + "s");
// Prediction: hamburgers - the concat of the two
// Actual: hamburgers

console.log("hamburgers" - "s");
// Prediction: hamburger, take off the s
// Actual: nope, there is no minus in strings.  Nan is the result, to remind us that strings can't be subtracted from, only numbers can

console.log("1" + "3");
// Prediction: 13 the two strings are concatenated because they are in quotes they are strings
// Actual: 13

console.log("1" - "3");
// Prediction: Nan like hamburgers - s above
// Actual: Nope, it treated them like numbers since there was a doubt so -2

console.log("johnny" + 5);
// Prediction: johnny5 - concats them; or, could be Nan, rejecting the operator to be carried out on johnny with what is clearly a number
// Actual: johnny5 concatted them

console.log("johnny" - 5);
// Prediction: this time it will be no soap - NaN - no minus operator possible with the string
// Actual: NaN

console.log(99 * "hello");
// Prediction: Nan, there is no * operator for strings
// Actual: NaN

console.log(1 != 1);
// Prediction: the answer is a boolean, and it is false, but could be null too - it makes no sense, it's circular
// Actual: false
// SECOND QUESTION ASKED IN SUBMIT NOTES - can you expound,clarify on this and other statements like it in class, they seem to be so important for stopping processes and loops?

console.log(1 == "1");
// Prediction: the number 1 is not equivalent, equal to, the string 1.  So that would be true.
// Actual: true

console.log(1 === "1");
// Prediction: the number 1 has strict equality, including in type, to the string 1.  False because their types are different therefore strict equality (MDN site).
// Actual: false


// EXERCISE 6

// Exercise 6 : Guess The Answers #3

// What is the output of each of the expressions below?

console.log(5 + "34");
// Prediction: 534 per examples in previous exercises above, concatenation of number with string
// Actual: 534

console.log(5 - "4");
// Prediction: Nan can't execute the minus operator on a string because it's not a number (NaN)
// Actual: 1 - again, it treated the 4 like a number, is that kind of, "when in doubt, assume it's a number if it's a digit?"

console.log(10 % 5);
// Prediction: modulo operator, answer is 0, there is no remainder after dividing 10 by 5
// Actual:

console.log(5 % 10);
// Prediction: answer is .5 - hmmm... zero because there is no remainder?
// Actual: 5 

console.log("Java" + "Script");
// Prediction: JavaScript - concat of 2 strings
// Actual: JavaScript

console.log(" " + " ");
// Prediction: "  " - the concat of two spaces.  the concat of ""+"" would be two empty sets
// Actual:   

console.log(" " + 0);
// Prediction: a space plus 0 concatenated,  0
// Actual:  0

console.log(true + true);
// Prediction: NaN - there are no strings or numbers to operate + on
// Actual: 2 so maybe true = the value of 1?  That's the only way to get that.  Turns out false = 0 and true = 1, stack overflow.

console.log(true + false);
// Prediction: 1 because of the above
// Actual: 1

console.log(false + true);
// Prediction: same, commutative
// Actual: 1

console.log(false - true);
// Prediction: -1, 0-1 = -1
// Actual: -1

console.log(!True);
// Prediction: 1?  Got no clue
// Actual: Error message in browser:  "script.js:242 Uncaught ReferenceError: True is not defined at script.js:242:14"

console.log(3 - 4);
// Prediction: -1
// Actual: -1

console.log("Bob" - "bill");
// Prediction: NaN strings can be subtracted from eachother
// Actual: first console line is Nan, then another returning undefined

