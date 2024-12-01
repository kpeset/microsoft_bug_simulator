const experts = [
  {
    name: "Petit neveu qui sait un peu debug",
    description: "Il a vu un tuto youtube donc il sait faire.",
    icons: "neveu.jpg",
    price: 10,
    effect: 1,
  },
  {
    name: "Michel l'informaticien",
    description: "Windows XP est-il mieux que Windows 95 ? Là est la question.",
    icons: "michel.jpg",
    price: 100,
    effect: 10,
  },
  {
    name: "Le technicien du service compta",
    description:
      "Il est doué pour changer les piles de la souris. C'est peut-être ça la problème ?",
    icons: "compta.jpg",
    price: 250,
    effect: 25,
  },
];

const cookieButton = document.querySelector(".cookie_button");

let score = 0;
let clickIncrement = 1;
let autoIncrement = 1;

const displayScore = () => {
  const terminal = document.querySelector(".terminal_content");
  const scoreToDisplay = document.createElement("p");
  scoreToDisplay.classList.add("score_to_display");
  scoreToDisplay.textContent = `BUG FIXED : ${score}`;
  terminal.appendChild(scoreToDisplay);
  console.log(terminal);
};

const playSoundButton = () => {
  const audio = new Audio("../audio/click.mp3");
  audio.play();
};

const incrementOnClick = () => {
  score += clickIncrement;
};

const updateScore = () => {
  const scoreToDisplay = document.querySelector(".score_to_display");
  scoreToDisplay.textContent = `BUG FIXED : ${score}`;
};

const update = () => {
  playSoundButton();
  incrementOnClick();
  updateScore();
};

displayScore();

cookieButton.addEventListener("click", update);

const incrementOnNothing = () => {
  score += autoIncrement;
  updateScore();
};

const sayHello = () => {
  console.log("coucou");
};

setInterval(incrementOnNothing, 1000);
