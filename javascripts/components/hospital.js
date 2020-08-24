import dinosaurs from '../helpers/data/dinoData.js'

const buildHospital = () => {
  let graveyard = $('#graveyard').html('');
  const deadDinos = dinosaurs.filter(d => d ? d.isDead === true : false);
  
console.log(deadDinos)
console.log(graveyard)
}

export { buildHospital };
