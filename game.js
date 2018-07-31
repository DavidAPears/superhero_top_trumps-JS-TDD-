const Game = function(){
  this.players = [];
  this.deck = [];
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.addCard = function(card) {
  this.deck.push(card);
};

Game.prototype.deal = function () {

};

module.exports = Game;
