function Game() {
  this.players = [];
  this.gameStatus;
  this.selectedSong;
  this.winner;
  this.difficulty;
  this.songs = [];
}

// // ready

// $(function() {
//     var game = new Game();

//   $dsdfdsf() {
//       game.players[i].play();
//   }
// });

// if (this.players.length === 0) {
//     this.players.push(player);
//   } else {
// Increment and modify the text in one line!
// $('#pairs_clicked').text(++this.pairsClicked);
$(function() {
  $('.turntable-container').click(function() {
    $(this).toggleClass('active');
  });
  $('.player').click(function() {
    $(this).toggleClass('active');
  });
});
