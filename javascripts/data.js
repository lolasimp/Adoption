const allPets = require('./pets');
const printToDom = require('./dom.js');
const events = require('./events');

let petsArray = '';

const loadPets = function () {
  petsArray = JSON.parse(this.responseText).pets;
  printToDom(petsArray);
  events();
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
