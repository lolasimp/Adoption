const allPets = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load',loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};

module.exports = allPets;
