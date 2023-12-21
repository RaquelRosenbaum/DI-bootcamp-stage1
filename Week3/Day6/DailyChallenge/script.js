// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

// HAD TO WATCH VIDEO AND OTHER SOURCES GIVEN FOR ASSIGNMENT BUT FOUND A DIFFERENT WAY TO DO IT ALSO, remembered "repeat" method from material on ES6:

// Single Loop:
// let stars= "🌟"
//     for (let i = 1; i<7; i++) console.log(stars.repeat(i));
    
// Nested Loop from Solution on video:
// for (let i = 0; i < 6; i++){
//     let numbStrs = i + 1
//     let dispStrs = ""
//     for (let j = 0; j < numbStrs; j++){
//         dispStrs = dispStrs + "🌟"
//     }
//     console.log(dispStrs)
// }
//Solution shown in class:
// for(let i = 0; i <= 6; i++) {
//         let star = ""
//         for(let x=0; x<i; x++) {
//                 star += "*"; //this is star = star + "*"
//         }
//         console.log(star);
// }
