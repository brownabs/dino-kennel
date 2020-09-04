import { printDinosaurs } from "../helpers/utils.js";
import { dinoAdventure } from './dinoAdventure.js'
import { dinoDetails } from "./dinoDetails.js";

const feedDinosaur = (index, item, array) => {
  $(`#feed-${index}`).click(() => {
    if (item.health >= 100) {
      alert("Dinosaur is at full health!");
    } else {
      item.health += 15;
      printDinosaurs(array);
    }
  });
};

const petDinosaur = (index, item, array) => {
  if (item.health >= 100) {
    alert("Dinosaur is at full health!");
  } else {
    $(`#pet-${index}`).click(() => {
      item.health += 10;
      printDinosaurs(array);
    });
  }
};

const deleteDinosaur = (index, array) => {
  $(`#delete-${index}`).click(() => {
    array.splice(index, 1);
    printDinosaurs(array);
  });
};

const detailsForDinosaur = (index, item) => {
  $(`#details-${index}`).click(() => {
      dinoDetails(index, item);
  });
}

const takeAnAdventure = (index, item, array) => {
  $(`#adventure-${index}`).click(() => {
    dinoAdventure(index, item, array)
  });
};


export default { feedDinosaur, petDinosaur, deleteDinosaur, takeAnAdventure, detailsForDinosaur };
