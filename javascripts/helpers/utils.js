import { dinoCard } from '../components/dinoCard.js';
import { deadDinoCard } from '../components/deadDinoCard.js';
import dinoActions from '../components/dinoActions.js';

const printDinosaurs = (array) => {
  $('#healthy').html('');
  $('#hospital').html('');
  $('#graveyard').html('');

    array.forEach((item, index) => {
        if (item.health >= 50){
            $('#healthy').append(dinoCard(item, index))
        } else if (item.health < 50 && item.health > 0) {
            $('#hospital').append(dinoCard(item, index))
        } else {
            $('#graveyard').append(deadDinoCard(item))
        }
        dinoActions.feedDinosaur(index, item, array);
        dinoActions.petDinosaur(index, item, array);
        // dinoActions.details(item, index);
        dinoActions.deleteDinosaur(index, array);     
    });
};

export { printDinosaurs };
