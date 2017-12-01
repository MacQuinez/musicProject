//Para que se ejecute el código cuando el documento esté cargado
// con esto me aseguro que todo está listo para funcionar
//Aqui van todos los eventos

$(document).ready(function() {
  //Declaro los jugadores pasando los parámetros que declaré en players.js

  var _players = [
    new Player(0, 'Jugador1', 'img/playerone.png', 9, '#03a9f4'),
    new Player(1, 'Jugador2', 'img/playertwo.png', 8, '#8bc34a'),
    new Player(2, 'Jugador3', 'img/playerthree.png', 16, '#f44336'),
    new Player(3, 'Jugador4', 'img/playerfour.png', 18, '#ffc107')
  ];
  //Declaro las canciones pasando los parámetros que declaré en song.js

  var _songs = [
    new Song('R U Mine', 'album1', '1998', 'songs/La_mordidita.mp3'),
    new Song('cancion1', 'album1', '1998', 'url')
  ];

  //Instancio el juego ahora game es el juego.

  var game = new Game(_players, _songs, 5);
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
          //Igualo selectedPlayer a 'i' para guardar su indice y así poder utilizarlo en todo el
          //juego ya que se almacena en Game si no lo hiciera así al estar dentro de un ciclo for
          //no podría utilizarla en otro sitio que no sea ese
          game.selectedPlayer = i;
          $('.turntable-container').removeClass('active');
          $('#answer img').attr(
            'src',
            game.players[game.selectedPlayer].avatar
          );
          $('#answer button').css(
            'background',
            game.players[game.selectedPlayer].color
          );
          $('#answer').addClass('answer-container');
        }
      }
    }
  });
  $('.answer-btn').click(function() {
    console.log($('.answer-input').val(), game.selectedSong.title);
    if ($('.answer-input').val() === game.selectedSong.title) {
      $('#answer-ok img').attr('src', game.players[game.selectedPlayer].avatar);
      $('#answer-ok button').css(
        'background',
        game.players[game.selectedPlayer].color
      );
      $('.response-ok').css('color', game.players[game.selectedPlayer].color);
      $('.reponse-title').text($('.answer-input').val());
      $('#answer').removeClass('answer-container');
      $('#answer-ok').addClass('answer-container');
      game.players[game.selectedPlayer].addPoints(50);
    } else {
      $('#answer-ok img').attr('src', game.players[game.selectedPlayer].avatar);
      $('.reponse-title').text($('.answer-input').val());
      $('#answer').removeClass('answer-container');
      $('#answer-error').addClass('answer-container');
      $('#answer-ok button').css(
        'background',
        game.players[game.selectedPlayer].color
      );
      game.players[game.selectedPlayer].addPoints(-50);
    }
  });
  $('#answer-ok button').click(function() {
    $('#answer-ok').hide();
  });
});
