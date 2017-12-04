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
  this.finalRound = 4;
  this.reset;

  var audio = document.getElementById('audioDemo');

  this.startGame = function() {
    // Dando click al elemento con la clase turntable-container hago lo siguiente:
    //1. Ejecuto la función toggleClass y le paso la clase active para que la ponga o la qui
    this.playSong();
  };
  this.playSong = function() {
    $('#answer-ok').hide();
    $('.turntable-container').css('pointer-events', 'none');
    this.selectSong();
    audio.load();
    audio.play();
    this.winner();
    this.addRound();
    console.log(this.selectedSong.title);
    this.status = 'play';
    $('.turntable-container').toggleClass('active');
  };
  this.pauseSong = function() {
    audio.pause();
    $('.turntable-container').removeClass('active');
    $('#answer img').attr('src', this.players[this.selectedPlayer].avatar);
    $('#answer button').css(
      'background',
      this.players[this.selectedPlayer].color
    );

    $('#answer-error button').css(
      'background',
      this.players[this.selectedPlayer].color
    );
    $('#answer-error img').attr(
      'src',
      this.players[this.selectedPlayer].avatar
    );

    $('#answer-ok button').css(
      'background',
      this.players[this.selectedPlayer].color
    );
    $('#winner button').css(
      'background',
      this.players[this.selectedPlayer].color
    );
    $('#answer').show();
  };
  this.resumeSong = function() {
    $('#answer-error').hide();
    this.status = 'play';
    $('.turntable-container').toggleClass('active');
    audio.play();
  };
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
    $('#sourceSong').attr('src', this.selectedSong.link);
  };
  this.addRound = function() {
    if (this.currentRound <= this.finalRound) {
      this.currentRound += this.rounds;
      $('.round-counter').text('ROUND ' + this.currentRound);
    }
  };
  this.winner = function() {
    if (this.currentRound > this.finalRound) {
      $('#winner').show();
      this.status = 'pause';
      $('#winner img').attr('src', this.players[this.selectedPlayer].avatar);
    }
  };
  this.reset = function() {
    if (this.currentRound === 5) {
      window.location.reload();
    }
  };
}
