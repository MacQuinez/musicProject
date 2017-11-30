//Para que se ejecute el código cuando el documento esté cargado
// con esto me aseguro que todo está listo para funcionar
//Aqui van todos los eventos

$(document).ready(function() {
  //Declaro los jugadores pasando los parámetros que declaré en players.js

  var players = [
    new Player(0, 'Jugador1', 'img/playerone.png', 9, '#03a9f4'),
    new Player(1, 'Jugador2', 'img/playertwo.png', 8, '#8bc34a'),
    new Player(2, 'Jugador3', 'img/playerthree.png', 16, '#f44336'),
    new Player(3, 'Jugador4', 'img/playerfour.png', 17, '#ffc107')
  ];
  //Declaro las canciones pasando los parámetros que declaré en song.js

  var songs = [
    new Song('cancion1', 'album1', '1998', 'url'),
    new Song('cancion1', 'album1', '1998', 'url')
  ];

  //Instancio el juego ahora game es el juego.

  var game = new Game(players, songs);

  // Dando click al elemento con la clase player hago lo siguiente:
  // 1. Asigno a una variable el valor de su atributo data-id.
  //2.  Le paso esa variable al atributo players de la clase Game
  // definida en game.js y llamo a la función toggleStatus definida en main.js
  $('.player').click(function() {
    var playerId = $(this).attr('data-id');
    game.players[playerId].toggleStatus();
  });
  // Dando click al elemento con la clase turntable-container hago lo siguiente:
  //1. Ejecuto la función toggleClass y le paso la clase active para que la ponga o la qui
  $('.turntable-container').click(function() {
    game.startGame();
  });

  //Evento para controlar el pulsado de tecla, le paso el parametro key
  //y le pido el keyCode
  $(document).keydown(function(key) {
    if (game.status === 'play') {
      for (let i = 0; i < game.players.length; i++) {
        if (
          game.players[i].keyCode == key.keyCode &&
          game.players[i].playerStatus == 'enabled'
        ) {
          $('.turntable-container').removeClass('active');
          $('#answer').addClass('answer-container');
          $('#answer').append(` 
          <div class="answer-elements" >
              <img src="${game.players[i].avatar}" alt="">
              <p>Título de la Canción</p>
              <div class="title">
                  <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </p>
                  <button></button>
              </div>
          </div>
        `);
        }
      }
    }
  });
});
