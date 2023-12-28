//2-1. Add a “light blue” background color and some padding to the <div>.
const mainDiv = document.getElementByTagName("div");
mainDiv.style.backgroundColor = "light blue";

//2-2. Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
document.getElementByTagName("div").children[0].style.display = "none";

//2-3.  Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
document.getElementByTagName("div").children[1].style.border = "thick solid #FF5733";

//2-4. Change the font size of the whole body.
const largeFontSize = document.getElementByTagName("div");
xlargeFontSize.style.fontSize = "x-large";