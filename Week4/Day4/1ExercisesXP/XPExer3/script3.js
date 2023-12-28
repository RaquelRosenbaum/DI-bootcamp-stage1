//3-2.  Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const changeIdAttribute = document.getAttributeById("navBar");//better to be more specific in case another div is added later so don't use querySelector("div")//
//navBar is the value of the attribute id ("id=navBar" so it's an attribute). getAttributeByID calls the id by its value, navBar, on the element div
changeIdAttribute.
changeIdAttribute.setAttribute("id","socialNetworkNavigation")//arguments required for setAttribute are name, newvalue.

//3-3-1.  Create a new <li> tag (use the createElement method).
const addressUl= document.getAttributeById("socialNetworkNavigation").getElementsByTagName("ul")[0];
const logOutLiElement = document.createElement("li"); //just create element without a text tag inside it

//3-3-2.  Create a new text node with “Logout” as its specified text.
const textNodeLogOutLi = document.createNewTextNode("Logout"); //just create the text node now, not appending it yet to the element so still referencing document, more generic

//3-3-3.  Append the text node to the newly created list node (<li>).
logOutLiElement.appendChild(textNodeLogOutLi);  //append child is used for this as well

//3-3-4.  Append this updated list node to the unordered list (<ul>), using the appendChild method.
addressUl.appendChild(logOutLiElement);

//3-4.  Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
const addressDiv = document.getElementByID("socialNetworkNavigation");
const addressFirstListItem = addressDiv.getElementByTagName("ul li").firstElementChild;
const textInFirstListItem = addressFirstListItme[0].textContent

const addressLastListItem = addressDiv.getElementByTagName("ul li").lastElementChild;
const textInLastListItem = addressLastListItme[0].textContent;
console.log("FirstListItem:",textInFirstListItem, "LastListItem:",textInLastListItem);