import { printDinosaurs } from './helpers/utils.js';
import {buildHospital} from './components/hospital.js';
import { dinoData } from './helpers/data/dinoData.js'


console.log(dinoData.healthyDinos)


const init = () => {
  printDinosaurs('kennel', healthyDinos);
  //add Dinosaur function
  buildHospital()
};

init();
