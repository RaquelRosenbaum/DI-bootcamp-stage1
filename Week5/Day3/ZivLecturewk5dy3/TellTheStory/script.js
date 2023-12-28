const form = document.getElementById("libform");
const noun = document.getElementById("noun");
const adj = document.getElementById("adjective");
const person = document.getElementById("person");
const verb = document.getElementById("verb");
const place = document.getElementById("place");
const story = document.getElementById("story");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getAllInputsValues();
});

function getAllInputsValues() {
  if (!validateValueInput(adj.value) || 
      !validateValueInput(person.value)) {
    return;
  }
  const mystory = `In a ${adj.value} ${place.value}, ${person.value} 
        stumbled upon a peculiar ${noun.value}. Intrigued, 
        ${person.value} decided to ${verb.value} 
        the ${noun.value}. in the middle of 
        the ${adj.value} landscapes of 
        ${place.value}, 
        ${person.value} 
        embarked on an unforgettable journey,
        forever changed by the experience.`;
  story.innerText = mystory;
}

function validateValueInput(val) {
  if (val.trim().length === 0) {
    alert("Please enter a value");
    return false;
  }
  return true;
}
