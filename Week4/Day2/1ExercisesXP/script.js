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

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
const prices = {
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
const shoppingList = ["banana","orange","apple"];


function myBill() {
    let Subtotal = 0
    for (item of shoppingList)  {
        if (item in stock && stock[item] > 0) {
            const priceOfItem = prices[item];
            Subtotal = Subtotal + priceOfItem;
            Subtotal =  + 1;
        else {
            console.log("Sorry, "+stock[item]+" is out of stock");
        }
    }
}
return Subtotal;
}
myBill();