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

const image = document.querySelector(".card-container img");
const containers = document.querySelectorAll(".card-container");

containers.forEach(element => {
    element.addEventListener("click", () => {
        const blocker = document.querySelectorAll(".card-blocker");
        blocker.forEach(block => {
            block.classList.toggle("off");
        });
    })
});