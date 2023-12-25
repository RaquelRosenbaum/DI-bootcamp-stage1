// The assignment is impossible for us to come up with on our own at this level of the class- I see it as an opportunity to learn more use cases, but completing this assignment on my own even with help from the internet or the video was impossible and would be for anyone in the class (we are not presumed to have any programming background).  That's fine if the expectation is that what we are submitting here is essentially our attempt, then understanding the solution and learning new patterns and use cases from it.  What is the expectation?  Can we talk about that in class?


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

// MY ATTEMPT 
function BottlesBeerWall99() {
    const inpBottNumStrt = (Number(prompt("At what number bottle do you want to start the song? (1-99)")));
    if (isNaN(inpBottNumStrt)) {
        return alert("Sorry that is not a number, Goodbye")
        }
    const bottleNumber = inpBottNumStrt;
    console.log(`We start the song at ${bottleNumber} bottles.`) //this alert goes before the loop, bottleNumber not decreased yet
    let bottleNumber = i;
    for (i = num; i > 0; i--) {
        //it then iterates once to decrease the number
        console.log(`Take 1 down, pass it around, ${bottleNumber} bottles on the wall`);//then this alert is given
        bottleNumber= bottleNumber - 1  //it iterates again
        console.log(`${bottleNumber} bottles of beer on the wall, ${bottleNumber} bottles of beer.`);  
        //bottlenumber is now one less than the previous console.log, in this entire sentence.
        
        //then loop and the console.logs associated with it start over

        if (bottleNumber === 1) { //when bottleNumber gets to 1, it implements this conditional
        console.log(`Take 1 down, pass it around, one bottle of beer on the wall`)
        }
        if (bottleNumber === 0) {//when bottleNumber gets to 0, it implements this conditional
        console.log(`Take 1 down, pass it around, zero bottles of beer on the wall`)
        }
}}
BottlesBeerWall99();



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
// bottlesOfBeer(34);
 

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

