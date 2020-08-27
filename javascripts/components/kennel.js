import dinoData from '../helpers/data/dinoData.js';
import {printDinosaurs} from '../helpers/utils.js'


const buildKennel = (dino) => {
  let healthyDinos = [];

if (dino !== undefined) {
healthyDinos = dinoData.healthyDinos;
healthyDinos.push(dino)

printDinosaurs("#healthy", healthyDinos);
printDinosaurs("#hospital", dinoData.sickDinos);
printDinosaurs("#graveyard", dinoData.deadDinos);
} else {

printDinosaurs("#healthy", dinoData.healthyDinos);
printDinosaurs("#hospital", dinoData.sickDinos);
printDinosaurs("#graveyard", dinoData.deadDinos);

}
}

export default { buildKennel };
