const printDinosaurs = (divId, textToPrint) => {

  $(`#${divId}`).html(textToPrint);
};

export { printDinosaurs };
