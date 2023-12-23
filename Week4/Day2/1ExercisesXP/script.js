// Exercise 1, Part I:

// Instructions:
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// Exercise 1, Part I:
//FUNCTIONS CORRECTLY:
// function infoAboutMe() {
//     console.log("My name is Raquel and I am 50 years old, I love to helicopter photography");
// }
// infoAboutMe("Raquel", 50, "helicopter photography");


// Exercise 1, Part II:

//FUNCTIONS CORRECTLY:
// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log("Your name is "+personName+", Your age is "+personAge+", Your favorite color is "+personFavoriteColor)
// }
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

//Exercise 2:
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.


//FUNCTIONS CORRECTLY:
// function calculateTip() {
//     let CheshbonTotal = parseFloat(prompt("What is the amount of the bill"));
//     let tipPercent;
//         if (isNaN(CheshbonTotal)) {
//             alert("Sorry that is not a number")
//             prompt("What is the amount of the bill")
//         }
//         if (CheshbonTotal<50) {
//             tipPercent=0.1;
//         }
//         else if (CheshbonTotal>=50 && CheshbonTotal<=200){
//             tipPercent=.15;
//         }
//         else {
//             tipPercent=.2;
//         }
//         const tipPortion=tipPercent*CheshbonTotal;
//         const totalWithTip=tipPortion+CheshbonTotal;
//         console.log("The Tip Amount is "+tipPortion.toFixed(2)+" and the Final Bill is "+totalWithTip.toFixed(2))
// }
// calculateTip();

// NOTE TO SELF:  REMEMBER THAT THE FINAL ELSE STATEMENT USUALLY DOESN"T NEED A CONDITION, and that there may be a calculation result, but check it, it may be trying to make do with what it has, which may be letters and numbers.  So where there is a calculation, need parseFloat to convert it and then if it's money, two places on the decimal with .toFixed(2) --- but, parseFloat will allow a NaN, so it will return "the amount is Nan" etc. if they input only letters.  So to prevent letters being fed to the calc portion, use isNan verification condition first thing in the conditionals

//Exercise 3:
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.


//FUNCTIONS CORRECTLY: WITH BONUS COMPLETED IN 10 SECONDS YAYYYYYY!!!!!
// function isDivisible(divisor) {
//     let sum=0;
//     for (let i=0; i<=500; i++)  {
//         if (i % divisor === 0) {
//             console.log(i);
//             sum += i;
//         }
//     }
//     let result = console.log("The sum of numbers divisible by "+divisor+" which are under 500 are: ", sum);
// }
// isDivisible(3);

//Exercise 4:

//Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1
 


//FUNCTIONS CORRECTLY:  Accessing and the += and -= stuff was the hardest

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  
// const prices = {
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }
// const shoppingList = ["banana","orange","apple"];

// function myBill() {
//     let Subtotal = 0
//     for (const item of shoppingList)  {
//         if (item in stock && stock[item] > 0) {
//             console.log("The price of "+item+" is "+prices[item]);
//             stock[item] = stock[item] - 1;
//             Subtotal = Subtotal + prices[item];
//             console.log(Subtotal);
//             console.log(stock);
            
//         }
//             else {
//             console.log("Sorry, "+stock[item]+" is out of stock");  //I want it to say "Sorry, apple is out of stock" not Sorry, 0 is out of stock"  but can't make this work.  I want the string that is the key for the value of the item we've been manipulating in this function, that is inside the object "stock".  Do I have to turn the original stock and price objects into arrays in order to access this?
//         }
//     }
// }
// myBill();

//Exercise 5:

// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true
 

// ANSWER:

// function changeEnough(itemPrice, amountsOfChange) {
//     const total = amountsOfChange.reduce((accumulator,currentValue) => accumulator + currentValue,0); 

//     if (total >= itemPrice) {
//         console.log("you have enough to buy the item")
//     }
//     else if (total <= itemPrice) {
//         console.log("you do not have enough money")
//         console.log(total)
//     }
// }
// changeEnough(8.00,[.05,.10,.25,.25,.50,.50,.50,.10]);

// Another version from the video (has the version of inputting numbers of each different kind of coin rather than value of coins - 
//
// function changeEnough(itemPrice, amountsOfChange) {
//     console.log("the item price is ",itemPrice);
//     const sum = calculateSum(amountsOfChange);
//     if (sum > itemPrice) {
//         console.log("you have enough money to purchase the item")
//         return true;
//     }
//     else {
//             console.log("you don't have enough");
//             return false;
//     }
// }

