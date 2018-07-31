const Player = function(){
  this.cards = [];
};

Player.prototype.addCard = function(card) {
  this.cards.push(card);
};

module.exports = Player;
