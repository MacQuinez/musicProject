//Para que se ejecute el código cuando el documento esté cargado
// con esto me aseguro que todo está listo para funcionar
//Aqui van todos los eventos

$(document).ready(function() {
  //Declaro los jugadores pasando los parámetros que declaré en players.js

  var _players = [
    new Player(
      0,
      'Player 1',
      'img/playerone.png',
      9,
      '#03a9f4',
      'img/jugador19.png'
    ),
    new Player(
      1,
      'Player 2',
      'img/playertwo.png',
      8,
      '#8bc34a',
      'img/jugador28.png'
    ),
    new Player(
      2,
      'Player 3',
      'img/playerthree.png',
      16,
      '#f44336',
      'img/jugador316.png'
    ),
    new Player(
      3,
      'Player 4',
      'img/playerfour.png',
      27,
      '#ffc107',
      'img/jugador427.png'
    )
  ];
  //Declaro las canciones pasando los parámetros que declaré en song.js

  var _songs = [
    new Song('R U Mine'.toUpperCase(), 'songs/R_U_mine.mp3', 0),
    new Song('La Mordidita'.toUpperCase(), 'songs/La_mordidita.mp3', 1),
    new Song('Brown Sugar'.toUpperCase(), 'songs/brown_sugar.mp3', 2),
    new Song('Space Oddity'.toUpperCase(), 'songs/space_oddity.mp3', 3),
    new Song('Jhonny be Goode'.toUpperCase(), 'songs/jhonny_goode.mp3', 4),
    new Song('Stairway to Heaven'.toUpperCase(), 'songs/starway_heaven.mp3', 5)
  ];
  //Instancio el juego ahora game es el juego.
  var game = new Game(_players, _songs, 1);
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
    $('.audioDemo').trigger('play');
  });

  //Evento para controlar el pulsado de tecla, le paso el parametro key
  //y le pido el keyCode
  $(document).keydown(function(key) {
    if (game.status === 'play') {
      for (let i = 0; i < game.players.length; i++) {
        if (
          game.players[i].keyCode === key.keyCode &&
          game.players[i].playerStatus == 'enabled'
        ) {
          //Igualo selectedPlayer a 'i' para guardar su indice y así poder utilizarlo en todo el
          //juego ya que se almacena en Game si no lo hiciera así al estar dentro de un ciclo for
          //no podría utilizarla en otro sitio que no sea ese
          game.selectedPlayer = i;
          game.pauseSong();
          game.showAnswerScreen();
        }
      }
    }
  });
  $('.answer-btn').click(function() {
    game.checkResponse();
  });
  $('#answer-ok button').click(function() {
    game.playSong();
  });
  $('#answer-error button').click(function() {
    game.resumeSong();
  });
  $('#winner button').click(function() {
    game.reset();
  });
});
