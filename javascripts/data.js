const allPets = require('./pets');
const printToDom = require('./dom');

let petsArray = '';

const loadPets = function () {
  petsArray = JSON.parse(this.responseText).pets;
  printToDom(petsArray);
};

const noAnimals = function () {
  console.error('Oops!');
};

const bothLoadErrorToGrabAllXHR = () => {
  allPets(loadPets, noAnimals);
};

const getPets = () => {
  return petsArray;
};

module.exports = {
  bothLoadErrorToGrabAllXHR,
  getPets,
};
