import { printDinosaurs } from './helpers/utils.js';
import hospital from './components/hospital.js';
import graveyard from './components/graveyard.js'
import dinoData from './helpers/data/dinoData.js';
import kennel from './components/kennel.js';


const init = () => {
kennel.buildKennel(dinoData.healthyDinos);
hospital.buildHospital(dinoData.sickDinos);
graveyard.buildGraveyard(dinoData.deadDinos);

};

init();
