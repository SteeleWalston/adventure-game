const exterior = {
  title: 'Elite Four Gym',
  image: '',
  description: 'It all comes down to this, the final frontier of your pokemon journey. The Elite Five!',
  items: [],
  doors: {
    top: 'foyer'
  }
};

const foyer = {
  title: 'Main Hall Foyer',
  image: '',
  description: 'You enter the main hall, in front you see the front-registration desk where you will select your pokemon and begin battling.',
  items: [
    {
      key: 'squirtle',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
      pokemon: true
    },
    {
      key: 'bulbasaur',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
      pokemon: true
    },
    {
      key: 'hitmonlee',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif',
      pokemon: true
    },
    {
      key: 'pikachu',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif',
      pokemon: true
    }
  ], 
  doors: {
    top: 'finalGym',
    left: 'flyingGym',
    right: 'rockGym',
    bottom: 'exterior'
  }

};

const rockGym = {
  title: 'Rock Gym',
  image: '',
  description: 'You face your first opponent who specializes in Rock-Type Pokemon, choose your pokemon and begin to battle.',
  items: [
    {
      key: 'onyx',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif',
      pokemon: true
    },
    {
      key: 'rockBadge',
      description: 'Rock Badge',
      prevent: 'Your pokemon type is weak against this gym\'s pokemon!'
    }
  ],
  doors: {
    left: 'foyer'
  },
  use(item) {
    if(item.key === 'bulbasaur') {
      const badge = this.items.find(item => item.key === 'rockBadge');
      if(!badge) return;
      
      delete badge.prevent;
      this.doors.right = 'waterGym';
      
      return `You beat the rock gym!.
       Click the badge to add to your inventory.`;
    }
  }
};

const waterGym = {
  title: 'Water Gym',
  image: '',
  description: 'You leave the Rock Gym victorious and enter your second match against a an elite Water pokemon trainer. Stay vigilant!',
  items: [
    {
      key: 'horsea',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif',
      pokemon: true
    },
    {
      key: 'waterBadge',
      description: 'Water Badge',
      prevent: 'Your pokemon type is weak against this gym\'s pokemon!'
    }
  ],
  doors: {
    left: 'rockGym'
  },
  use(item) {
    if(item.key === 'pikachu') {
      const badge = this.items.find(item => item.key === 'waterBadge');
      if(!badge) return;
      
      delete badge.prevent;
      
      return `You beat the water gym!.
       Click the badge to add to your inventory.`;
    }
  }

};

const flyingGym = {
  title: 'Flying Gym',
  image: '',
  description: 'Third match in, but now things are getting more difficult. You\'re up against flying-type pokemon.',
  items: [
    {
      key: 'ho-oh',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ho-oh.gif',
      pokemon: true
    },
    {
      key: 'flyingBadge',
      description: 'Flying Badge',
      prevent: 'Your pokemon type is weak against this gym\'s pokemon!'
    }
  ],
  doors: {
    right: 'foyer'
  },
  use(item) {
    if(item.key === 'hitmonlee') {
      const badge = this.items.find(item => item.key === 'flyingBadge');
      if(!badge) return;
      
      delete badge.prevent;
      this.doors.left = 'fireGym';
      
      return `You beat the flying gym!.
       Click the badge to add to your inventory.`;
    }
  }

};

const fireGym = {
  title: 'Fire Gym',
  image: ' ',
  description: 'Things are heating up, those vulnerable to fire won\'t last long in this dojo.',
  items: [
    {
      key: 'charizard',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
      pokemon: true
    },
    {
      key: 'fireBadge',
      description: 'Fire Badge',
      prevent: 'Your pokemon type is weak against this gym\'s pokemon!'
    }
  ],
  doors: {
    right: 'flyingGym'
  },
  use(item) {
    if(item.key === 'squirtle') {
      const badge = this.items.find(item => item.key === 'fireBadge');
      if(!badge) return;
      
      delete badge.prevent;
      
      return `You beat the fire gym!.
       Click the badge to add to your inventory.`;
    }
  }
};

const finalGym = {
  title: 'Final Gym',
  image: '',
  description: 'You\'ve arrived at your final destination, the final gym leader!.',
  items: [
    {
      key: 'venasaur',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif'
    }
  ],
  doors: {
    bottom:'foyer'
  },
  use(item) {
    if(item.key === 'charizard') {
      this.doors.top = 'theEnd';
      
      return `You beat the final gym!.
       Move Onwards!.`;
    }
    return 'You\'re pokemon is weak against this type';
  }
};

const theEnd = {
  title: 'The End',
  image: '',
  description: 'You\'ve beaten the Elite Five!',
  items: [
    {
      key: 'mewtwo',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif'
    }
  ],
  doors: {
    bottom: 'finalGym'
  }
};

export const rooms = {
  exterior,
  foyer,
  rockGym,
  waterGym,
  flyingGym,
  fireGym,
  theEnd,
  finalGym

};

export const start = exterior;