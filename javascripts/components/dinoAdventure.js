import { printDinosaurs } from '../helpers/utils.js';
import dinoData from '../helpers/data/data.js';

const dinoAdventure = (index, item, array) => {
  let dinosaurs = array;
  let newAdventure = {};

  newAdventure = {
    time: Date(),
    adventure: randomDinoAdventure()
  }

  printDinosaurs(dinosaurs)
};
    
const randomDinoAdventure = () => {
 let adventures = dinoData.getAdventures();
    return adventures[Math.floor(Math.random() * adventures.length)];
}

export { dinoAdventure };
