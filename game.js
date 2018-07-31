const Game = function(){
  this.players = [];
  this.cards = [];
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.addCard = function(card) {
  this.cards.push(card);
};

module.exports = Game;
