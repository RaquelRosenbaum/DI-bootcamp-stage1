//Class notes:

// Review of XP exercise from day4
//DOESN"T WORK _ NEEDS REVIEW***************
// #4 My Book List

// after adding the div to the html:
const allbooks = [{
    title: "Harry Potter"
    author: "JKRowling"
    image: "https.yadayada"
    alreadyRead: true
},
{
    title: "War and Peace"
    author: "somebody"
    image: "https.yadayada"
    alreadyRead: false
}
];

// we make a loop for everything except the table lines etc. But for the other changes we can use the loop to automate.

// the following is global scope (only have to make the box once)
const container-document.querySelector(".listBooks");
const table=document.createElement("table");
//have to create headers outside the loop:
const tr=document.createElement("tr");
const th1=document.createElement("th1");
const th2=document.createElement("th2");
const th3=document.createElement("th3");
container.append(table);//append the table to the container
tr.append(th1, th2, th3);
table.append(tr);
//append child you can only append one element, append is more flexible
th1.innerText="Title";
th2.innerText="Author";
th3.innerText="Image";

//the following is local scope
for (let element of AllBooks) {
    const bookTr=document.createElement("tr");
    const td1=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const img=document.createElement("img");

    td1.innerText=element.title;
    td2.innerText=element.author;
    img.setAttribute("src",element.image);
    img.style.width = "100px";

    td3.append(img);
    bookTr.append(td1,td2,td3);
    table.append(bookTr);
    if(element.alreadyRead)  {
        bookTr.style.color="red"
    } 
    //don't have to ask if alreadyRead is true - if false it doesn't execute

}