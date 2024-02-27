let cards = document.querySelectorAll(".card");
let icons = document.querySelectorAll("i");
let openCards = [];
let matchedPairs = 0;
let score = 0;
let scoreDisplay = document.getElementById("score");
let resetButton = document.getElementById("resetButton");

function gameStrat() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            if (!cards[i].classList.contains("move") && openCards.length < 2) {
                cards[i].classList.toggle("move");
                icons[i].style.display = 'block';
                openCards.push({ card: cards[i], icon: icons[i] });
                if (openCards.length === 2) {
                    if (openCards[0].icon.className === openCards[1].icon.className) {
                        matchedPairs++;
                        score++;
                        scoreDisplay.textContent = score;
                        openCards = [];
                    } else {
                        setTimeout(() => {
                            openCards.forEach(cardObj => {
                                cardObj.card.classList.toggle("move");
                                cardObj.icon.style.display = 'none';
                            });
                            openCards = [];
                        }, 700);
                    }
                }
            }
        });
    }
}

function resetGame() {
    openCards = [];
    matchedPairs = 0;
    score = 0;
    scoreDisplay.textContent = score;
    icons.forEach(icon => {
        icon.style.display = 'none';
    });
    cards.forEach(card => {
        card.classList.remove("move");
    });
    gameStrat();
}

gameStrat();
resetButton.addEventListener("click", resetGame);
