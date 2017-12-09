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
  this.shuffleSongs;
  this.letterClue;

  var audio = document.getElementById('audioDemo');

  this.startGame = function() {
    // Dando click al elemento con la clase turntable-container hago lo siguiente:
    //1. Ejecuto la función toggleClass y le paso la clase active para que la ponga o la qui
    this.playSong();
  };
  this.playSong = function() {
    $('#answer-ok').hide();
    $('.turntable-container').css('pointer-events', 'none');
    if (this.currentRound > this.finalRound) {
      this.winner();
    } else {
      this.selectSong();
      audio.load();
      // TODO hacer que pare la música en un momento concreto y pasar a la sieguiente
      // audio.currentTime = 30;
      audio.play();
      this.addRound();
      this.status = 'play';
      $('.turntable-container').toggleClass('active');
      this.lettersClue();
    }
  };

  this.pauseSong = function() {
    this.status = 'pause';
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
  };
  this.showAnswerScreen = function() {
    $('#answer').show();
    $('.answer-input[type="text"]').val('');
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
      this.players[this.selectedPlayer].addPoints(-10);
    }
  };
  this.selectSong = function() {
    this.selectedSong = this.songs[
      Math.floor(Math.random() * this.songs.length)
    ];
    $('#sourceSong').attr('src', this.selectedSong.link);
    var index = this.songs.indexOf(this.selectedSong);
    if (index > -1) {
      this.songs.splice(index, 1);
    }
  };

  this.lettersClue = function() {
    var clueText = this.selectedSong.title,
      soFar = '';

    var t = setInterval(function() {
      (soFar += clueText.substr(0, 1)), (clueText = clueText.substr(1));

      $('.visible').text(soFar);
      $('.invisible').text(clueText);

      if (clueText.length === 0) clearInterval(t);
    }, 20000);
  };

  this.addRound = function() {
    if (this.currentRound <= this.finalRound) {
      this.currentRound += this.rounds;
      $('.round-counter').text('ROUND ' + this.currentRound);
    }
  };
  this.winner = function() {
    this.pauseSong();
    this.sortPlayer();
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].printWinner();
    }
    $('#winner').show();
  };
  this.reset = function() {
    if (this.currentRound === 5) {
      window.location.reload();
      this.shuffleSongs = function() {
        this.songs.sort(function() {
          return Math.random() - 0.5;
        });
      };
    }
  };
  this.sortPlayer = function() {
    this.players.sort(function(a, b) {
      if (a.playerPoints < b.playerPoints) {
        return 1;
      }
      if (a.playerPoints > b.playerPoints) {
        return -1;
      }
      return 0;
    });
  };
}