// function calculateSum(arr) {
//     let sum = 0;  
//     let numberOfCoins, coinValue;
//     for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {coinValue = 0.25}
//     else if (i === 1) {coinValue = 0.10}
//     else if (i === 2) {coinValue = 0.05}
//     else if (i === 3) {coinValue = 0.01}
//     numberOfCoins = arr[i];
//     console.log("you have ", numberOfCoins, "coins that have a value of "+coinValue)
//     sum += numberOfCoins * coinValue
    
//     }
//     console.log("total you have is ",sum);
//     return sum;
// }
// changeEnough(4.25, [25, 20, 5, 0 ]);

// Another Example of reduce:
// const topSix = [
//     { name: "Nigeria", position: "1st", points: 43 },
//     { name: "England", position: "2nd", points: 37 },
//     { name: "USA", position: "3rd", points: 35 },
//     { name: "South Africa", position: "4th", points: 30 },
//     { name: "Brazil", position: "5th", points: 27 },
//     { name: "Korea", position: "6th", points: 23 }
// ]
// const totalPoints = topSix.reduce((acc, currTeam) => acc + currTeam.points, 0);
// console.log(totalPoints)

// Another Example of reduce:
// const arr = [23, 34, 77, 99, 324];
// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

//Exercise 6:

// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

// ANSWER:

// function totalVacationCost() {

    // function hotelCost() { 
    //     let inputHotel = parseFloat(prompt("How many nights would you like to stay in the hotel?"));
    //     if (isNaN(inputHotel)) {
    //         alert("Sorry that is not a number. How many nights would you like to stay in the hotel?");}
    //     return inputHotel*140;}

//     function planeRideCost() {
//         let inputFlight = prompt("Choose a destination for your flight.");
//         if (!isNaN(inputFlight)) {
//         alert("Sorry that is not a destination. Choose a destination for your flight.")}
//         else if (inputFlight==="London") {
//             return 183;}
//         else if (inputFlight==="Paris") {
//             return 220;}
//         else {
//             return 300;}}

//     function rentalCarCost() {
//         let inputCar = parseFloat(prompt("How many days would you like to rent a car?"));
//         if (isNaN(inputCar)==true) {
//             alert("Sorry that is not a number. How many days would you like to rent a car?")}
//     else if (inputCar>10) {
//         return ((inputCar*40)*.05)+inputCar*40;}
//     else {
//         return inputCar*40;}}
    
//     let hotel=parseFloat(hotelCost());
//     let flight=parseFloat(planeRideCost());
//     let car=parseFloat(rentalCarCost()); 
//     let total = hotel+flight+car;
//     return total; 
// }
// totalVacationCost();

// Version from video:
// function totalVacationCost() {
//     let hotelAnswer;
//     let carAnswer;
//     let destination = "";

//     while (!includesNumbers(hotelAnswer)) {
//         hotelAnswer = prompt("How many nights would you like to to stay?");
// }
//     while (!includesNumbers(carAnswer)) {
//         carAnswer = prompt("How many days would you like to rent a car");
//     }
//     while (destination == "" || includesNumbers(destination)) {
//         destination = prompt("Where are you flying to?");
//     }
//     const carPrice = rentalCarCost(carAnswer);
//     const hotelPrice = hotelCost(hotelAnswer);
//     const planePrice = planeRideCost(destoination);

//     console.log("hotelPrice:", hotelPrice);
//     console.log("carPrice:", carPrice);
//     console.log("planePrice:", planePrice);

//     const totalPrice = carPrice + hotelPrice + planePrice;
//     console.log("totalPrice:",totalPrice);
// }
// totalVacationCost();

// function hotelCost(numberOfNights) {
//     const costPerNight = 140;
//     const totalPrice = Number(numberOfNights) * costPerNight;
//     return totalPrice;
// }
// function planeRideCost(destination) {
//     if (destination === "London") return 183;
//     if (destination === "Paris") return 220;
//     return 300;
// }
// function rentalCarCost(carAnswer) {
//     const dailyPrice = 40;
//     const numberOfDays = Number(carAnswer);

//     let discount = 0;
//     if (numberOfDays >= 10) discount = 0.05;

//     const totalPrice = dailyPrice * numberOfDays * (1-discount);
//     return totalPrice;
// }
// function includesNumbers(str) {
//     const regex = new RegExp(/\d/);
//     return regex.text(str);
// }