/*window.addEventListener("DOMContentLoaded", function () {
  // Execute after page load
});
*/
let dealButton = document.getElementById("deal-button");
let hitButton = document.getElementById("hit-button");
let standButton = document.getElementById("stand-button");
let playerHand = document.getElementById("player-hand");
let dealerHand = document.getElementById("dealer-hand");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");

//generate a random card from 'cards array'
let randomCard = () => {
  let cards = ["ace", "jack", "queen"];
  return cards[Math.floor(Math.random() * 3)];
};
`images/${card.point}_of_${card.suit}.png`;

//deal cards to player and Dealer when 'deal' and 'hit' button are pressed

let deal = (hand, card) => {
  hand.innerText += randomCard();
  hand.appendChild(card.cloneNode(true));
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
  deal(playerHand, card1);
});
dealButton.addEventListener("click", function () {
  deal(dealerHand, card2);
});
// dealButton.addEventListener("click", dealToPlayer);
// dealButton.addEventListener("click", dealToDealer);
/*hitButton.addEventListener("click", dealToPlayer);
hitButton.addEventListener("click", dealToDealer);
*/
