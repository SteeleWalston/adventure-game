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
      key: 'pickachu',
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
    },
    {
      key: 'rockBadge',
      description: 'Rock Badge',
      prevent: 'Your pokemon type is weak against this gym\'s pokemon!'
    }
  ],
  doors: {
    // right: 'waterGym',
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
    },
    {
      key: 'waterBadge',
      description: 'Water Badge',
      prevent: 'Your pokemon type is weak against this gym\'s pokemon!'
    }
  ],
  doors: {
    left: 'rockGym'
  }

};

const flyingGym = {
  title: 'Flying Gym',
  image: '',
  description: 'Third match in, but now things are getting more difficult. You\'re up against flying-type pokemon.',
  items: [
    {
      key: 'ho-oh',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ho-oh.gif'
    },
    {
      key: 'flyingBadge',
      description: 'Flying Badge',
      prevent: 'Your pokemon type is weak against this gym\'s pokemon!'
    }
  ],
  doors: {
    left: 'fireGym',
    right: 'foyer'
  }

};

const fireGym = {
  title: 'Fire Gym',
  image: ' ',
  description: 'Things are heating up, those vulnerable to fire won\'t last long in this dojo.',
  items: [
    {
      key: 'charizard',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif'
    },
    {
      key: 'fireBadge',
      description: 'Fire Badge',
      prevent: 'Your pokemon type is weak against this gym\'s pokemon!'
    }
  ],
  doors: {
    right: 'flyingGym'
  }
};

const finalGym = {
  title: 'Final Gym',
  image: '',
  description: 'You\'ve arrived at your final destination, the final gym leader!.',
  items: [
    {
      key: 'moltres',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif'
    },
    {
      key: 'venasaur',
      image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif'
    }
  ],
  doors: {
    top:'theEnd',
    bottom:'foyer'
  }
};

const theEnd = {
  title: 'The End',
  image: '',
  description: 'You\'ve beaten the Elite Five!',
  items: [],
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