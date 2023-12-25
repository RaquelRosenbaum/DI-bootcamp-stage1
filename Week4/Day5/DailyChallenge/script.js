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

// I got really close, where it was decreasing appropriately and looping however many times it needed to, and the only problem was it wasn't decreasing to zero, but I can't get back to that state. 3 hours wasted thrashing around with tiny changes.  With ArcGIS (truly ANCIENT backend) we used to say, "don't start down the path of guessing, you'll end up thinking it worked because you were standing on one leg and jumped 3 times"

function BottlesBeerWall99() {
    const bottleNumber = (Number(prompt("At what number bottle do you want to start the song? (1-99)")));//prompt user for starting bottleNumber
    if (isNaN(bottleNumber)) { //check that it's a number not string so can be used in operations
        return alert("Sorry that is not a number, Goodbye")
        }
    console.log(`We start the song at ${bottleNumber} bottles.  ${bottleNumber} bottles of beer on the wall, ${bottleNumber} bottles of beer,`) 
    //this first sentence of the song goes before the loop, bottleNumber not decreased yet
    
    for (let i = bottleNumber; i < 99; i--) {  //I need it to iterate until it's = 0.
        i = i - 1;// why isn't the i-- enough?
        if (i = 1) { //when i gets to 1, it implements this conditional
            console.log(`Take one, down, pass it around, 0 bottles of beer on the wall.`);
            return
            } 
        if (i = 0) { //IT NEVER ARRIVES to 0 to implement this conditional even if I try i=0 above
            console.log(`Now we've crashed this annoying song, and we've crashed the browser, da, da da, da da, da da,`);
            return
            } 
        console.log(`Take 1 down, pass it around,`); //also tried putting all these together in one, starting with "take one down"
        console.log(`${i} bottles of beer on the wall.`); 
        console.log(`${i}) bottles of beer on the wall`); 
        console.log(`${i} bottles of beer,`);
        
        //I tried while or if conditionals, didn't work
        //THIS WON"T ITERATE even with console.lot inside while or if statement (tearing hair out)
        //the words "take one down" are the event to signify when the decrease needs to happen
        
        //Why doesn't the loop just iterate a bunch of times before it gets around to the console.logs?  It's an engine running in the background, after all.  What's stopping it from iterating all the way to 1 (until it crashes into the conditionals below) before the first console log? 

        // why couldn't I replace i with bottlenumber?  I tried and it didn't work
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

