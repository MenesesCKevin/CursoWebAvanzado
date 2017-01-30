(function(){
  'use strict';
  angular.module("myApp",[]).controller("movieCtrl",movieCtrl); //nombre de aplicacion, dependencias de angular como se llama en htmt y como en java
  function movieCtrl(){
    var movie = this;
    //movie.nombre = [{'nombre': 'Luis', 'edad':20 },{'nombre' : 'Donaldo', 'edad': 23},{'nombre': 'Jorge', 'edad' : 21}];
    movie.collection = [
      {'img': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MDM4NTg0NV5BMl5BanBnXkFtZTcwNjI4MTczMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      'name': 'Una serie de eventos desafortunados',
      'cast':['Jim Carrey','Lemon Snickets', 'Los huerfanos'],
      'year': 2011,
      'caregoria':'fantasias'
      },
      {'img': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      'name': 'Residen Evil',
      'cast':['Milla Jocovich','Zombi 1', 'Zombi 2'],
      'year': 2017,
      'caregoria':'Zombi'
      },
      {'img': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY1000_SX675_AL_.jpg',
      'name': 'La la land',
      'cast':['Emma Stone','Ryñan Bostin', 'Reparto 1'],
      'year': 2017,
      'caregoria':'musical'
      },
      {'img': 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTVhMWQ5MDktMGE3OS00MjVlLWExZWYtMzY2MTg4ZGFiZDQ5L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX675_AL_.jpg',
      'name': 'Whiplash: Música y obsesión',
      'cast':['Miles Teller','J.K. Simmons', 'Melissa Benoist'],
      'year': 2014,
      'caregoria':'musical'
    },
    {'img': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
    'name': 'Interstellar',
    'cast':['Matthew McConaughey','Anne Hathaway', 'Jessica Chastain'],
    'year': 2014,
    'caregoria':'Accion'
    },
    {'img': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    'name': 'El lobo de Wall Street',
    'cast':['Leonardo DiCaprio','Jonah Hill', 'Margot Robbie'],
    'year': 2013,
    'caregoria':'Comedia'
    }
    ];
  }
})();
