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
                <img src="${image}" alt="">
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

let imageArray = [];
let containerArray = [];

const memoryCards = document.querySelectorAll(".card-container");

const img = document.querySelector("img");


memoryCards.forEach((memoryCard) => {
    memoryCard.addEventListener("click", () => {
        const img = memoryCard.querySelector("img");
        img.classList.add("on");
        imageArray.push(img)
        containerArray.push(memoryCard);
        console.log(imageArray);
        console.log(containerArray);

        const checkImgArray = () => {

            if (imageArray.length === 2) {
                imageArray.forEach(imageArr => {
                    setTimeout(() => {
                        imageArr.classList.remove("on");

                    }, 700);
                })
            }
        }
        checkImgArray();
    })

})