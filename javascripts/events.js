const buildPets = require('./dom.js');

const addEventListeners = (petArray) => {
    const selectcats = document.getElementById('cat');
    // const selectdogs = document.getElementById('dog');
    // const selectdinos = document.getElementById('dino');
};

selectcats.addEventListener('click', () => {
    filterPets('cat');
  });


const addPetsEvent = () => {
  for(let i = 0; i < petCards.length; i++);
  petCards[i].addEventListener('click', e)
};


module.exports = addEventListeners;