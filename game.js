const Game = function(){
  this.players = [];
  this.cards = [];
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

module.exports = Game;
