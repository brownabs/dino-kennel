const printDinosaurs = (divId, array) => {
  $(divId).html('');
  array.forEach((dino) => {
    $(divId).append(
      `<div class="card m-1" style="width: 25rem;">
          <img class="card-img-top" src="${dino.image}" alt="${dino.name}">
            <div class="card-body md-1 mt-1">
            <h5 class="card-title d-flex justify-content-center mt-1">${dino.name}</h5>
              <div class="progress mt-1">
              <div class="progress-bar" role="progressbar" style="width: 20rem;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
              </div>
            </div>
        <div class="card-body d-flex justify-content-center flex-row flex-wrap">
        <button type="button" class="btn btn-warning mt-1 m-1 p-3" style="width:7rem"><i class="fas fa-apple-alt p-1"></i>Feed</button>
        <button type="button" class="btn btn-warning mt-1 m-1 p-3" style="width:7rem"><i class="fas fa-heart p-1"></i>Pet</button>
        <button type="button" class="btn btn-warning mt-1 m-1 p-3" style="width:7rem"><i class="fas fa-running p-1"></i>Walk</button>
        <button type="button" class="btn btn-warning mt-1 m-1 p-3" style="width:7rem"><i class="fas fa-info-circle p-1"></i>Details</button>
        </div>
        <div class="card-body d-flex justify-content-center">
        <button type="button" class="btn btn-danger m1" style="width:5rem"><i class="fas fa-trash-alt p-1"></i></button>
      </div>
      </div>
    </div>`
    );
  });
};

export { printDinosaurs };
