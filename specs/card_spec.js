const assert = require("assert");
const Card = require("../card.js");

describe("Card", function(){

  let card;

  beforeEach(function(){
    superman = new Card("Superman", 6, 9, 7);
    scarletWitch = new Card("Scarlett Witch", 7, 10, 5);
    blackWidow = new Card("Black Widow", 8, 6, 9);
    theFlash = new Card("The Flash", 7, 4, 10);
    wonderWoman = new Card("Wonder Woman", 8, 7, 5);
    batman = new Card("Batman", 10, 5, 6);
  });

  it("should have intelligence", function(){
    const result = superman.intelligence;
    assert.strictEqual(result, 6);
  });
  it("should have strength", function(){
    const result = superman.strength;
    assert.strictEqual(result, 9);
  });
  it("should have agility", function(){
    const result = superman.agility;
    assert.strictEqual(result, 7);
  });


});
