import { printDinosaurs } from "../helpers/utils.js";

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

const takeOnAdventure = (array, index) => {
  $(`#adventure-${index}`).click(() => {
    printDinosaurs(array);
  });
};

export default { feedDinosaur, petDinosaur, deleteDinosaur, takeOnAdventure };
