function Game(players, songs) {
  this.players = players;
  this.status = 'ready';
  this.selectedSong;
  this.winner;
  this.difficulty = 'easy';
  this.songs = songs;

  this.startGame = function() {
    // Dando click al elemento con la clase turntable-container hago lo siguiente:
    //1. Ejecuto la función toggleClass y le paso la clase active para que la ponga o la qui
    $('.turntable-container').toggleClass('active');
    this.status = 'play';
    this.selectSong();
  };
  this.selectDifficulty = function() {};
  this.checkResponse = function() {};
  this.selectSong = function() {
    this.selectedSong = this.songs[
      Math.floor(Math.random() * this.songs.length)
    ];
  };
}
