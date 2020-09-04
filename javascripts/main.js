import data from './helpers/data/data.js';
import { makeDino } from './components/makeDino.js';
import { printDinosaurs } from './helpers/utils.js';

const init = () => {
makeDino();
printDinosaurs(data.getDinosaurs());
};

init();
