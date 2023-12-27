//3-2.  Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const changeIdAttribute = document.querySelector("div");
changeIdAttribute.getAttribute
changeIdAttribute.setAttribute

//3-3-1.  Create a new <li> tag (use the createElement method).


//3-3-2.  Create a new text node with “Logout” as its specified text.


//3-3-3.  Append the text node to the newly created list node (<li>).


//3-3-4.  Append this updated list node to the unordered list (<ul>), using the appendChild method.

//3-4.  Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
const addressDiv = document.getElementByID("navBar");
addressDiv.firstElementChild.textContent
lastElementChild.textContent