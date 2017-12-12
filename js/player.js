function Player(id, playerName, avatar, keyCode, color, keyImage) {
  this.id = id;
  this.playerName = playerName;
  this.avatar = avatar;
  this.keyCode = keyCode;
  this.color = color;
  this.playerStatus = 'disabled';
  this.playerPoints = 0;
  this.keyImage = keyImage;
  $('.players-container').append(` 
    <div class="player player-${id}" data-id="${id}" style="color: ${
    this.color
  };">
        <img src="${avatar}" alt="">
        <div class="data-player">
            <p>${this.playerName}</p>
            <p class="score">${this.playerPoints}</p>
        </div>
        <img style="height: 50%;" src="${keyImage}" >
    </div>
  `);
  this.printWinner = function() {
    $('#winner').append(` 
  <div class="player player-${id}" data-id="${id}" style="color: ${
      this.color
    };">
        <img src="${avatar}" alt="">
        <div class="data-player">
            <p>${this.playerName}</p>
            <p class="score">${this.playerPoints}</p>
        </div>
  </div>
`);
  };
  this.addPoints = function(num) {
    this.playerPoints += num;
    $('.player-' + this.id + ' .score').text(this.playerPoints);
  };

  this.toggleStatus = function() {
    if (this.playerStatus === 'disabled') {
      this.playerStatus = 'enabled';
      $('.player-' + this.id).addClass('active');
      $('.action').css('display', 'none');
    } else {
      this.playerStatus = 'disabled';
      $('.player-' + this.id).removeClass('active');
    }
  };
}
