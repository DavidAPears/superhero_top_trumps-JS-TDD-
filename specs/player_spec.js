const assert = require("assert");
const Player = require("../player.js");

describe("Player", function(){

  let player;

  beforeEach(function(){
    player1 = new Player("Dave");
    player2 = new Player("Helen");
  });

  it("should start with no cards", function(){
      const result = player1.cards.length;
      assert.strictEqual(result, 0);
    });

    it("should add a card", function(){
        player1.addCard("Superman");
        const result = player1.cards.length;
        assert.strictEqual(result, 1);
      });

  });
