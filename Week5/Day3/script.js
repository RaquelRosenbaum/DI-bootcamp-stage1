//notes on class week 5 day 3 

//DailyChallengeday2:

//Tell the Story

//noun, adj Etc aren't filled yet so there is no value yet
//so only get element not the value inside it
//see the notes from Ziv
//adj.value, place.value etc. inside the text of the story with `${}
//the values trimmed to ensure no value is in the field already when they enter an input - if statements in the function above the story text that has the placeholders mentioned above - see notes
//there are just as many if statements as values so make a function - validateValueInput(val) {
//     if(ValidityState.trim().length === 0) {
//         alert("please enter");
//         return false;
//     }
//     return true;
//     }
// }
//see notes
//there are two sets of ifs for the value, one to make a fn for validation, the other uses it inside the getAllInputsValues() { function}
//separate things wherever possible - one action one function
//

//Lecture on DOM for today: DOM animation - 
//use built-in methods to move something in the screen without........ garbledeegook he can't speak english

//timeout of the http session - set timer - you want the popup to close after 10 minutes - not true asynchronous but it's a delay of the function execution

//setTimeout(function,delay) 5*1000 - this is 5 seconds
//function showMessage () {
    // console.log("Hello, after 2 second!!!");
// }
// showMessage();  this executes it now
// setTimeout(showMessage,2*1000)  this executes it after 2 seconds
//setTimeout(function() {
    //console.log("hello again after 8 secs);
//},8*1000)
//these are both functions to delay for a time after you push the page refresh button, the arrow circle thing on the browser
//

//Exercise:
//countdown from 5 to 1 in the console, each number displays after 1 sec delay

// function showMessage () {
//     console.log("x");
//     } 
// //     
// //setTimeout(showMessage,1*1000);

// // ANSWER FROM CLASS:

// let count = 5;
// function displayCount() {
//     console.log(count);
// }
// displayCount();
// // this gets the number 5 not a Counter

//so

// let count = 5;
// let id;
// function displayCount() {
//     console.log(count);
//     count--; //it decreases - minus minus
//     if(count >= 0) {
//         setTimeout(displayCount, 1000) 
//         //want to delay this calling of the count so make it a setTimeout
//     }
// }
// displayCount();

//can also set timeout:
// const id = setTimeout(showMessage, 5*1000);
// clearTimeout(id); //this clears the timeout

// if(count ===3) {
//     clearTimeout(id)}
// }

//setInterval executes the interval again and again

// setInterval(function,interval)
//the interval is the number of seconds between messages.  clearInverval stops the message from repeating 
//more fucking garbledeegook - a delay is an interval, why would clearing the delay stop the loop?

// function sameCounter() {
//     let count = 5;
//     const intervalId = setInterval(function()
//     console.log("Counter value:" + count);
//     count--;
//     if(count <= 0) {
//         clearInterval(intervalId)
//     },1000)}
//     //need Id to clear it later
// sameCounter()

//making the red box go from left to right in the yellow box after clicking the ClickMe button above

//see photo from Tural's code scrnshot
//see notes from Ziv's solution

function myMove() {
    const elem = documen.querySelector('.inner');
    // console.log(elem); box to move
    let pos = 0;
    let id = setInterval(function() {
        if(pos >= 350) {
            clearInterval(id)
        }
        pos++;
        elem.style.left = pos + "px;" 
        elem.style.top = pos + "px";//if add this - will be diagonal
        // if just use up to here without the if statement the box will move off the yellow box to the right edge of the window
        
    }, 5); //this is 5milliseconds so not too slow
}

//what if you wanted to move the box differently, around all the edges, left to right to bottom right to left bottom back to upper left corner, or diagonally?

