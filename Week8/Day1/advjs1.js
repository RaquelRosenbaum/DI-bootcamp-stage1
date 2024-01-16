/** functions */

// let messgaes = showMessage("mmm", "aaa");
// /** declare */
// function showMessage(val1, val2) {
//   /** do somthing */
//   return { msg1: val1, msg2: val2 };
// }

// // console.log(messgaes["msg1"],messgaes["msg2"]);
// /** bind */

// /** exprestion */
// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(3, 5));

// /** arrow function */
// const hello = (val) => {
//   return val;
// };
// console.log(hello("dddd"));

/** default values  */
// function sum(a = 1, b = 10) {
//   return a + b;
// }

// let sumAB = sum(7);
// console.log(sumAB);

/** block scope */
// const x = 5;
// {
//     let x = 10;
//     x=7
//     console.log(x);
// }
// // x = 10
// console.log(x);
// let x = 10
// function sum(){
//    let x = 5
//    console.log(x);
// }
// sum()
// console.log(x);

// for(let i = 0; i < 5; i++) {

// }

// console.log(i);

// function x() {
//     let y = 7;
//     let y = 1;
//     console.log(y);
// }

// x()
// const a = 6;

// // a = 8;

// console.log(a);

/** ternary operator */
// let a = 9;
// // let c;
// if (a == 8) {
//   // c = 10;
// } else {
//   // c = 5;
// }
// // console.log(c);
// let b = 4;
// let d = 0;
// //        true        false
// let c = (a == 9) ? !(d == 0) ? -10 : -20 : b == 5 ? 8 : -1;
// console.log(c);

// console.log( (true) ? 10 : 5 )

/** template string */
// let name = 'John'
// let email = 'jjj@gmail.com';

// console.log('Name: ' + name + '\nEmail:' + email);

// console.log(`Name: ${name}
// Email:${email}`);

/** forEach */
// let arr = ["John", "Marry", "Dan", "Anne", "Jacob"];
// arr.forEach((elemnet, indx, arr) => {
//   //   console.log(item, indx);
//   if (indx == 0) arr[indx] = "ggg";
// });

// console.log(arr);

/** some */
// let retsult = arr.some((value) => {
//   return value == "Dan";
// });
// console.log(retsult);

// /** every */
// let retsult2 = arr.every((value) => {
//   return value != "Dan";
// });
// console.log(retsult2);

let b = 3, d = b, u = b;

const tree = ++d * d*b * b++ +
 + --d+ + +b-- +
 + +d*b+ +
 u

console.log(tree); // 163

(4 * 4 * 3 * 3) + 3 + 4 + (3 * 3) + 3;