// setTimeout(function, delay) 5 * 1000

// function showMessage() {
//   console.log("Hello, after 2 seconds!!!");
// }

//showMessage();
// const id = setTimeout(showMessage, 5 * 1000);

// clearTimeout(id)

// setTimeout(function(){
//     console.log('hello again after 8 seconds!!!');
// },8 * 1000)

/**
 * Problem: Create a function that logs a countdown
 * from 5 to 1 in the console,
 * with each number displayed after a 1-second delay.
 */

// let count = 8;
// let id;
// function displayCount() {
//   console.log(count);
//   count--;
//   if (count >= 0) {
//     id = setTimeout(displayCount, 1000);
//   }
//   if (count === 3) {
//     clearTimeout(id);
//   }
// }
// displayCount();


/**
 * setInterval 
 * steInterval(function, intaval)
 */
// let indx = 0

// const id = setInterval(showMessage, 2000)

// function showMessage() {
//   indx++
//   console.log("Hello, after 2 seconds!!!" + indx);
//   if(indx === 5){
//     clearInterval(id)
//   }
// }

// function sameCounter(){
//     let count = 5;
//     const intervalId = setInterval(function(){
//         console.log("Counter value:" + count);
//         count--;
//         if(count <= 0) {
//             clearInterval(intervalId)
//         }
//     },1000)
// }
// sameCounter();