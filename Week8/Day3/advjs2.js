//16Jan2024 Notes

//ex from XP homework (#3 fortune teller)
// (function x() {
//   console.log('hello');
// })()
//because the above is wrappped in parens is a fn and it's a callback fn
// OR:

// ((numofchildren,parentsname,c,d) =>{
//   console.log('hello');
// })(3,'John & Mary',etc)

//if in DOM statement, the above goes inside the function;
// ((numofchildren,parentsname,c,d) =>{
//   console.log('hello');
//   document.getElementById('root').innerHTML = a + b + c + d;
// })(3,'John & Mary',etc);

//Logic problem for today:
//given n, take the sum of the digits of n.  If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
//This is only applicable to the natural numbers.
//Examples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// //some number input to the function 375, then array made of the digits 

// // MY ATTEMPT:
// const arrayOfDigits stringify(375)
// const firstArr = [3,7,5];

// const secondArr = firstArr.map((value, index, arr) => {
//     console.log(value); // each element
//     console.log(index); // each index
//     console.log(arr); // the firstArr (logged 4 times)
//     let firstAddition = return Sum(index);
//     if firstAddition.length >1 {
//       let secondArr = firstAddition.stringify
//       thirdArr = secondArr.map((value, index, arr) => {
//         console.log(value); // each element
//         console.log(index); // each index
//         console.log(arr);
//     }
// });

//ANSWER GIVEN IN CLASS:

// function oneDigit(num) {
//   let arr = new String(num).split('');
//   console.log(arr);
//   let sum = 0;
//   for(i in arr) {
//     sum += Number(arr[i])
//   }
//   if(sum<10){
//     return sum;
//     }
//     return oneDigit(sum);
//   }
// console.log(oneDigit(493193));

//Lecture on Array Methods
// Exercise:
//MY ATTEMPT:
// const firstArr = [1,2,3,4];
// const secondArr = firstArr.map((value, index) => return * 2);
// console.log(secondArr);


//ANSWER GIVEN:

//can do it with any kind of loop:

// function map(arr) {
//   arr.forEach((item,i,arr) => {
//     arr[i] = item * 2;
//   });
//   return arr;//return the original array because the fn changed the array
// }
// console.log(map(1,2,3,4));

//another ex
// function map(arr) {
//   let newArr = [];
//   for(item of arr){
//     newArr.push(item*2);
//   }
//   return newArr;
// }
// console.log(map([2,4,6,8]));

//the map method

// const arr = [1,2,3,4];
// const newArr = arr.map((item,index) => {
//   return * index);
// });
// console.log(newArr);

//Another example:
//let newArr = arr.map((item,index) =>item*index);
//console.log(newArr);

//make the emails out of the user names exercise:
// MY ATTEMPT:
// let users = ["eli", "adam", "anne"];
// let newArr = arr.map((item,index) =>item.concat("@gmail.com");
//
//ANSWER:
// let users = ["eli", "adam", "anne"];
// const emails = users.map(item => [
//   return{name:item,email:item + "@gmail.com"])
// console.log(emails);

//FILTER METHOD:
//want to filter an array of numbers to get only those greater than 3:
// function filter(arr) {
//   let newArr =[]
//   for(item of arr){
//     if(item > 3){
//       newArr.push(item)
//     }
//   }
//   return newArr;
// }
// console.log(filter([0,1,1,2,3,5,8]));

//the same thing copied, make sure this is exactly the same as above
// function filter(arr) {
//   let newArr = [];
//   for (item of arr) {
//     if (item > 3) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }
// console.log(filter([0, 1, 1, 2, 3, 5, 8]));

//let arr = [0,1,1,2,3,5,8]
//const newArr = arr.filter((item) => {
//   return item >3;
// });
// console.log(newArr);


//Exercise: use filter method for this: // /want names that include "o" in the name, case insensitive
// const arr = [
//   {id:1 ,name:'John', email: 'jjj@gmail.com'},
//   {id:1 ,name:'Mor', email: 'mmm@gmail.com'},
//   {id:1 ,name:'Mary', email: 'mary@gmail.com'},
//   {id:1 ,name:'Or', email: 'or@gmail.com'}
// ]

  //MYATTEMPT:
// function filter(arr) {
//   let newArr = [];
//     for (item of newArr) {
//     if (name.includes("o") {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }
// console.log(filter([{id:1 ,name:'John', email: 'jjj@gmail.com'},{id:1 ,name:'Mor', email: 'mmm@gmail.com'},{id:1 ,name:'Mary', email: 'mary@gmail.com'},{id:1 ,name:'Or', email: 'or@gmail.com'}]));

// ANSWER:
// const newArr = arr.filter(item => {
//   return item.name.toLowerCase().includes('o');  only if this line = true, then the function will return newArr
// });


// Exercise filter all employees older than 26:
// let employees = [
//       {
//           firstName: 'John',
//           lastName: 'Doe',
//           age: 27,
//           joinedDate: 'December 15, 2017'
//       },
  
//       {
//           firstName: 'Ana',
//           lastName: 'Rosy',
//           age: 25,
//           joinedDate: 'January 15, 2019'
//       },
  
//       {
//           firstName: 'Zion',
//           lastName: 'Albert',
//           age: 30,
//           joinedDate: 'February 15, 2011'
//       }
//   ];

// let older = employees.filter((employee) => { //employee here is item
//   return employee.age > 26;
// });
// console.log(older);

//this is a filter method:  can't do the above with map (map returns an array that must be the same size, same number of items in the array) 

//back to map:

//if we put the above items on the html, we can may through the employees:

// function render(arr) {
//   const html = employees.map((item)=> {
//     return '<div style="display:inline-block;border:1px" solid #000;margin:20px">
//       <h2>${item.firstName} ${item.lastName}</h2>
//       <h4>${item.name}</h4>\>
//       <p>${item.joinedDate}</p>
//     </div>';
//   });
//   console.log(html.join(''));//this turns it into a string to add it to the html
//   document.getElementById("root").innerHTML = html.join("");
// }
// render(employees);


//Another exercise:
//Create an function that get an array of Numbers as input
// * and return the sum of all numbers
// * For example:
// * Give this array [2, 5, 10,100]
// * result 117

function reduce(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
}
let arr = [2,5,10,100]
console.log(reduce(arr));


//Another way:

// function reduce(arr, num) {
//   let sum = num;
//   arr.forEach(element => {
//     sum += element;
//   });
//   return sum;
// }
// let arr = [2,5,10,100]
// console.log(reduce(arr,2));//start from 2

//ANOTHER:

// function reduce(arr, num) {
//   let sum = num;
//   arr.forEach(element => {
//     sum += element;
//   });
//   return sum;
// }
// let arr = [2,5,10,100]

// const sum = arr.reduce((total, item)=> {
//   return total + item
// }, 100)
// console.log(sum);