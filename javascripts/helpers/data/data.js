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
    health: 0,
    isDead: true 
  }];

  const adventures = [
    { id: 'adventure1',
      title: 'Fighting',
      healthHit: 40
    },
    { id: 'adventure2',
    title: 'Hiking',
    healthHit: 15
  },
  { id: 'adventure3',
  title: 'Running',
  healthHit: 30
  },
  { id: 'adventure4',
  title: 'Playing',
  healthHit: 20
  },
  { id: 'adventure5',
  title: 'Getting lost',
  healthHit: 50
  },
  { id: 'adventure6',
  title: 'Singing',
  healthHit: 10
  },
  { id: 'adventure7',
  title: 'Swimming',
  healthHit: 50
  },
  ];

  const getDinosaurs = () => dinosaurs;
  const getAdventures = () => adventures

export default { getAdventures, getDinosaurs }
