//1-1. Retrieve the div and console.log it
const letsSeePetesGrandParentsHouseTheDivContainer = document.getElementById("container");
    console.log(letsSeePetesGrandParentsHouseTheDivContainer);  // If we had used querySelector, we'd need the hash because it's an ID, but because we're using the method specific for Id's, we don't.    
//1-2. Change the name Pete to Richard:  
const arriveToPetesParentsHouse = letsSeePetesGrandParentsHouseTheDivContainer.getElementsByTagName("ul")[0]; // Take me to the index 0 item in the container, the first unordered list. That's Pete's parent's house.

const arriveToPetesRoom = arriveToPetesParentsHouse.children[1];//Take me to Pete's room, which in Pete's parent's house, is the second one, at index 1. There are two bedrooms, li's, in this ul, and this is the second one. The bedrooms are the children of the house, the ul these two li's are in. 

arriveToPetesRoom.textContent ="Richard"; 
// Now that we're in Pete's room, we can summarily declare that no, the name of his room is Richard, not Pete, thereby changing the innerHTML text, the name on the door.  Apparently Pete went off to college.  Hope it's good for a chuckle, it's helping me visualize.

//1-3. Delete the <li> that contains the text node “Sarah”. Similar to #2 so copy and modify.
const getTheAddressOfSarahsGrandParentsHouseTheDivContainer = document.querySelector("#container");
const arriveToSarahsParentsHouseByWayOfHerGrandParentsHouse = getTheAddressOfSarahsGrandParentsHouseTheDivContainer.getElementsByTagName("ul")[1]; //the second ul is at index 1 of the container, Sarah's parent house not Pete's parents house
const arriveToSarahsRoom = arriveToSarahsParentsHouseByWayOfHerGrandParentsHouse.children[1];
//Take me to Sarah's room in her parents house, her room is the second li in the ul house.  The first one of the children of Sarah's parent's house, is Sarah's room.
const demolishSarahsRoom = arriveToSarahsRoom.parentNode.removeChild(arriveToSarahsRoom); //apparently we decided to expand the back garden after Sarah went to the AirForce to become a General someday, so we turned to Sarahs House, the second ul list on this webpage, and called on it to removeChild, to demolish that room inside it.  Apparently the house is a smart transformer home that can remove its rooms at will (with the help of the Javascript robot).

//1-4. Change each first name of the li's inside the two <ul>'s, to your name.  We need to loop through the children of the container, which are Sarah's Parent's house and Pete's Parent's house, respectively.  Apparently each of them was renting out a bedroom, and there are new tenants, coincidentally both named Raquel.  Bit dodgy renting two rooms in adjacent houses!
const sAndPParentsHouses = document.getElementByTagName("ul"); //both ul lists, multiple, that's why we're looping through them instead of just getting the address
    for (i=0;i<sAndPParentsHouses.length; i++) {
        if (sAndPParentsHouses[i].children.length > 0){
        sAndPParentsHouses[i].children[0]= ("Raquel")
     } }
     //Alternatively:
    //  for (i=0;i<sAndPParentsHouses.length; i++) {
    //     if (sAndPParentsHouses[i].nodeType != 1){
    //         continue;
    //     }
    //     sAndPParentsHouses[i].innerHTML= ("Raquel")
    //  }
     //if the length of the array of the children (rooms) of sAndPParentsHouses is greater than 0 (the whole reason we are looping through them), then the zeroth element in each of them needs to have its textContent changed to Raquel, thereby changing the innerHTML, the name on the door, for each of them.



