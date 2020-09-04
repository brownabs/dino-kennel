const dinoCard = (item, index) => {
  let domString = 
      `<div class="card m-1" style="width: 25rem;">
          <img class="card-img-top" src="${item.image}" alt="${item.name}">
            <div class="card-body md-1 mt-1">
            <h5 class="card-title d-flex justify-content-center mt-1">${item.name}</h5>
              <div class="progress mt-1">
              <div class="progress-bar" role="progressbar"  style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%
              </div>
            </div>
        <div class="card-body d-flex justify-content-center flex-row flex-wrap">
        <button type="button" class="btn btn-warning mt-1 m-1 p-3" style="width:7rem" id="feed-${index}"><i class="fas fa-apple-alt p-1"></i>Feed</button>
        <button type="button" class="btn btn-warning mt-1 m-1 p-3" style="width:7rem" id="pet-${index}"><i class="fas fa-heart p-1"></i>Pet</button>
        <button type="button" class="btn btn-warning mt-1 m-1 p-3" style="width:7rem" id="adventure-${index}"><i class="fas fa-running p-1"></i>Adventure</button>
        <button type="button" class="btn btn-warning mt-1 m-1 p-3" style="width:7rem" id="details-${index}"><i class="fas fa-info-circle p-1"></i>Details</button>
        </div>
        <div class="card-body d-flex justify-content-center">
        <button type="button" class="btn btn-danger m1" style="width:5rem" id="delete-${index}"><i class="fas fa-trash-alt p-1"></i></button>
      </div>
      </div>
    </div>`;

    return domString;
};

export { dinoCard };
