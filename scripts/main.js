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

let playerCards = [];
let dealerCards = [];

//console.log("playerCards");
// console.log(playerCards);
// console.log("dealerCards");
// console.log(dealerCards);

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
    console.log("adjusted player score");
    console.log(playerScore);
  }
};

const placeCardImages = () => {
  let cardImage = document.createElement("img");
  cardImage.src = "./images/2_of_clubs.png";
  playerHand.appendChild(cardImage);
  //return `<img src='${url}' />`;
};

//deal 4 random cards to player/dealer when deal button is pressed
let dealToPlayer = () => {
  playerCards.push(deck.shift());
  placeCardImages();
  calculatePlayerScore();
  //return (playerHand.innerHTML += playerCards);
  //playerHand.appendChild(randomCard());
};

let dealToDealer = () => {
  //randomCard();
  //dealerCards.push(deck.splice(cardIndex, 1));
  dealerCards.push(deck.shift());
  placeCardImages(dealerCards);
  //calculateDealerScore();
  //return (dealerHand.innerHTML += dealerCards);
  //dealerHand.appendChild(card2);
};

//deal button event handler
dealButton.addEventListener("click", function (e) {
  dealToPlayer();
  dealToDealer();
  dealToPlayer();
  dealToDealer();
});

//hit button event handler
hitButton.addEventListener("click", dealToPlayer);

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

/*
 function checkAcesAgain() {
   if (sum of playerValues(loop?) > 21) {

   }
 }
*/

//code related to accessing image files

// //add card images for player and dealer hands
// for (i = 0; i < playerCards.length; i++) {
//   playerCards[0].ranks;
// }

// let usedCardsDeck = () => {
//   usedCards.push(drawnCard);
//   console.log(usedCards[0].ranks);
//   console.log(usedCards[0].suits);
//   // usedCards[0] = { status: "used" };
//   console.log(drawnCard);
//   randomCard();
//   //console.log(usedCards);
// };
// //access cards from 'images' folder
// let cardImage = document.createElement("card");
// cardImage.src = "./images/10_of_hearts.png";
// `./images/${usedCards[0].ranks}_of_${usedCards[0].suits}.png`;

// //generates a random card
// let randomCard = () => {
//   return (cardIndex = deck.indexOf(deck[Math.floor(Math.random() * 53)]));
// };
