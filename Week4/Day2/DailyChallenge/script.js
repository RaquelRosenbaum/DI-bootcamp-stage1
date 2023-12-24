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


// Another example from internet:
function createFrame(words) {
    // Find the length of the longest word
    const maxLength = Math.max(...words.map(word => word.length));
  
    // Create the top border of the frame
    const topBorder = '*'.repeat(maxLength + 4);
  
    // Create the frame content
    const frameContent = words.map(word => `* ${word.padEnd(maxLength, ' ')} *`).join('\n');
  
    // Display the frame
    console.log(topBorder);
    console.log(frameContent);
    console.log(topBorder);
  }
  
  // Prompt the user for words
  const userInput = prompt('Enter words separated by commas:');
  const wordsArray = userInput.split(',').map(word => word.trim());
  
  // Display the words in a frame
  createFrame(wordsArray);
  