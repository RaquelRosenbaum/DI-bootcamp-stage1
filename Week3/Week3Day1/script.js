//console.log
// console.log("Hello World");
// console.log("This is day 1 of javascript");

//Variables
// let x = 3;
// console.log(x);

// let day1="now"

//camelcase
// let dayOfTheMonth = 10

//Keywords
// let x, y;

// let x = 5 + 6;
// x = 5 + 6;
// console.log(x);

// y = x * 10;
// let y = x * 10;
// console.log(y);

//DataTypes
//Strings
// console.log("Hello");
// console.log('Hello');

// let a = "Hello";
// let b = "World";
// let c = a + " " + b;
// console.log(c);

// console.log(
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur \
//   consequuntur ad, ratione quidem temporibus veniam assumenda debitis fugiat ipsum, in voluptatibus, minima nulla quasi sed modi! Quos aut amet atque ipsam, error, dolore libero qui aliquid, tempora fugiat deleniti numquam dolorum vitae architecto repudiandae voluptatibus harum. Dolores laborum a, tempore cumque ipsum consequatur accusamus ipsa molestiae asperiores  atque distinctio vel ullam quas dignissimos debitis, eaque nulla natus reprehenderit! Laborum, non beatae sint facere vel ipsa eveniet veniam! Pariatur voluptas repellat eveniet animi dolore minima deserunt. Deserunt quaerat omnis qui eos quidem, ipsa quas ex corrupti eaque vero libero corporis exercitationem?"
// );

//String Properties

// let longString =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur consequuntur ad, ratione quidem temporibus veniam assumenda debitis fugiat ipsum, in voluptatibus, minima nulla quasi sed modi! Quos aut amet atque ipsam, error, dolore libero qui aliquid, tempora fugiat deleniti numquam dolorum vitae architecto repudiandae voluptatibus harum. Dolores laborum a, tempore cumque ipsum consequatur accusamus ipsa molestiae asperiores  atque distinctio vel ullam quas dignissimos debitis, eaque nulla natus reprehenderit! Laborum, non beatae sint facere vel ipsa eveniet veniam! Pariatur voluptas repellat eveniet animi dolore minima deserunt. Deserunt quaerat omnis qui eos quidem, ipsa quas ex corrupti eaque vero libero corporis exercitationem?";

// let longStringLength = longString.length;
// console.log(longStringLength);

// let smallerString = "Hello , welcome to Javascript Day1";
// let smallerStringLength = smallerString.length;
// console.log(smallerString.length);

//String Methods
// let smallerString = "Hello , welcome to Javascript Day1";
// console.log(smallerString[34]);

// let str = "Hello Everyone, please say hello to the class.";
// let posUppercaseHello = str.indexOf("Hello");
// let posLowercaseHello = str.indexOf("hello");
// console.log("Hello Everyone, please say hello to the class.");
// console.log(posUppercaseHello);
// console.log(posLowercaseHello);

// console.log(str.substring(0, 5));

// console.log(str.substring(15));

// let uppercaseString = "HELLO THIS IS AN INTENSE STRING";
// // console.log(uppercaseString.length)
// console.log(uppercaseString.toLowerCase());
// let addressNumber = 19;
// console.log(addressNumber);
// let addressStreet = "Nitzana";
// let country = "Israel";

// let globalAddress = "I live in " + addressNumber + " " + addressStreet + " " + country;
// console.log(globalAddress);

//Numbers

// console.log("1" + 2);

// console.log(1 + 2);

// console.log(1 - 2);

// console.log(1 / 2);

// console.log(1 * 2);

//Number Methods

// let op = "me";
// console.log(isNaN(op));

// let num = 1;
// console.log(isNaN(num));
// isNaN(op);

// let op = 10.6789;

// console.log(op.toFixed(3));

// let op = 10;
// console.log(op + 1);
// console.log(op.toString() + 1);

// console.log(typeof op);

//Exercise 2
// let birthYear = 1997;
// let futureYear = 2025;
// let age = futureYear - birthYear;
// console.log("I will be " + (futureYear - birthYear) + " in " + futureYear);

//Boolean

// console.log(Boolean(typeof birthYear === "string"));

//Arrays
// let user1 = "John";
// let user2 = "Bill";
// let user3 = "Nancy";

// let users = ["John", "Bill", "Nancy"];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);

// let nestedArrays = [
//   [1, 2, 3],
//   [4, "hello", 6],
//   [7, 8, 9],
// ];
// console.log(nestedArrays);
// console.log(nestedArrays[1][1]);

// console.log(nestedArrays.length);

//Changing an element in an array:
// let colors = ["blue", "yellow", "green"];
// console.log(colors);
// colors[1] = "pink";
// console.log(colors);

//Array methods:
//Push and Pop
// let colors = ["blue", "yellow", "green"];
// console.log(colors);
// colors.push("orange");
// colors.push("red");
// console.log(colors);
// colors.pop();
// console.log(colors);

//Splice

// let colors = ["blue", "yellow", "green"];
// colors.splice(1, 1, "pink", "white", "black");
// console.log(colors);

// colors.splice(1, 0, "pink", "grey");
// console.log(colors);

//Slice-> Creates a new array
// let colors = ["blue", "yellow", "green", "pink"];

// let favorite = colors.slice(2);
// console.log(favorite);
// console.log(colors);

// let favorite2 = colors.slice(1, 3);
// console.log(favorite2);

//tostring
// let colorstring = colors.toString();
// console.log(colors);
// console.log(colorstring);

//Exercise3
// let pets = ["cat", "dog", "fish", "rabbit", "cow"];
// console.log(pets[1]);

// pets.splice(3, 1, "horse");
// console.log(pets);
// console.log(pets.length);

//User Interface Functions
//1 Alert
// console.log("before alert");
// alert("You are not authorized to enter");
// console.log("after alert");

//2 confirm

// let userAnswer = confirm("Are you over 18?");
// console.log(userAnswer);

//3 prompt

// let userAnswer = prompt("What is your username?");

// console.log("Welcome to the website " + userAnswer);
