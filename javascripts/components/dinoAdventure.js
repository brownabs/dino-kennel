import { printDinosaurs } from '../helpers/utils.js';
import dinoData from '../helpers/data/data.js';

const dinoAdventure = (item, array) => {
  let newAdventure = {};

  newAdventure = {
    time: Date(),
    adventure: randomDinoAdventure()
  }

  if(item.health > 0) {
    item.health -= newAdventure.adventure.healthDeduction;
    item.adventures.push(newAdventure);
   }

  printDinosaurs(array)
};

const randomDinoAdventure = () => {
 let adventures = dinoData.getAdventures();
    return adventures[Math.floor(Math.random() * adventures.length)];
};

const adventureDisplay = (item) => {
  let adventures = item.adventures;
  console.log(adventures)

  adventures.forEach((adventure) => {

    $("#adventures").append(`
              <h6>Adventure ${adventure.adventure.type}</h6>
              <h6>Time of Adventure: ${adventure.time}</h6>
          `);
  });
};

export { dinoAdventure, adventureDisplay};
