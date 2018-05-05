const outputDiv = document.getElementById('pets');

const petString = (petsArray) => {
  let petString = '';
  petsArray.forEach((pets) => {
    switch (pets.type) {
      case 'cat':
        petString += `<div class="col-sm-4 cats">`;
        break;
      case 'dog':
        petString += `<div class="col-sm-4 dogs">`;
        break;
      case 'dino':
        petString += `<div class="col-sm-4 dinos">`;
        break;
    }
    petString += `<div class="panel panel-default card"><div class="panel-heading">`;
    petString += `<h2>${pets.name}</h2>`;
    petString += `</div>`;
    petString += `<div class="panel-body">`;
    petString += `<img class="pet-image" src="${pets.imageUrl}">`;
    petString += `<p class="center">${pets.color}<p>`;
    petString += `<p class="center">${pets.specialSkill}</p>`;
    petString += `</div>`;
    switch (pets.type) {
      case 'cat':
        petString += `<div class="panel-footer green">`;
        break;
      case 'dog':
        petString += `<div class="panel-footer blue">`;
        break;
      case 'dino':
        petString += `<div class="panel-footer red">`;
        break;
    }
    petString += `<p class="center">${pets.type}</p>`;
    petString += `</div>`;
    petString += `</div>`;
    petString += `</div>`;
  });
  return petString;
};

const printToDom = (petsArray) => {
  outputDiv.innerHTML = petString (petsArray);
};

module.exports = printToDom;
