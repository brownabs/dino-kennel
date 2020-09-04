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
      title: 'Fighting',
      healthHit: 40
    },
    { id: 'adventure2',
    title: 'Hiking',
    healthDeduction: 15
  },
  { id: 'adventure3',
  title: 'Running',
  healthDeduction: 30
  },
  { id: 'adventure4',
  title: 'Playing',
  healthDeduction: 20
  },
  { id: 'adventure5',
  title: 'Getting lost',
  healthDeduction: 50
  },
  { id: 'adventure6',
  title: 'Singing',
  healthDeduction: 10
  },
  { id: 'adventure7',
  title: 'Swimming',
  healthDeduction: 50
  },
  ];

  const getDinosaurs = () => dinosaurs;
  const getAdventures = () => adventures

export default { getAdventures, getDinosaurs }
