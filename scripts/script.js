console.log("test");

const body = document.body;

const displayStructure = () => {
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  body.appendChild(main);
  body.appendChild(footer);
};

const displayTitle = () => {
  const header = document.getElementsByTagName("header");
  const title = document.createElement("h1");
  title.innerText = "Microsoft Bug Simulator";
  header[0].appendChild(title);
};

const displayCookieSection = () => {
  const main = document.getElementsByTagName("main");
  const section = document.createElement("section");
  section.classList.add("cookie_section");
  main[0].appendChild(section);
};

const displayPowerSection = () => {
  const main = document.getElementsByTagName("main");
  const section = document.createElement("section");
  section.classList.add("power_section");
  main[0].appendChild(section);
};

const displayShoppingSection = () => {
  const main = document.getElementsByTagName("main");
  const section = document.createElement("section");
  section.classList.add("shopping_section");
  main[0].appendChild(section);
};

displayStructure();
displayTitle();
displayCookieSection();
displayPowerSection();
displayShoppingSection();
