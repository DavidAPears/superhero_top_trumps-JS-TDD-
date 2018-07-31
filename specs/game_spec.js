const assert = require("assert");
const Game = require("../game.js");
const Player = require("../player.js");
const Card = require("../card.js");

describe("Game", function(){

  let game;
  let player;
  let card;

  beforeEach(function(){
    game = new Game();
    player1 = new Player("Dave");
    player2 = new Player("Helen");
    superman = new Card("Superman", 6, 9, 7);
    scarletWitch = new Card("Scarlett Witch", 7, 10, 5);
    blackWidow = new Card("Black Widow", 8, 6, 9);
    theFlash = new Card("The Flash", 7, 4, 10);
    wonderWoman = new Card("Wonder Woman", 8, 7, 5);
    batman = new Card("Batman", 10, 5, 6);
  });

  it("should start with no players", function(){
    const result = game.players.length;
    assert.strictEqual(result, 0);
  });

  it("should add players", function(){
    game.addPlayer(player1);
    game.addPlayer(player2);
    const result = game.players.length;
    assert.strictEqual(result, 2);
  });

  it("should start with no cards", function(){
    const result = game.deck.length;
    assert.strictEqual(result, 0);
  });

  it("should get all the cards", function(){
    game.addCard(superman);
    game.addCard(batman);
    game.addCard(wonderWoman);
    game.addCard(theFlash);
    game.addCard(blackWidow);
    game.addCard(scarletWitch);
    const result = game.deck.length;
    assert.strictEqual(result, 6);
  });

});
