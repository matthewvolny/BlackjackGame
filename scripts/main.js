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

//shuffle deck of cards
function shuffleDeck(deck) {
  let randomCardA;
  let randomCardB;
  let tempX;
  for (let i = 0; i < deck.length; i++) {
    randomCardA = Math.floor(Math.random() * deck.length);
    randomCardB = Math.floor(Math.random() * deck.length);
    tempX = deck[randomCardA];
    deck[randomCardA] = deck[randomCardB];
    deck[randomCardB] = tempX;
  }
  return;
}

//compare player and dealer scores
const compareScores = () => {
  if (playerScore > dealerScore) {
    console.log("you win!");
  } else if (playerScore === dealerScore) {
    console.log("it's a tie");
  } else {
    console.log("dealer wins!");
  }
};

let playerCards = [];
let dealerCards = [];

console.log("playerCards");
console.log(playerCards);
//console.log("dealerCards");
//console.log(dealerCards);

//score players cards
let playerScore = ""; //aces = 1 or 11
let playerValues = [];

const calculatePlayerScore = () => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  playerScore = playerValues.reduce(reducer);
  if (playerScore === 21) {
    console.log("you win!");
  } else if (playerScore > 21) {
    let index = playerValues.indexOf(11);
    playerValues[index] = 1;
    calculatePlayerScore();
    //console.log("adjusted player score");
    //console.log(playerScore);
  }
  console.log("playerScore");
  console.log(playerScore);
};

//score dealers cards
let dealerScore = ""; //aces = 1 or 11
let dealerValues = [];

const calculateDealerScore = () => {
  // if (dealerScore > 21) {
  //   console.log("dealer loses!");
  // }
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  dealerScore = dealerValues.reduce(reducer);
  if (dealerScore < 17) {
    dealToDealer();
    //document.innerHTML...;
  } else if (dealerScore > 21) {
    let index = dealerValues.indexOf(11);
    dealerValues[index] = 1;
    calculateDealerScore();
    //console.log("adjusted player score");
    //console.log(playerScore);
  } else {
    compareScores();
  }
  console.log("dealerScore");
  console.log(dealerScore);
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
      console.log(`rank: ${playerCards[i].rank}`);
      playerValues.push(Number(playerCards[i].rank));
    } else if (
      playerCards[i].rank === "jack" ||
      playerCards[i].rank === "queen" ||
      playerCards[i].rank === "king"
    ) {
      console.log(`rank: ${playerCards[i].rank}`);
      playerValues.push(10);
    } else {
      console.log(`rank: ${playerCards[i].rank}`);
      playerValues.push(11);
    }
    calculatePlayerScore();
  }

  console.log("player values");
  console.log(playerValues);
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
      console.log(`rank: ${dealerCards[i].rank}`);
      dealerValues.push(Number(dealerCards[i].rank));
    } else if (
      dealerCards[i].rank === "jack" ||
      dealerCards[i].rank === "queen" ||
      dealerCards[i].rank === "king"
    ) {
      console.log(`rank: ${dealerCards[i].rank}`);
      playerValues.push(10);
    } else {
      console.log(`rank: ${dealerCards[i].rank}`);
      dealerValues.push(11);
    }
    calculateDealerScore();
  }

  console.log("dealer values");
  console.log(dealerValues);
};

//put player card images out on the table
const placePlayerCardImages = (cards) => {
  for (i = 0; 0 < cards.length; i++) {
    console.log(cards[i]);
    let cardImage = document.createElement("img");
    cardImage.src = `./images/${cards[i].rank}_of_${cards[i].suit}.png`;
    playerHand.appendChild(cardImage);
  }
};

//put dealer card images out on the table
const placeDealerCardImages = (cards) => {
  for (i = 0; 0 < cards.length; i++) {
    let cardImage = document.createElement("img");
    cardImage.src = `./images/${cards[i].rank}_of_${cards[i].suit}.png`;
    dealerHand.appendChild(cardImage);
  }
};

//deal 2 random cards to player when deal button is pressed
let dealToPlayer = () => {
  return playerCards.push(deck.shift());
};

//deal 2 random cards to dealer when deal button is pressed
let dealToDealer = () => {
  return dealerCards.push(deck.shift());
  //calculateDealerScore();
};

//deal button event handler
dealButton.addEventListener("click", function (e) {
  shuffleDeck(deck);
  dealToPlayer();
  dealToDealer();
  dealToPlayer();
  dealToDealer();
  placePlayerCardImages(playerCards);
  placeDealerCardImages(dealerCards);
  calculatePlayerValues();
});

//hit button event handler
hitButton.addEventListener("click", function (e) {
  dealToPlayer();
  placePlayerCardImages(playerCards);
  calculatePlayerValues();
});

//stand button event handler
standButton.addEventListener("click", function (e) {
  calculateDealerValues();
  //dealToDealer();
  //placeDealerCardImages(dealerCards);
});
