//1. Defino la clase PLayer con sus atributos y le paso como parámetro
// los que vaya a utilizar

function Player(id, playerName, avatar, keyCode, color, keyImage) {
  this.id = id; //le doy un ID para poder distinguir cada jugador
  this.playerName = playerName;
  this.avatar = avatar;
  this.keyCode = keyCode;
  this.color = color;
  this.playerStatus = 'disabled';
  this.playerPoints = 0;
  this.keyImage = keyImage;
  //2. llamo al div con clase players-container de mi HTML y con .append
  //le meto el elemento HTML que me va a pintar a los jugadores de forma dinámica
  //3.El contenido HTML lo declaro con comillas francesas para poder cambiar de renglón
  //y mezclar strings con variables
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
  //4. Defino la función para cambiar playerStatus y si esta enabled le añado la clase active

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

  this.removePlayer = function() {};
}
