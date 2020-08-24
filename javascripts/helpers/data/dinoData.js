const dinosaurs = [
  { 
    name: 'Zoe Ames', 
    image: '/images/trex.jpg',
    age: 15,
    type: 'T-Rex',
    owner: 'Abbey Brown',
    isHealthy: true,
    isDead: false 
  },
  { 
    name: 'Peter', 
    image: '/images/trex.jpg',
    age: 15,
    type: 'T-Rex',
    owner: 'Abbey Brown',
    isHealthy: false,
    isDead: false 
  },
  { 
    name: 'Harold', 
    image: '/images/trex.jpg',
    age: 15,
    type: 'T-Rex',
    owner: 'Abbey Brown',
    isHealthy: false,
    isDead: true 
  }]


const healthyDinos = () => {dinosaurs.filter((d) => d.isHealthy === true)};
console.log(healthyDinos())

const sickDinos = () => {dinosaurs.filter((d) => d.isHealthy === false)};

const deadDinos = () => {dinosaurs.filter((d) => d.isDead === true)};

export default {healthyDinos}
