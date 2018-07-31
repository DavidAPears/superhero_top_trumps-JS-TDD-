const Player = function(){
  this.cards = [];
};

Player.prototype.addCard = function(card) {
  this.cards.push(card);
};

Player.prototype.playCard = function(category){
  const myCard = this.cards.pop();
  return myCard[category];
};

module.exports = Player;
