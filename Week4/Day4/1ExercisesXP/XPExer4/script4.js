//4.2-3
allBooks = [
    {Title: War and Peace   
    Author: Tolstoy
    Image: https://books.google.co.il/books/publisher/content?id=zuKLCwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U2FKEtcbDYGiiUdu0nAIA1blEbLGg&w=1280
    AlreadyRead: True},
    {Title: Pride and Prejudice
    Author: Austen
    Image: https://books.google.co.il/books/content?id=alG_Ymyje4UC&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U0KBN1DqO5E2y9ezYat7ZPS1j9-dg&w=1280
    AlreadyRead: False}
];
//4.1
const bookinfoTableInDiv = document.createNewElement("table");//create the table for books inside the div

allBooks.forEach(book => {  //arrow function - watch out the parens goes at the end outside the curly and before the semicolon; iterates over all objectsin the allBooks array, thus accessing each book's info in turn to place those into the table
    const rows = document.createElement("tr");  // this creates the rows themselves 
    if (book.alreadyRead === true) {
        rows.style.color = 'red';}
    else(book.alreadyRead === false) {
        rows.style.color = 'green';  //green for already read is better
    }
  //the if else statement creates styling for all rows that are about to be created, according to whether the alreadyRead key in the array of objects called allBooks has a property of true or false.  

const bookTitleCell = document.createElement("td");
bookTitleCell.textContent = (`${book.Title}`); //this is the book in the arrow function and the key called Title that it is pulling from the array
rows.appendChild(bookTitleCell); //append the Title cell to the row

const bookAuthorCell = document.createElement("td");
bookTitleCell.textContent = (`${book.Author}`);//same thing but for Author
rows.appendChild(bookAuthorCell);//append the Author cell to the row
// so now we have the rows of an empty table assembled and the content inside cells, the Title and Author cells (columns) of that table, ready to be appended to the rows.  After that we have to append the rows to the table and then append the table to the div.

const bookImageCell = document.createElement("td"); //same thing but for Image, which has more goodies and styling it needs, like pulling the url and setting its width
const img = document.createElement("img");  //the image object itself must be instantiated inside the cell because it's not text
img.src = book.Image; //not text therefore don't need the `${} - 
img.style.width = "100px"; //it needs a specific width - styling just for the image itself not the cell it's in
bookImageCell.appendChild(img); //append the img object, the actual photo, to the cell - img not in quotes because it has already been instantiated as a variable
rows.appendChild(bookImageCell);//append the Image cell to the row, WITH THE img object inside it

bookinfoTableInDiv.appendChild(rows);//rows here is all the above rows which have already had cells appended to them
}); //all of the above cells and rows declarations are inside the forEach statement 

document.getElementById("div").appendChild(bookinfoTableInDiv);  //occurs outside the above forEach so we access normally from the beginning with document


