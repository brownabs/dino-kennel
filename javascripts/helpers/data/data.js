const dinosaurs = [
  { 
    name: 'Zoe Ames', 
    image: '/images/trex.jpg',
    age: 15,
    type: 'T-Rex',
    owner: 'Abbey Brown',
    health: 25,
    isDead: false, 
    adventures: []
  },
  { 
    name: 'Peter', 
    image: '/images/trex.jpg',
    age: 15,
    type: 'T-Rex',
    owner: 'Abbey Brown',
    health: 75,
    isDead: false,
    adventures: []

  },
  { 
    name: 'Harold', 
    image: '/images/trex.jpg',
    age: 15,
    type: 'T-Rex',
    owner: 'Abbey Brown',
    health: 0,
    isDead: true,
    adventures: []
  }];

  const adventures = [
    { id: 'adventure1',
      type: 'Fighting',
      healthDeduction: 40
    },
    { id: 'adventure2',
    type: 'Hiking',
    healthDeduction: 15
  },
  { id: 'adventure3',
  type: 'Running',
  healthDeduction: 30
  },
  { id: 'adventure4',
  type: 'Playing',
  healthDeduction: 20
  },
  { id: 'adventure5',
  type: 'Getting lost',
  healthDeduction: 50
  },
  { id: 'adventure6',
  type: 'Singing',
  healthDeduction: 10
  },
  { id: 'adventure7',
  type: 'Swimming',
  healthDeduction: 50
  },
  ];

  const getDinosaurs = () => dinosaurs;
  const getAdventures = () => adventures

export default { getAdventures, getDinosaurs }
