let cards = [{
        name: "Pikachu",
        image: "./images/pikachu.png"
    },
    {
        name: "Bulbasaur",
        image: "./images/bulbasaur.png"
    },
    {
        name: "Charmander",
        image: "./images/charmander.png"
    },
    {
        name: "Eevee",
        image: "./images/eevee.png"
    },
    {
        name: "Jigglypuff",
        image: "./images/jigglypuff.png"
    },
    {
        name: "Mewtwo",
        image: "./images/mewtwo.png"
    },
    {
        name: "Snorlax",
        image: "./images/snorlax.png"
    },
    {
        name: "Squirtle",
        image: "./images/squirtle.png"
    }
];


// Duplicates the cards array
const dupeCards = [...cards, ...cards]

// Helper function to prevent XSS injections
// Creates an HTML element from string
const stringToHTML = str => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.firstChild;
};

// Create card template with a template literal
const image = document.querySelector(".card-container img");

const createCards = (name, image) => {
    return `<div class="card-container data-name="${name}">
    <img class="front-face" src="${image}" alt="">
    <img class="back-face" src="./images/ash.jpg">
        </div>`;
};

// Render the card element to the DOM
const playboardWrapper = document.querySelector(".playboard");

const generateCards = () => {
    dupeCards.forEach(card => {
        const element = createCards(card.name, card.image);
        playboardWrapper.appendChild(stringToHTML(element));
    });
};

generateCards();

// Function to flip a card
const memoryCard = document.querySelectorAll(".card-container");

const cardFlip = (e) => {
    e.currentTarget.classList.toggle("flip");
}

memoryCard.forEach(card => {
    card.addEventListener("click", cardFlip)
})