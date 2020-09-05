import { adventureDisplay } from './dinoAdventure.js'

const dinoDetails = (index, item) => {

  $("#dino-details").html(`
<div class="modal fade" id="dino-details-modal" tabindex="-1" role="dialog" aria-labelledby="dino-details" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="cart-items">
      <table class="table table-hover">
        <thead>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <div class="modal-body">
    <div id="" class="d-flex flex-column justify-content-between">
        <div id="">
            <img src="${item.image}" class="img-fluid w-75 m-1"  alt="${item.name}">
        </div>
        <div id="" class="mr-4 w-50 mb-2">
            <h1>${item.name}</h1>
            <h5>Type: ${item.type}</h5>
            <h5>Age: ${item.age}</h5>
            <h5>Owner: ${item.owner}</h5>
        </div>
        <div class="d-flex flex-column" id="adventures">
        <h2>Adventures</h2>
        </div>
  </div>
</div>
</div>`)

adventureDisplay(item)

};

export { dinoDetails }
