const cardArray = [
  {
    name: "orange",
    img: "images/orange.png",
  },
  {
    name: "pink",
    img: "images/pink.png",
  },
  {
    name: "purple",
    img: "images/purple.png",
  },
  {
    name: "redOrange",
    img: "images/redOrange.png",
  },
  {
    name: "seaGreen",
    img: "images/seaGreen.png",
  },
  {
    name: "yellow",
    img: "images/yellow.png",
  },
  {
    name: "orange",
    img: "images/orange.png",
  },
  {
    name: "pink",
    img: "images/pink.png",
  },
  {
    name: "purple",
    img: "images/purple.png",
  },
  {
    name: "redOrange",
    img: "images/redOrange.png",
  },
  {
    name: "seaGreen",
    img: "images/seaGreen.png",
  },
  {
    name: "yellow",
    img: "images/yellow.png",
  },
];

let chosenId = [];
let matchedCards = [];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

function createGrid() {
  console.log(cardArray);
  for (let i = 0; i < 12; ++i) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/lightning.png");
    card.setAttribute("data-id", i);
    card.setAttribute("width", "100px");
    card.setAttribute("height", "100px");
    gridDisplay.appendChild(card);
    card.addEventListener("click", flip);
  }
}

createGrid();

function flip() {
  const cardId = this.getAttribute("data-id");
  this.setAttribute("src", cardArray[cardId].img);
  chosenId.push(cardId);
  setTimeout(match, 500);
  this.removeEventListener("click",flip);
}

function match() {
  if (chosenId.length === 2) {
    const firstCard = document.querySelector(`img[data-id="${chosenId[0]}"]`);
    const secondCard = document.querySelector(`img[data-id="${chosenId[1]}"]`);

    if (cardArray[chosenId[0]].name === cardArray[chosenId[1]].name) {

      alert("you have a match");

      matchedCards.push(cardArray[chosenId[0]].name);
      matchedCards.push(cardArray[chosenId[1]].name);

      firstCard.removeEventListener("click", flip);
      firstCard.setAttribute("src", "images/white.jpg");

      secondCard.removeEventListener("click", flip);
      secondCard.setAttribute("src", "images/white.jpg");
    } else {
      alert("you do not have a match");

      firstCard.setAttribute("src", "images/lightning.png");
      secondCard.setAttribute("src", "images/lightning.png");

      firstCard.addEventListener("click",flip);
      secondCard.addEventListener("click",flip);

    }
    chosenId = [];
    won();
  }
}

function won() {
    if(matchedCards.length === cardArray.length){
        alert("you have won");
    }
}


const button = document.querySelector("button");


button.addEventListener("click", () => {
  location.reload();
  console.log("clicked");
});
