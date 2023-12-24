// MY FUTILE FIRST ATTEMPT (the experienced programmer took 45 minutes of thrashing around to produce the code below from video, however it was invaluable watching it, to pick through it, understand each phase of its development, taking valuable notes).  But I had to find another way to gain the most from this exercise, so I analyzed and then played monkey see monkey do, since I couldn't on my own or with Google produce the whole product without eventually seeing the answer.
// ________________________
// MY ATTEMPT:
// function playTheGame() {
//     let yesnoplay = confirm("Do you want to play the game?")
//         if false {
//             alert("No problem, Goodbye."
//         } 
//         else {
//             let numbentrd = prompt("Enter a number between 0 and 10");
//             console.log(~~numbentrd)
//             if (isNan(entnum)=true ) {
//                 alert("Sorry Not a number, Goodbye");//use isNan not typeof
//             else if !(0<numbentrd<10)
//             else ()
//             let computerNumber = math.floor(math.random()*10);
//             }
//         }
    
//     }
// }
// function compareNumbers(userNumber,computerNumber) {
//     if (userNumber=computerNumber) {
//         alert("WINNER");
//     }
//     else if (userNumber>computerNumber) {
//         alert("Your number is bigger than the computer's, guess again");
//     }
//     else if (userNumber<computerNumber) {
//         alert("Your number is smaller than the computer's guess again")
//     }
//     x
//     else (// [counter of alerts here ]   numberentrd<3)
//     ("You are out of chances, better luck next time!");
// }

// ________________________
// VERSION FROM VIDEO:

function playTheGame() {
    const isUserReady = confirm("Do you want to play?")
    if (!isUserReady) return alert ("No problem, Goodbye") 
                // if isUserReady is false, user pressed the cancel button instead of yes button in prompt box
    let answer = prompt("Enter a number between 0 and 10")
    let numberOfTries = 0;
    const computerNumber = generateRandomNumber()
    while (Number(answer) != computerNumber) {
        numberOfTries = numberOfTries + 1
        if (numberOfTries === 3) return alert("Sorry, too many tries. The number was "+computerNumber)
        if (!isOnlyNumbers(answer)) return alert("Sorry not a number, Goodbye");
        if(!isBetweenZeroAndTen(Number(answer))) return alert("Sorry it's not a good number, Goodbye")
        
        let biggerOrSmaller = (Number(answer) > computerNumber) ? "bigger" : "smaller"
        alert("Your number is " + biggerOrSmaller + "than the computer's, guess again")
    answer = prompt("Enter another number")
    }
    const finalMessage = `WINNER!  The number was indeed ${computerNumber}.  You found in ${numberOfTries + 1} tries.`
    alert(finalMessage);
    }

function isOnlyNumbers(str) {
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
    }

function isBetweenZeroAndTen(number) {
    return number >= 0 && number <= 10
    }
function generateRandomNumber() {
    return Math.floor(Math.random() * 11)
    }

// ________________________
// NOTES ON VIDEO:  Things to review often
// He used `${}` (Javascript template literal) to avoid concatenation and this is important as it turns out because each + (therefore concat) in the Winner alert statement turns it back into a string.  

//it's very important to put return after an if statement, where that is an exit point from the function, otherwise the other prompts will continue asking them and the function will continue.

// he put "we are playing the game" at the top in order to be a check while coding to find out if the game is still running even after what was designed to be an exit point (return after the if statement)  plus relevant console.log's

//he pasted each small function that he built into the console to test it

//remember prompt will always return string even if you tried to coerce a number with specifying the parameter as a number 
    // function whatever(number)
    //so you must coerce the input to be a number and then check it with the regExp
    //number(answer)

//Math.random won't get that upper limit you set so if you are using round anyway, set the upper limit to 1 greater than what you need (in this case 11) 
//It's *11 on the function generateRandomNumber because? 
// from CodeCademy:  Math.random() * 5 + 1 returns any random number (including decimal values) between 1(inclusive) and 6(exclusive).  The function itself only generates from 0 to 1, that's why it has to be multiplied by 5 to get the upper limit and then add the number that will be the lower limit.

//what does the word return really mean?  Here he is using it like a command, "return regex.test(str)" but then in an if statement it's used like the word break.  Answer: Putting the keyword return before alert is how the curly braces go away - action word needed if you refactor
//THis: if (!isUserReady) return alert ("No problem, Goodbye") is an example of refactoring to reduce the number of lines in the code, so it's tidier and easier to read - he removed the curly braces from this if statement.  He never puts the ; after each statement that ends an action, maybe javascript's ability to mistader, like with "2" assuming it's a number?  

// This: let biggerOrSmaller = (Number(answer) > computerNumber) ? "bigger" : "smaller"
    //is a ternary operator - kind of takes the place of an if else statement set.  if the answer is bigger than computerNumber insert the word "bigger".  Else insert the word after the colon, "smaller" THe ? is an operator for this

//The winner statement gives the number of tries plus 1 because of course the computer is counting from zero, so if they guessed in one try it will say they got it in 0 tries, hence +1

// ________________________
//MONKEY SEE MONKEY DO:  NOW FROM MEMORY TRY TO REPRODUCE WHILE JUST LOOKING AT INSTRUCTIONS:
    // I changed it to try to use the compareNumber function instead of using the elements of that inside the while statement in the main function
function playTheGame() {
    let numberOfTries = 0;
    const isUserReady = confirm("Would you like to play the game?");
        if (!isUserReady) return alert("No problem, Goodbye");
    const userNumber = prompt("Please enter a number between 0 and 10");  
    const computerNumber = generateNumber();
        while userNumber != computerNumber {
            numberOfTries += 1;
            if (!isOnlyNumbers(userNumber)) return alert("Sorry not a number, Goodbye");
            if (!isBetw0and10(number(userNumber))) return alert("Sorry it's not a number between 0 and 10, Goodbye");
            if numberOfTries === 3 return alert("You used your 3 Chances, you lost the game")
            function compareNumbers(userNumber,computerNumber) {
                if userNumber > computerNumber return alert("Your number is bigger than the computer's, guess again");
                if userNumber < computerNumber return alert("Your number is smaller than the computer's, guess again");
                if userNumber === computerNumber return alert("Winner!");
        alert("Please enter another number")
        }}

function generateNumber() {
    return math.round(math.random()*11);}  
function isOnlyNumbers(str) {
    const regex = new RegExp(/^[0-9]*$/);
    return regex.text(str);}
function isBetw0and10(number) {
    return number >= 0 && number <=10;}

}

// The goal is to walk in to a coding interview 7 months from now and without searching anything, without copy/paste of templates from the internet, have the in-depth understanding to identify the patterns and typical use cases and then cold code – therefore passing the interview.  Do what the guy in the video did, in other words.