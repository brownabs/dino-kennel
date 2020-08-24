import printDinosaurs from '../helpers/utils.js';
import dinosaurs from '../helpers/data/dinoData.js'


const buildGraveyard = () => {
  let graveyard = $('#graveyard').html('');
  const deadDinos = dinosaurs.filter(d => d ? d.isDead === true : false);

  deadDinos.forEach(dino => {
    graveyard.append(`<div class="card">
    <img src="${dino.img}" class="card-img-top" alt="${dino.name}">
    <div class"card-body">
      <h5 class="card-title">${dino.name}</h5>
    </div>
    </div>`)
  })
  printDinosaurs('graveyard', domString);
}

export default { buildGraveyard };
