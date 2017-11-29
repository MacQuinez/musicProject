$(document).ready(function() {
  //Instancio el juego ahora game es el juego.

  var players = [
    new Player(0, 'Jugador1', 'img/playerone.png', 9, '#03a9f4'),
    new Player(1, 'Jugador2', 'img/playertwo.png', 8, '#8bc34a'),
    new Player(2, 'Jugador3', 'img/playerthree.png', 16, '#f44336'),
    new Player(3, 'Jugador4', 'img/playerfour.png', 17, '#ffc107')
  ];

  var songs = [
    new Song('cancion1', 'album1', '1998', 'url'),
    new Song('cancion1', 'album1', '1998', 'url')
  ];

  var game = new Game(players, songs);

  $('.player').click(function() {
    var playerId = $(this).attr('data-id');
    game.players[playerId].toggleStatus();
  });

  $('.turntable-container').click(function() {
    $(this).toggleClass('active');
  });
});
