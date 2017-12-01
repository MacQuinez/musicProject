function Game(players, songs, rounds) {
  this.players = players;
  this.status = 'ready';
  this.selectedSong;
  this.selectedPlayer;
  this.winner;
  this.difficulty = 'easy';
  this.songs = songs;
  this.rounds = rounds;
  this.currentRound = 0;

  this.startGame = function() {
    // Dando click al elemento con la clase turntable-container hago lo siguiente:
    //1. Ejecuto la función toggleClass y le paso la clase active para que la ponga o la qui
    this.playSong();
  };
  this.playSong = function() {
    $('#answer-ok').hide();
    this.selectSong();
    console.log(this.selectedSong.title);

    // reproducir mp3 de this.selectedSong
    this.status = 'play';
    $('.turntable-container').toggleClass('active');
  };
  this.pauseSong = function() {
    $('.turntable-container').removeClass('active');
    $('#answer img').attr('src', this.players[this.selectedPlayer].avatar);
    $('#answer button').css(
      'background',
      this.players[this.selectedPlayer].color
    );
    $('#answer').show();
  };
  this.resumeSong = function() {
    $('#answer-error').hide();
    this.status = 'play';
    $('.turntable-container').toggleClass('active');
    // seguir reproduciendo el mp3
  };
  this.selectDifficulty = function() {};
  this.checkResponse = function() {};
  this.selectSong = function() {
    this.selectedSong = this.songs[
      Math.floor(Math.random() * this.songs.length)
    ];
  };
}
