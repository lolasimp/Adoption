const addEventListeners = (petsArray) => {
  const selectcats = document.getElementById('cat-btn');
  const selectdogs = document.getElementById('dog-btn');
  const selectdinos = document.getElementById('dino-btn');
  // const resetBtn = document.getElementById('reset');

  selectcats.addEventListener('click', () => {
    filterPets('cats');
  });

  selectdogs.addEventListener('click', () => {
    filterPets('dogs');
  });

  selectdinos.addEventListener('click', () => {
    filterPets('dinos');
  });

  // resetBtn.addEventListener('click', () => {
  //   resetAll();
  // });

  // const resetAll = () => {
  //   petRestart(petsArray);
  //   resetBtn.classList.add('hidden');
  // };

  const filterPets = (animal) => {
    const cards = document.getElementsByClassName('col-sm-4');
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = 'none';
    };
    const card2 = document.getElementsByClassName(animal);
    for (let m = 0; m < card2.length; m++) {
      card2[m].style.display = 'block';
    };
  };
};

addEventListeners();

module.exports = addEventListeners;
