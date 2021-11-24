let dealButton = document.getElementById("deal-button");
let hitButton = document.getElementById("hit-button");
let standButton = document.getElementById("stand-button");
let playerHand = document.getElementById("player-hand");
let dealerHand = document.getElementById("dealer-hand");
let msg2 = document.getElementById("messages2");
let playAgainButton = document.getElementById("play-again");
let cardBack = document.querySelector(".card-back");
let playerPoints = document.getElementById("player-points");
let dealerPoints = document.getElementById("dealer-points");

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

//shuffle deck
function shuffleDeck(deck) {
  let randomCardA;
  let randomCardB;
  let temporary;
  for (let i = 0; i < deck.length; i++) {
    randomCardA = Math.floor(Math.random() * deck.length);
    randomCardB = Math.floor(Math.random() * deck.length);
    temporary = deck[randomCardA];
    deck[randomCardA] = deck[randomCardB];
    deck[randomCardB] = temporary;
  }
  return;
}

//compare player and dealer scores
const compareScores = () => {
  if (playerScore > dealerScore) {
    msg2.textContent = "You win!";
  } else if (playerScore === dealerScore) {
    msg2.textContent = "It's a tie, play again!";
  } else {
    msg2.textContent = "Sorry, Dealer wins!";
  }
};

let playerCards = [];
let dealerCards = [];

//score players cards
let playerScore = ""; //aces = 1 or 11
let playerValues = [];
const calculatePlayerScore = () => {
  const eleven = (element) => element === 11;
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  playerScore = playerValues.reduce(reducer);
  if (playerScore === 21) {
    msg2.textContent = "You win!";
  } else if (playerScore > 21 && playerValues.some(eleven)) {
    let index = playerValues.indexOf(11);
    playerValues[index] = 1;
    calculatePlayerScore();
  } else if (playerScore > 21) {
    msg2.textContent = "You bust, dealer wins.";
  }
  playerPoints.textContent = playerScore;
};

//score dealers cards
let dealerScore = ""; //aces = 1 or 11
let dealerValues = [];
const calculateDealerScore = () => {
  const eleven = (element) => element === 11;
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  dealerScore = dealerValues.reduce(reducer);
  if (dealerScore < 17) {
    dealToDealer();
    calculateDealerValues();
  } else if (dealerScore > 21 && dealerValues.some(eleven)) {
    let index = dealerValues.indexOf(11);
    dealerValues[index] = 1;
    calculateDealerScore();
  } else if (dealerScore > 21) {
    msg2.textContent = "Dealer busts, you win!";
  } else {
    compareScores();
  }
  dealerPoints.textContent = dealerScore;
};

//convert player card ranks to values
const calculatePlayerValues = () => {
  playerValues = [];
  for (i = 0; i < playerCards.length; i++) {
    if (
      playerCards[i].rank === "2" ||
      playerCards[i].rank === "3" ||
      playerCards[i].rank === "4" ||
      playerCards[i].rank === "5" ||
      playerCards[i].rank === "6" ||
      playerCards[i].rank === "7" ||
      playerCards[i].rank === "8" ||
      playerCards[i].rank === "9" ||
      playerCards[i].rank === "10"
    ) {
      playerValues.push(Number(playerCards[i].rank));
    } else if (
      playerCards[i].rank === "jack" ||
      playerCards[i].rank === "queen" ||
      playerCards[i].rank === "king"
    ) {
      playerValues.push(10);
    } else {
      playerValues.push(11);
    }
  }
  calculatePlayerScore();
};

//convert dealer card ranks to values
const calculateDealerValues = () => {
  dealerValues = [];
  for (i = 0; i < dealerCards.length; i++) {
    if (
      dealerCards[i].rank === "2" ||
      dealerCards[i].rank === "3" ||
      dealerCards[i].rank === "4" ||
      dealerCards[i].rank === "5" ||
      dealerCards[i].rank === "6" ||
      dealerCards[i].rank === "7" ||
      dealerCards[i].rank === "8" ||
      dealerCards[i].rank === "9" ||
      dealerCards[i].rank === "10"
    ) {
      dealerValues.push(Number(dealerCards[i].rank));
    } else if (
      dealerCards[i].rank === "jack" ||
      dealerCards[i].rank === "queen" ||
      dealerCards[i].rank === "king"
    ) {
      dealerValues.push(10);
    } else {
      dealerValues.push(11);
    }
  }
  calculateDealerScore();
};

//value of dealer's first card
const calculateDealerFirstCardScore = () => {
  if (
    dealerCards[0].rank === "2" ||
    dealerCards[0].rank === "3" ||
    dealerCards[0].rank === "4" ||
    dealerCards[0].rank === "5" ||
    dealerCards[0].rank === "6" ||
    dealerCards[0].rank === "7" ||
    dealerCards[0].rank === "8" ||
    dealerCards[0].rank === "9" ||
    dealerCards[0].rank === "10"
  ) {
    dealerPoints.textContent = dealerCards[0].rank;
  } else if (
    dealerCards[0].rank === "jack" ||
    dealerCards[0].rank === "queen" ||
    dealerCards[0].rank === "king"
  ) {
    dealerPoints.textContent = 10;
  } else {
    dealerPoints.textContent = 11;
  }
};

//deals a card to the player
let dealToPlayer = () => {
  let cards = deck.shift();
  let rank = cards.rank;
  let suit = cards.suit;
  let cardImage = document.createElement("img");
  cardImage.src = `../images/${rank}_of_${suit}.png`;
  playerHand.appendChild(cardImage);
  return playerCards.push(cards);
};

//deals a card to the dealer
let dealToDealer = () => {
  let cards = deck.shift();
  let rank = cards.rank;
  let suit = cards.suit;
  let cardImage = document.createElement("img");
  cardImage.src = `../images/${rank}_of_${suit}.png`;
  dealerHand.appendChild(cardImage);
  return dealerCards.push(cards);
};

//hides the dealer's second card
let hideDealersCard = () => {
  let cardImage = document.createElement("img");
  cardImage.src = "../images/card_back_copy.jpg";
  cardBack.appendChild(cardImage);
};

//deal button event handler
dealButton.addEventListener("click", function (e) {
  shuffleDeck(deck);
  dealToPlayer();
  dealToDealer();
  dealToPlayer();
  dealToDealer();
  hideDealersCard();
  calculatePlayerValues();
  calculateDealerFirstCardScore();
});

//hit button event handler
hitButton.addEventListener("click", function (e) {
  dealToPlayer();
  calculatePlayerValues();
});

//stand button event handler
standButton.addEventListener("click", function (e) {
  calculateDealerValues();
  cardBack.className = "transparent-card";
});

playAgainButton.addEventListener("click", function (e) {
  window.location.reload();
});
