let dealButton = document.getElementById("deal-button");
let hitButton = document.getElementById("hit-button");
let standButton = document.getElementById("stand-button");
let playerHand = document.getElementById("player-hand");
let dealerHand = document.getElementById("dealer-hand");

//deck of 52 cards
// prettier-ignore
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
let suit = ["hearts", "clubs", "diamonds", "spades"];
let deck = [];
for (let i = 0; i < rank.length; i++) {
  for (let j = 0; j < suit.length; j++) {
    deck.push({ rank: rank[i], suit: suit[j] });
  }
}

//generates a random card
let playerCards = [];
let dealerCards = [];

let randomCard = () => {
  return (cardIndex = deck.indexOf(deck[Math.floor(Math.random() * 53)]));
};

console.log(playerCards);
console.log(dealerCards);

// let usedCardsDeck = () => {
//   usedCards.push(drawnCard);
//   console.log(usedCards[0].ranks);
//   console.log(usedCards[0].suits);
//   // usedCards[0] = { status: "used" };
//   console.log(drawnCard);
//   randomCard();
//   //console.log(usedCards);
// };
//access cards from 'images' folder
let cardImage = document.createElement("card");
cardImage.src = "./images/10_of_hearts.png";
// `./images/${usedCards[0].ranks}_of_${usedCards[0].suits}.png`;

/*total score of players hand
let playerScore = "";    //aces = 1 or 11
let playerValues = [];   //aces = 1
for (i = 0; i < playerHand.length; i++) {
 if drawnCard[i].ranks === "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "10") {
   playerValues.push(drawnCard[i].ranks);
 } else if (drawnCard[i].ranks === "jack" || "queen" || "king") {
   playerValues.push(10);
 } else {
   playerValues.push(11);
 }
//assess Aces
 if (sum of playerValues(loop?) > 21) {
   playerValues.replace("11", "1");
   sum player values;
   checkAcesAgain();
 }

 function checkAcesAgain() {
   if (sum of playerValues(loop?) > 21) {

   }
 }
*/

//deal 4 random cards to player/dealer when deal button is pressed
let dealToPlayer = () => {
  randomCard();
  playerCards.push(deck.splice(cardIndex, 1));
  return (playerHand.innerHTML += playerCards);
  //playerHand.appendChild(randomCard());
};

let dealToDealer = () => {
  randomCard();
  dealerCards.push(deck.splice(cardIndex, 1));
  return (dealerHand.innerHTML += playerCards);
  //dealerHand.appendChild(card2);
};

//deal button event handler
dealButton.addEventListener("click", function (e) {
  dealToPlayer();
  dealToDealer();
  dealToPlayer();
  dealToDealer();
});

hitButton.addEventListener("click", dealToPlayer);
hitButton.addEventListener("click", dealToDealer);

//extra code, removed, but still may use

//deal cards to player and Dealer when 'deal' button are pressed
// let deal = (hand, card) => {
//   hand.appendChild(cardImage.cloneNode(true));
//   return console.log("card dealt");
// };

/*
let deal = (hand, card) => {
  hand.appendChild(cardImage.cloneNode(true));

};

dealButton.addEventListener("click", function () {
  deal(playerHand, randomCard());
});
dealButton.addEventListener("click", function () {
  deal(dealerHand, randomCard());
});

hitButton.addEventListener("click", function () {
  deal(playerHand, randomCard());
});



*/
