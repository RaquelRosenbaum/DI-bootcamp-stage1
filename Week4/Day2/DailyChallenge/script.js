// Illustration:
    // console.log("*********");
    // console.log("* Hello *");
    // console.log("* World *");
    // console.log("* in    *");
    // console.log("* a     *");
    // console.log("* frame *");
    // console.log("*********");

// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words
// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.

// ANSWER: this solution centers each word, to add complexity.  Problem is if there is an odd number of letters in the word - 4 spaces have to be put on one side, 3 on the other, so the stars on the right side for the words with an odd number of letters are one space too short compared with those that have an even number of letters, it zigzags because of this.  1 space needs to be added to the spaces function for words where length % 2 !==0 but where to put the if statement and get it to fall in to the order of operations in the forEach loop?

function framethewords() {
    //get the input
    const userInput = prompt("Please type a few words, no spaces, commas between the words");
    // console.log(userInput)
    //turn input string into array of strings so the longest word's length can be determined
    const words = userInput.split(",");
    //determine length of longest word in array of strings - map the length of each word in the array words and then apply the max method to determine the longest word: (arrow functions wait for the event handler to tell it when to run so can be used in asynchronous in response to button clicks or input field completions)
    const maxLength = Math.max(...words.map(word => word.length));
    // console.log the first row (this allows space for two stars on either side of the longest word in the next rows to come (so it needs to be 4 stars longer than the longest word):
    const firstRow = console.log("*".repeat(maxLength+4));
    //determine number of spaces that have to be put on either side of each word in the array to center each word,and then console.log those middle rows so that spaces is available to be used by the console.log:
    words.forEach(word => {
        const spaces = " ".repeat((maxLength - word.length)/2);
        const middleRows = console.log("* "+spaces+word+spaces+" *")});
        
    //then console.log the last row of stars:
    const lastRow = console.log("*".repeat(maxLength+4)); 
}
framethewords();



//_______________________
// solution on VIDEO :

// const answer = prompt("Type a few words separated by commas, using no spaces between words");

// const words = answer.split(",");

// const lenthOfLongestWord = getLengthOfLongestWord();

// displayRows(words, lengthOfLongestWord);

// function displayRows(words, lengthOfLongestWord) {
//     const delimiterRow = createDelimiterRow();
//     console.log(delimiterRow);
//     for (const word of words) {
//         displayWordWithStars(word, lengthOfLongestWord);
//     }
//     console.log(delimiterRow);
// }
// function displayWordWithStars(word, lengthOfLongestWord) {
//     const numberOfSpacesToAdd = lengthOfLongestWord - word.length + 1;
//     const emptySpaces = " ".repeat(numberOfSpacesToAdd);
//     console.log("* " + word + emptySpaces + "*");
// }
// function getLengthOfLongestWord() {
//     let lengthOfLongestWord = 0;
//     for (const word of words) {
//         const wordLength = word.length;
//         if (wordLength > lengthOfLongestWord) {
//             lengthOfLongestWord = wordLength;
//     }
// }
// return lengthOfLongestWord;
// }
// function createDelimiterRow() {
//     const NUMBER_OF_STARS_ON_SIDE = 4;
//     const numberOfStarsOnFirstRow = lengthOfLongestWord + NUMBER_OF_STARS_ON_SIDE;
//     return "*".repeat(numberOfStarsOnFirstRow);
// }

//____________________
// Another example from internet:
// function createFrame(words) {
//     // Find the length of the longest word
//     const maxLength = Math.max(...words.map(word => word.length));
  
//     // Create the top border of the frame
//     const topBorder = '*'.repeat(maxLength + 4);
  
//     // Create the frame content
//     const frameContent = words.map(word => `* ${word.padEnd(maxLength, ' ')} *`).join('\n');
  
//     // Display the frame
//     console.log(topBorder);
//     console.log(frameContent);
//     console.log(topBorder);
//   }
  
//   // Prompt the user for words
//   const userInput = prompt('Enter words separated by commas:');
//   const wordsArray = userInput.split(',').map(word => word.trim());
  
//   // Display the words in a frame
//   createFrame(wordsArray);
  

