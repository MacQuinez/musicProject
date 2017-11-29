function Player(id, playerName, avatar, keyCode, color) {
  this.id = id;
  this.playerStatus = 'disabled';
  this.playerPoints = 0;
  this.keyCode = keyCode;
  this.avatar = avatar;
  this.playerName = playerName;
  this.color = color;

  $('.players-container').append(` 
    <div class="player player-${id}" data-id="${id}"
      style="border-color: ${this.color};color: ${this.color};">
        <img src="${avatar}" alt="">
        <div class="data-player">
            <p>${this.playerName}</p>
            <p class="score">0</p>
        </div>
        <div class="active-key">
            <img src="" alt="">
        </div>
    </div>
  `);

  this.addPoints = function() {};

  this.toggleStatus = function() {
    if (this.playerStatus === 'disabled') {
      this.playerStatus = 'enabled';
      $('.player-' + this.id).addClass('active');
    } else {
      this.playerStatus = 'disabled';
      $('.player-' + this.id).removeClass('active');
    }
  };
  this.removePlayer = function() {};
}
