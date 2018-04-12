const outputDiv = document.getElementById('pets');

const petString = (petsArray) => {
  let petString = '';
  petsArray.forEach((pets) => {
    petString += `<div>`;
    petString += `<h2>${pets.name}</h2>`;
    petString += `<img src="${pets.imageUrl}">`;
    petString += `<p>${pets.color}<p>`;
    petString += `</div>`;
  });
  return petString;
};

const printToDom = (petsArray) => {
  outputDiv.innerHTML = petString (petsArray);
};

module.exports = printToDom;
