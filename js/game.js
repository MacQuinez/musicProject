function Game(players, songs) {
  this.players = players;
  this.gameStatus = 'ready';
  this.selectedSong;
  this.winner;
  this.difficulty = 'easy';
  this.songs = songs;

  this.startGame = function() {};
  this.selectDifficulty = function() {};
  this.checkResponse = function() {};
  this.selectSong = function() {};
}
