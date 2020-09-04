const deadDinoCard = (item) => {
  let domString = 
      `<div class="card m-1" style="width: 25rem;">
          <img class="card-img-top" src="${item.image}" alt="${item.name}">
            <div class="card-body md-1 mt-1">
            <h5 class="card-title d-flex justify-content-center mt-1">${item.name}</h5>
            <div class="d-flex justify-content-center">
            <h2><i class="fas fa-skull-crossbones"></i></h2>
            <h2>DINO IS DEAD</h2>
            <h2><i class="fas fa-skull-crossbones"></i></h2>
            </div>
      </div>
    </div>`;

    return domString;
};

export { deadDinoCard };
