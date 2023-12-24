The assignment is impossible for us to come up with on our own at this level of the class- I see it as an opportunity to learn more use cases, but completing this assignment on my own even with help from the internet or the video was impossible and would be for anyone in the class (we are not presumed to have any programming background).  That's fine if the expectation is that what we are submitting here is essentially our attempt, then understanding the solution and learning new patterns and use cases from it.  What is the expectation?  Can we talk about that in class?


// Instructions
// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

// ==============================
// Example
// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

// ==============================



// Prompt the user for a number to begin counting down bottles.

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,

//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect


// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.

MY ATTEMPT (futile though it be):
function BottlesBeerWall99() {
    const inpBottNumStrt = (Number(prompt("At what number bottle do you want to start the song? (1-99)")));
    if (isNaN(inpBottNumStrt)) {
        return alert("Sorry that is not a number, Goodbye")
        }
    else {continue;}
    const bottleNumber = inpBottNumStrt;
    return alert(`We start the song at ${inpBottNumStrt} bottles.`) 
    bottleNumber -= 1;
    return alert(`Take 1 down, pass it around, we have now ${bottleNumber} bottles on the wall`);
    return alert(`We now have ${inpBottNumStrt} bottles on the wall`)
    if (bottleNumber === 1) {
        return alert(`Take 1 down, pass it around, we have now ${bottleNumber} bottle on the wall`)
    }
    if (bottleNumber === 0) {
        return alert(`Take 1 down, pass it around, we have now no bottles on the wall`)
    }
}

// VERSION IN VIDEO:

// let numberOfBeers = Number(prompt("how many beers?"));
// let numberOfBeersToTakeAway = 1;


// function getUserInput() {
//     const answer = prompt("How many beers?");
//     if answer == "") return alert("Please enter a number");
//     return Number(answer);
// }
// while (numberOfBeers > 0) {
//     const stanza = makeStanza(numberOfBeers, numberOfBeersToTakeAway);
//     console.log(stanza);
//     // Instead of using this:  numberOfBeers = numberOfBeers - numberOfBeersToTakeAway; he refactored to this:  numberOfBeers -= numberOfBeersToTakeAway;
//     numberOfBeers -= numberOfBeersToTakeAway;
//     // Instead of using this: numberOfBeersToTakeAway = numberOfBeersToTakeAway + 1; he refactored to this: numberOfBeersToTakeAway++;
//     numberOfBeersToTakeAway++;
// }

// function makeStanza(num,counter) {
//     const bottleOrBottles = getBottleOrBottles(num);
//     const stanza = `${num} ${bottleOrBottles} of beer on the wall ${num} ${bottleOrBottles} of beer.
//     Take ${counter} down, pass it around, ${num-counter} ${getbottleOrBottles(num-counter)} of beer on the wall`;
    
//     return stanza;
// }
// function isPlural(num) {//is beginning fn name = boolean
//     if (num > 1) 
// }
// function getBottleOrBottles(num) {
//     // Instead of using this: // if (isPlural(num)) {
//     //     return "bottles";
//     // } else {
//     //     return "bottle";
//     // }
//     //He refactored to use ternary:  
//     return isPlural(num) ? "bottles" : "bottle";
// }

// ANOTHER EXAMPLE FROM THE INTERNET:

// function bottlesOfBeer(num) {
//     for (let i = num; i > 0; i--) {
//       let bottlesText = i === 1 ? 'bottle' : 'bottles';
//       let nextBottle = i - 1 === 1 ? 'bottle' : 'bottles';
  
//       console.log(`${i} ${bottlesText} of beer on the wall`);
//       console.log(`${i} ${bottlesText} of beer`);
//       console.log(`Take ${num - i + 1} down, pass${num - i + 1 === 1 ? ' it' : ' them'} around`);
//       console.log(`${i - 1 === 0 ? 'No more' : i - 1} ${nextBottle} of beer on the wall\n`);
//     }
//   }
  
//   // Prompt the user for a number to begin counting down bottles
//   const startingBottles = parseInt(prompt('Enter the number of bottles to start the song:'), 10);
  
//   // Call the function with the user's input
//   bottlesOfBeer(startingBottles);
  
// I can understand the example I got from the Internet, but coming up with it?  It looks a lot simpler and more elegant than the convoluted solution that the esteemed gentleman on the video came up with after 45 minutes of Work, and simpler to understand, but... Maybe we can talk through this in class, to see at our level how we might have come up with either of these examples?  

// Solution from Ziv in class (endless loop and doesn't do what assignment asks, DON'T implement will crash browser):

// let i = 99;
// let num = 1;

// while (i> 0) {
//     console.log(i + " bottles of beer on the wall");
//     console.log(i + " bottles of beer");
// }
// i = i - num;
// if(i<0) {
//     console.log("Take " + (num  + i)+ " down, pass it around");
//     console.log(0+" bottles of beer on the wall");
// }
// else if(num === 1) {
//     console.log("Take " + num + " down, pass it around");
// } else {
//     console.log("Take " + num + " down, pass it around");
// }

// num++;

