const cards = [{
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

const dupeCards = [...cards, ...cards]

const image = document.querySelector(".card-container img");
const memoryCards = document.querySelectorAll(".card-blocker");


// Helper function to prevent XSS injections
// Creates an HTML element from string
const stringToHTML = str => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.firstChild;
};

// Create ingredient template with a template literal
const createCards = (name, image) => {
    return `<div class="card-container data-name="${name}">
    <img src="${image}" alt="">
</div>
    `;
};

// Render the ingredient element to the DOM
const playboardWrapper = document.querySelector(".playboard");

const generateCards = () => {
    dupeCards.forEach(card => {
        const element = createCards(card.name, card.image);
        playboardWrapper.appendChild(stringToHTML(element));
    });
};

generateCards();