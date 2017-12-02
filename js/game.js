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
  this.finalRound = 1;

  this.startGame = function() {
    // Dando click al elemento con la clase turntable-container hago lo siguiente:
    //1. Ejecuto la función toggleClass y le paso la clase active para que la ponga o la qui
    this.playSong();
  };
  this.playSong = function() {
    $('#answer-ok').hide();
    this.selectSong();
    this.winner();
    this.addRound();
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
  // this.selectDifficulty = function() {};
  this.checkResponse = function() {
    if (
      $('.answer-input')
        .val()
        .toUpperCase() === this.selectedSong.title
    ) {
      $('#answer-ok img').attr('src', this.players[this.selectedPlayer].avatar);
      $('#answer-ok button').css(
        'background',
        this.players[this.selectedPlayer].color
      );
      $('.response-ok').css('color', this.players[this.selectedPlayer].color);
      $('.reponse-title').text($('.answer-input').val());
      $('#answer').hide();
      $('#answer-ok').show();

      this.players[this.selectedPlayer].addPoints(50);
    } else {
      $('#answer-ok img').attr('src', this.players[this.selectedPlayer].avatar);
      $('.reponse-title').text($('.answer-input').val());
      $('#answer').hide();
      $('#answer-error').show();
      $('#answer-ok button').css(
        'background',
        this.players[this.selectedPlayer].color
      );
      this.players[this.selectedPlayer].addPoints(-50);
    }
  };
  this.selectSong = function() {
    this.selectedSong = this.songs[
      Math.floor(Math.random() * this.songs.length)
    ];
  };
  this.addRound = function() {
    if (this.currentRound <= this.finalRound) {
      this.currentRound += this.rounds;
      $('.round-counter').text('Round ' + this.currentRound);
    }
  };
  this.winner = function() {
    if (this.currentRound > this.finalRound) {
      $('#winner').show();
      this.status = 'pause';
      $('#winner img').attr('src', this.players[this.selectedPlayer].avatar);
    }
  };
}
