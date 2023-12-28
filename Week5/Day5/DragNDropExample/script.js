function onDragStart4PinkSquare(event) {
    console.log("start");
    event.dataTransfer.setData("text/plain", event.target.id)//store the address of the moved object in text form
    //name, target, etc. instead of id possible
    //dataTransfer is an object inside the event that stores the id of the element, the address of the element.  You need it because after the thing being dragged is dropped onto the other square, you need the ID to be appended to the new location, the orange square
}
function onDragEnd4PinkSquare(event) {
    console.log("end");
}
function onDrag4PinkSquare(event) {
    event.target.textContent = event.clientX + " " + event.clientY;
    //coords of the top left - this shows the coords on the square itself instead of just in the console
    //event.target is the element itself
}

//but we need to keep the address of the object being moved - global variable stores this - the event can store data inside it

function onDragOver4OrangeSquare(event){
    console.log("over orange");
    event.preventDefault();
}
//without this the browser won't let us drop the box into the orange square//

function onDrop4OrangeSquare(event) {
    console.log("drop");
    const id = event.dataTransfer.getData("text/plain");
    console.log(id);
    const pinkSquare = document.getElementById(id);
    console.log(pinkSquare);
    event.target.appendChild(pinkSquare);
}


//don't change the id for a DOM element unless you're really careful about it  because that messes everything up - you won't be able to find it

//event.target is the id of the orange square

//you can't drag it back because the original pink box isn't orange
//so:

function onDragStart4OrangeSquare(event) {
    console.log("start");
    event.dataTransfer.setData("text/plain", event.target.id)//store the address of the moved object in text form
    //name, target, etc. instead of id possible
    //dataTransfer is an object inside the event that stores the id of the element, the address of the element.  You need it because after the thing being dragged is dropped onto the other square, you need the ID to be appended to the new location, the orange square
}
function onDragEnd4OrangeSquare(event) {
    console.log("end");
}
function onDragOver4PinkSquare(event){
    console.log("over orange");
    event.preventDefault();
}

function onDropOver4PinkSquare(event) {
    console.log("drop");
    const id = event.dataTransfer.getData("text/plain");
    console.log(id);
    const orangeSquare = document.getElementById(id);
    console.log(orangeSquare);
    event.target.appendChild(orangeSquare);
}



//event.target is the id of the pink square