let dealButton = document.getElementById("deal-button");
let hitButton = document.getElementById("hit-button");
let standButton = document.getElementById("stand-button");
let playerHand = document.getElementById("player-hand");
let dealerHand = document.getElementById("dealer-hand");

//deck of 52 cards
// prettier-ignore
let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
let suits = ["hearts", "clubs", "diamonds", "spades"];
let deck = [];
for (let i = 0; i < ranks.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push({ ranks: ranks[i], suits: suits[j] });
  }
}
//draw random card
let usedCards = [];
let randomCard = () => {
  let drawnCard = deck[Math.floor(Math.random() * 53)];
  usedCards.push(drawnCard);
  console.log(usedCards[0].ranks);
  console.log(usedCards[0].suits);
  // usedCards[0] = { status: "used" };
};

let cardImage = document.createElement("card");
cardImage.src = "./images/10_of_spades.png";

// `./images/${usedCards[0].ranks}_of_${usedCards[0].suits}.png`;

randomCard();
console.log(usedCards);

//deal cards to player and Dealer when 'deal' and 'hit' button are pressed
let deal = (hand, card) => {
  // hand.innerText += randomCard();
  hand.appendChild(cardImage.cloneNode(true));
};

// let dealToPlayer = () => {
//   playerHand.innerText += randomCard();
//   playerHand.appendChild(card1);
// };

// let dealToDealer = () => {
//   dealerHand.innerText += randomCard();
//   dealerHand.appendChild(card2);
// };

dealButton.addEventListener("click", function () {
  deal(playerHand, randomCard());
});
dealButton.addEventListener("click", function () {
  deal(dealerHand, randomCard());
});

// dealButton.addEventListener("click", dealToPlayer);
// dealButton.addEventListener("click", dealToDealer);
// hitButton.addEventListener("click", dealToPlayer);
// hitButton.addEventListener("click", dealToDealer);
