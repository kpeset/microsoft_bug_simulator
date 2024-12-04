const experts = [
  {
    name: "Petit neveu qui sait un peu debug",
    title: "neveu.exe",
    description: "Il a vu un tuto youtube donc il sait faire.",
    icons: "neveu.jpg",
    price: 10,
    effect: 1,
  },
  {
    name: "Michel l'informaticien",
    title: "michel.exe",
    description: "Windows XP est-il mieux que Windows 95 ? Là est la question.",
    icons: "michel.jpg",
    price: 100,
    effect: 2,
  },
  {
    name: "Le technicien du service compta",
    title: "compta.exe",
    description:
      "Il est doué pour changer les piles de la souris. C'est peut-être ça la problème ?",
    icons: "compta.jpg",
    price: 250,
    effect: 4,
  },
  {
    name: "Le Hacker du Lycée",
    title: "hacker.exe",
    description:
      "Il a craqué des jeux piratés et connaît des raccourcis obscurs.",
    icons: "hacker.jpg",
    price: 500,
    effect: 10,
  },
  {
    name: "L'Équipe de Support d'Orange",
    title: "support.exe",
    description:
      "Ils suivent un script automatisé. Parfois, ça marche, parfois non.",
    icons: "orange.png",
    price: 2000,
    effect: 25,
  },
  {
    name: "ChatGPT",
    title: "chatgpt.exe",
    description:
      "Pose la bonne question et l'IA te donnera peut-être la bonne réponse.",
    icons: "chatgpt.png",
    price: 5000,
    effect: 50,
  },
  {
    name: "Zéro Cool",
    title: "zero_c.exe",
    description: "Bats toi avec les meilleurs... Ou crève comme les autres.",
    icons: "zero.jpg",
    price: 7500,
    effect: 75,
  },
  {
    name: "McKay de Stargate",
    title: "mckay.exe",
    description:
      "Il râle beaucoup, mais il résout des problèmes complexes comme personne.",
    icons: "mckay.webp",
    price: 10000,
    effect: 100,
  },
  {
    name: "Lex Murphy",
    title: "lex.exe",
    description:
      "Elle connait Unix mais ça devrait le faire tant qu'il y a des dinosaures.",
    icons: "lex.jpg",
    price: 15000,
    effect: 120,
  },
  {
    name: "L'Équipe de Développeurs d'Ubisoft",
    title: "ubisoft.exe",
    description:
      "Avec eux, les bugs deviennent des fonctionnalités. Acheter un DLC, peut-être ?",
    icons: "ubisoft.jpg",
    price: 25000,
    effect: 200,
  },
  {
    name: "Bill Gates",
    title: "bgates.exe",
    description:
      "Le créateur de Windows lui-même. Il met ses ressources à ton service.",
    icons: "billgates.png",
    price: 50000,
    effect: 500,
  },
  {
    name: "Neo (Matrix)",
    title: "neo.exe",
    description:
      "Il voit le code, il est le code. Cliquer devient une simple formalité.",
    icons: "neo.png",
    price: 100000,
    effect: 1000,
  },
  {
    name: "Le Chat qui monte sur le clavier",
    title: "chat.exe",
    description:
      "Il marche sur toutes les touches en même temps. Imprévisible mais efficace.",
    icons: "chat.png",
    price: 15000,
    effect: 150,
  },
  {
    name: "L'Équipe de Développeurs Ultime",
    title: "ultima.exe",
    description:
      "Linus Torvalds, Dennis Ritchie et d'autres légendes. Aucun bug ne leur résiste.",
    icons: "dream.webp",
    price: 500000,
    effect: 5000,
  },
  {
    name: "L'Univers Lui-Même (Bug Originel)",
    title: "universe.exe",
    description:
      "Et si le bug était une illusion et toi le véritable problème... ?",
    icons: "glitch.jpg",
    price: 1000000,
    effect: 10000,
  },
];

const cookieButton = document.querySelector(".cookie_button");

let score = 50000;
let clickIncrement = 1;
let autoIncrement = 0;

let availableBuy = [];

const displayScore = () => {
  const terminal = document.querySelector(".terminal_content");
  const scoreToDisplay = document.createElement("p");
  scoreToDisplay.classList.add("score_to_display");
  scoreToDisplay.textContent = `BUG FIXED : ${score}`;
  terminal.appendChild(scoreToDisplay);
  console.log(terminal);
};

const displayIncrement = () => {
  const terminal = document.querySelector(".terminal_content");
  const incrementToDisplay = document.createElement("p");
  incrementToDisplay.classList.add("increment_to_display");
  incrementToDisplay.textContent = `CLICK BY/S : ${autoIncrement}`;
  terminal.appendChild(incrementToDisplay);
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
  const incrementToDisplay = document.querySelector(".increment_to_display");
  scoreToDisplay.textContent = `BUG FIXED : ${score}`;
  incrementToDisplay.textContent = `CLICK BY/S : ${autoIncrement}`;
};

const update = () => {
  playSoundButton();
  incrementOnClick();
  updateScore();
};

const checkIfICanBuy = () => {
  availableBuy = experts.filter((expert) => {
    return expert.price <= score;
  });
};

const displayIcons = () => {
  const iconsSection = document.querySelector(".icons_section");
  iconsSection.innerHTML = "";

  availableBuy.forEach((article) => {
    const icon = document.createElement("div");
    const imgIcon = document.createElement("img");
    const titleIcon = document.createElement("p");
    icon.classList.add("cta_icon");
    icon.setAttribute("price", article.price);
    icon.setAttribute("effect", article.effect);
    imgIcon.src = "../docs/assets/img/icons/" + article.icons;
    titleIcon.textContent = article.title;
    icon.appendChild(imgIcon);
    icon.appendChild(titleIcon);
    iconsSection.appendChild(icon);
    console.log(icon.getAttribute("price"));

    icon.addEventListener("click", () => {
      score -= icon.getAttribute("price") * 1;
      autoIncrement += icon.getAttribute("effect") * 1;
      checkIfICanBuy();
    });
  });
};

const incrementOnNothing = () => {
  score += autoIncrement;
  updateScore();
  checkIfICanBuy();
  displayIcons();
};

displayScore();
displayIncrement();

cookieButton.addEventListener("click", update);

setInterval(() => {
  incrementOnNothing();
  autoIncrement > 0 ? playSoundButton() : null;
}, 1000);
