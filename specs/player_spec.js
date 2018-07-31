const assert = require("assert");
const Player = require("../player.js");
const Card = require("../card.js");

describe("Player", function(){

  let player;
  let card;

  beforeEach(function(){
    player1 = new Player("Dave");
    player2 = new Player("Helen");
    superman = new Card("Superman", 6, 9, 7);
    scarletWitch = new Card("Scarlett Witch", 7, 10, 5);
  });

  it("should start with no cards", function(){
      const result = player1.cards.length;
      assert.strictEqual(result, 0);
    });

    it("should add a card", function(){
        player1.addCard(superman);
        const result = player1.cards.length;
        assert.strictEqual(result, 1);
      });

  });
