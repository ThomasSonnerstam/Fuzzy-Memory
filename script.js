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

matchedCards = [];

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
	return `<div class="card-container" data-name="${name}">
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
const h2 = document.querySelector("h2");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

const cardFlip = (e) => {
	if (lockBoard) return;
	if (e.currentTarget === firstCard) return;

	e.currentTarget.classList.add("flip");

	if (!hasFlippedCard) {
		// First click
		hasFlippedCard = true;
		firstCard = e.currentTarget;
	} else {
		// Second click
		secondCard = e.currentTarget;

		checkMatch();
	}
}

// Let's you flip cards when you click on them
memoryCard.forEach(card => {
	card.addEventListener("click", cardFlip)
})

const checkMatch = () => {
	// To see if cards match by using the data-set attributes
	if (firstCard.dataset.name === secondCard.dataset.name) {

		// Pushes matching cards to the empty matchedCards array
		matchedCards.push(firstCard);
		matchedCards.push(secondCard);

		// If all cards are in the matchedCards array, you will get a notification
		// that you have won the game.
		if (matchedCards.length === 16) {

			h2.textContent = "Congrats! You win :)";
		}

		disableCards();
	} else {
		unflipCards();
	}
}

// Removes the ability to click the cards if they have already matched
const disableCards = () => {
	firstCard.removeEventListener("click", cardFlip);
	secondCard.removeEventListener("click", cardFlip);

	resetBoard();
}

// Unflips the cards
const unflipCards = () => {

	lockBoard = true;

	setTimeout(() => {
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");

		resetBoard();

	}, 1500)

}

const resetBoard = () => {
	hasFlippedCard = false;
	lockBoard = false;
	firstCard = null;
	secondCard = null;
	// [hasFlippedCard, lockBoard] = [false, false];
	// [firstCard, secondCard] = [null, null];
}

const shuffle = () => {
	memoryCard.forEach(card => {
		let randomOrder = Math.floor(Math.random() * 17);
		card.style.order = randomOrder;
	})
}

shuffle();

// Press the "New Game" text to restart the game without page reload
const newGame = document.querySelector("h3");

newGame.addEventListener("click", () => {
	memoryCard.forEach(card => {
		card.classList.remove("flip");
	})
	shuffle();
	matchedCards = [];
	h2.textContent = "";


})
