planetsOfTheSolarSystem = [{Name: Mercury,bckColor: Chartreuse}
    {Name: Venus,bckColor: Brown}, {Name: Earth,bckColor: Green}, {Name: Mars,bckColor: Red}, {Name: Jupiter,bckColor: Orange}, {Name: Saturn,bckColor: Yellow}, {Name: Uranus,bckColor: Cyan}, and {Name: Neptune,bckColor: Purple}];

planetsOfTheSolarSystem.forEach(planet => { //method similar to in XP question 3
    const divOfPlanet = document.createElement("div");
    divOfPlanet.classlist.add("planet");
    divOfPlanet.style.backgroundColor = divOfPlanet.bckColor;
});
//should have 8 divs now with class of "planet" and the loop also adds the color that has been listed in the array planetsOfTheSolarSystem

document.querySelector(".listplanets").appendChild(divOfPlanet); //append the 8 planet divs to the section with class "listplanets" 