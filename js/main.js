$(document).ready(function() {
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
  var _songs = [
    new Song('Little Green Bag'.toUpperCase(), 'songs/bag.mp3', 0),
    new Song('Do I Wanna Know'.toUpperCase(), 'songs/do_wanna.mp3', 1),
    new Song('Brown Sugar'.toUpperCase(), 'songs/brown_sugar.mp3', 2),
    new Song('Space Oddity'.toUpperCase(), 'songs/space_oddity.mp3', 3),
    new Song('Jhonny be Goode'.toUpperCase(), 'songs/jhonny_goode.mp3', 4),
    new Song('Penny Lane'.toUpperCase(), 'songs/penny_lane.mp3', 5),
    new Song('Valery'.toUpperCase(), 'songs/valery.mp3', 6),
    new Song(
      'Sweet Child O Mine'.toUpperCase(),
      'songs/sweet_child_o_mine.mp3',
      7
    )
  ];

  var game = new Game(_players, _songs, 1);

  $('.player').click(function() {
    var playerId = $(this).attr('data-id');
    game.players[playerId].toggleStatus();
  });

  $('.turntable-container').click(function() {
    game.startGame();
    $('.audioDemo').trigger('play');
  });
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
