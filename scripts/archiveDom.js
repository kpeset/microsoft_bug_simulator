const body = document.body;

const displayStructure = () => {
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  body.appendChild(main);
  body.appendChild(footer);
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

const displayCookie = () => {
  const section = document.querySelector(".cookie_section");
  const cookie = document.createElement("div");
  const header = document.createElement("div");
  const headerText = document.createElement("p");
  const content = document.createElement("div");
  const typeError = document.createElement("div");
  const message = document.createElement("p");
  const crossErrorImg = document.createElement("img");
  const button = document.createElement("button");

  crossErrorImg.src = "../img/crosserror.png";

  cookie.classList.add("cookie");
  header.classList.add("header");
  content.classList.add("content");
  typeError.classList.add("type_error");
  headerText.textContent = "C:\\WINDOWS\\SYSTEM32\\COOKIE.EXE";
  message.textContent =
    "C:\\WINDOWS\\SYSTEM32\\COOKIE.EXE is not a valid Win32 application.";
  button.textContent = "OK";
  cookie.appendChild(header);
  section.appendChild(cookie);
  header.appendChild(headerText);
  cookie.appendChild(content);
  content.appendChild(typeError);
  typeError.appendChild(crossErrorImg);
  typeError.appendChild(message);
  content.appendChild(button);
};

const displayFooterDetails = () => {
  const footer = document.getElementsByTagName("footer");
  const start = document.createElement("div");
  const text = document.createElement("p");
  const logo = document.createElement("img");
  logo.src = "../img/logo.png";
  text.innerText = "démarrer";
  start.classList.add("start");
  footer[0].appendChild(start);
  start.appendChild(logo);
  start.appendChild(text);
};

displayStructure();
displayFooterDetails();
displayCookieSection();
displayPowerSection();
displayShoppingSection();
displayCookie();
