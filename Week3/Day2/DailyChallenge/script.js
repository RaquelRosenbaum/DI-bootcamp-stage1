// EXERCISE 1

// Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]


const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();
console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.push("Kiwi");
console.log(fruits);

fruits.splice(0,1);
console.log(fruits);

fruits.reverse();
console.log(fruits);


// EXERCISE 2 - Part I

// Using this array :

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// Access and then console.log “Oranges”.

moreFruits[0][0];
console.log(moreFruits);

// banana
        // apples - zeroth elem in banana
        //     oranges - zeroth elem in apples
        // blueberries - elem 1 in banana
// QUESTION FROM SUBMIT TEXT: so why isn't it [0,0,0]? Why doesn't banana as zeroth element of the array have to be the first index so there is 3 indexes?
//Answer:  

// From the lesson:
// You can create an array within an array:

//     let sampleArray = [
//         [1, 2, 5],
//         [7, 6, 10, 11, 12],
//         [3]
//     ]
// This created an array with a length of 3. If you want to get the number 11, you will access it as sample_array[1][3].