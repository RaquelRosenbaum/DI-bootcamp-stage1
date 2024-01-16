// let bankAmount = 1000;
// const VAT = 0.17;

// const details = [200, -100, 146, 167, -2900];

// details.forEach((item, index, arr) => {
//   arr[index] = arr[index] * (1 + VAT);
//   bankAmount += arr[index];
// });

// console.log(bankAmount);

/**
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this
exercise (but not y).
The input string will only consist of lower case letters
and/or spaces.

"The input string will only consist of lower case letters and"
 */
/*
function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of text) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("The input stng will only consist of lower case letters and"));
*/
// function x(a, b) {
//   return a + b;
// }
// console.log(x(3, 5));

// const x1 = function (a, b) {
//   return a + b;
// };
// console.log(x1(9, 8));

// const x3 = (a, b) => {
//   return a + b;
// };
// console.log(x3(1, 2));

/** nested functions */
// function x(age) {
//   let lastname = 'Cohen';
//   function y(name) {
//     let a = 10;
//     console.log("hello " + name + " " + lastname + " " + age);
//   }
// //   console.log(a);
//   return y;
// }

// let hi = x(26);
// hi('Dan');
// x(99)('John')

/** currying */
// const y = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };
// // console.log(y(5)(6));
// const VAT = 1.17;
// const y1 = (a) => (b) => a * b;
// // console.log(y1(5)(6));
// let productPlusVAT = y1(VAT);

// let p1 = productPlusVAT(100);
// let p2 = productPlusVAT(200);
// let p3 = productPlusVAT(300);
// console.log(p1, p2, p3);

/** compose */
// const x = (a, b) => {
//   return (c) => {
//     return a(b(c));
//   };
// };

// const x1 = (a, b) => (c) => a(b(c));

// const sum2 = (num) => num * 2;
// const sum = (num) => num + 1;

// let result = x1(sum2, sum)(6);
// console.log(result);

/** Object */
// let obj = {
//   age: 32,
//   email:'jjj@gmail.com'
// };
// let obj1 = new Object();

// // console.log(obj);
// // console.log(obj1);

// obj.name = "John";
// obj1.car = "Alfa";

// console.log(obj);
// // console.log(obj1);

// let nameObj = obj["name"];
// let ageObj = obj.age;
// console.log(nameObj, ageObj);

// /** destructuring */
// const { name, age, email } = obj;
// console.log(name, age, email);

/** Computed Properties / Dynamic key values */
// let objKey = "userage";
// let objName = "username";
// let obj = {
//   [objKey]: 32,
//   [objName]: "Dan",
// };
// console.log(obj);

/** Property Value Shorthand */
// const name = 'John';
// const age = 32;
// let obj = {
//     name,
//     age
// }
// console.log(obj);

// for(x in obj){
//     console.log(x, obj[x]);
// }
// let one;
// let two;

// let inputs = {}

// // function inputOne(e) {
// //     inputs.one = e.target.value;
// //     // console.log(one);
// // }

// // function inputTwo(e) {
// //     inputs.two = e.target.value;
// //     // console.log(two);
// // }

// function handleInput(e) {
//     inputs[e.target.name] = e.target.value
// }

// function handleSubmit(e){
//     e.preventDefault();
//     console.log(inputs);
// }
/** by value */
// let a = 5;
// let b = a;
// b++;
// console.log(a);
// console.log(b);

// /** by reference */
// let arr1 = [1, 3, 4];
// // let arr2 = arr1;
// let arr2 = [...arr1] // new
// let arr3 = [].concat(arr1); // old

// arr2[1] = 15;

// console.log(arr1);
// console.log(arr2);

// let obj1 = { a: 1, b: 5 };
// // let obj2 = obj1

// let obj2 = { ...obj1 }; // new
// let obj3 = Object.assign({}, obj1); // old

// obj2.b = 10;

// console.log(obj1);
// console.log(obj2);

let obj = {
  a: 5,
  b: {
    c: 4,
  },
};

let obj1 = { ...obj };
obj1.a = 10;
obj1.b.c = 11;

// console.log(obj);
// console.log(obj1);

// JSON
// [{"a":"value","b":12}]

let arr = [
    {name:"Dan",age:22},
    {name:"John",age:32},
    {name:"Marry",age:33},
    {name:"Anne",age:44},
]

console.log(arr);

let jsonArr = JSON.stringify(arr)

console.log(jsonArr);

let arrJson = JSON.parse(jsonArr);

console.log(arrJson);


const users = `[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
]`;


console.log(JSON.parse(users));