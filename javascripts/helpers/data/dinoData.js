const dinosaurs = [
  { 
    name: 'Zoe Ames', 
    image: '/images/trex.jpg',
    age: 15,
    type: 'T-Rex',
    owner: 'Abbey Brown',
    health: 25,
    isDead: false 
  },
  { 
    name: 'Peter', 
    image: '/images/trex.jpg',
    age: 15,
    type: 'T-Rex',
    owner: 'Abbey Brown',
    health: 75,
    isDead: false 
  },
  { 
    name: 'Harold', 
    image: '/images/trex.jpg',
    age: 15,
    type: 'T-Rex',
    owner: 'Abbey Brown',
    health: 100,
    isDead: true 
  }];

  const healthyDinos = dinosaurs.filter(d => d ? d.health > 75 : false);

  const sickDinos = dinosaurs.filter(d => d ? d.health <= 75 && d.health > 25 : true);

  const deadDinos = dinosaurs.filter(d => d ? d.health <= 25 : false);


export default { healthyDinos, sickDinos, deadDinos}
