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
}

let playerCards = [];
let dealerCards = [];

console.log("playerCards");
console.log(playerCards);
//console.log("dealerCards");
//console.log(dealerCards);

//score players cards
let playerScore = ""; //aces = 1 or 11
let playerValues = []; //aces = 1

const calculatePlayerScore = () => {
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
      //console.log(`rank: ${playerCards[i].rank}`);
      playerValues.push(Number(playerCards[i].rank));
    } else if (
      playerCards[i].rank === "jack" ||
      playerCards[i].rank === "queen" ||
      playerCards[i].rank === "king"
    ) {
      //console.log(`rank: ${playerCards[i].rank}`);
      playerValues.push(10);
    } else {
      //console.log(`rank: ${playerCards[i].rank}`);
      playerValues.push(11);
    }
  }

  //console.log("player values");
  //console.log(playerValues);

  const add = () => {
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    return (playerScore = playerValues.reduce(reducer));
  };

  add();
  //console.log("playerScore");
  //console.log(playerScore);

  if (playerScore > 21) {
    let index = playerValues.indexOf(11);
    playerValues[index] = 1;
    add();
    //console.log("adjusted player score");
    //console.log(playerScore);
  }
};

//put player card images out on the table
const placePlayerCardImages = (cards) => {
  for (i = 0; 0 < cards.length; i++) {
    console.log(cards[i]);
    let cardImage = document.createElement("img");
    cardImage.src = `./images/${cards[i].rank}_of_${cards[i].suit}.png`;
    playerHand.appendChild(cardImage);
  }
  return;
};

//put dealer card images out on the table
const placeDealerCardImages = (cards) => {
  for (i = 0; 0 < cards.length; i++) {
    let cardImage = document.createElement("img");
    cardImage.src = `./images/${cards[i].rank}_of_${cards[i].suit}.png`;
    dealerHand.appendChild(cardImage);
  }
  return;
};

//deal 2 random cards to player when deal button is pressed
let dealToPlayer = () => {
  playerCards.push(deck.shift());
  calculatePlayerScore();
};

//deal 2 random cards to dealer when deal button is pressed
let dealToDealer = () => {
  dealerCards.push(deck.shift());
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
});

//hit button event handler
hitButton.addEventListener("click", dealToPlayer);
