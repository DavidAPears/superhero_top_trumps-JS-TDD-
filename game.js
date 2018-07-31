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

Game.prototype.deal = function (player) {
  const card = this.deck.shift();
  player.addCard(card);
};

Game.prototype.compareHands = function (player1, player2) {
  let category = "intelligence"
  if (player1.playCard(category) > player2.playCard(category)){
    return "Player 1 wins!"
  }else {
    return "Player 2 wins!"
  }
};

module.exports = Game;
