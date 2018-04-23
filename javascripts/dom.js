const outputDiv = document.getElementById('pets');

const petString = (petsArray) => {
  let petString = '';
  petsArray.forEach((pets) => {
    petString += `<div class="col-sm-4 pet">`;
    petString += `<h2>${pets.name}</h2>`;
    petString += `<img class="pet-image" src="${pets.imageUrl}">`;
    petString += `<p>${pets.color}<p>`;
    if (pet.type === 'cats'){
    petString += `<h3 class="output"><>${pets.type}</h3>`;
    } else if (pet.type === 'dogs'){
      petString += `<h3 class="output">${pets.type}</h3>`;
    } else {
      petString += `<h3 class="output">${pets.type}</h3>`;
    }
    petString += `</div>`;
  });
  return petString;
};

const printToDom = (petsArray) => {
  outputDiv.innerHTML = petString (petsArray);
};

module.exports = printToDom;
