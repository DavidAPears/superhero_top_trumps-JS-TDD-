const assert = require("assert");
const Card = require("../card.js");

describe("Card", function(){

  let card;

  beforeEach(function(){
    card1 = new Card("Superman", 6, 9, 7);
    card2 = new Card("Scarlett Witch", 7, 10, 5);
    card3 = new Card("Black Widow", 8, 6, 9);
    card4 = new Card("The Flash", 7, 4, 10);
    card5 = new Card("Wonder Woman", 8, 7, 5);
    card6 = new Card("Batman", 10, 5, 6);
  });
