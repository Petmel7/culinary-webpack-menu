import menuHbs from "./templates/menu.hbs";
import menuJson from "./menu.json";

import "./styles/style.css";

const jsmenu = document.querySelector(".js-menu");

// const createGalleryList = ({ ingredients }) =>
// `${ingredients.map((ingredient) => `<li class="tag-list__item">${ingredient}</li>`).join('')}`

const markup = menuHbs();
jsmenu.insertAdjacentHTML("beforeend", markup);

const menuArrMarkup = menuJson.map(item => menuHbs(item)).join('');
jsmenu.insertAdjacentHTML("beforeend", menuArrMarkup);




// import menuHbs from "./templates/menu.hbs";
// import menuJson from "./menu.json";

// import "./styles/style.css";

// const jsmenu = document.querySelector(".js-menu");

// const markup = menuHbs();
// jsmenu.insertAdjacentHTML("beforeend", markup);

// const menuArrMarkup = menuJson.map(item => menuHbs(item)).join('');
// jsmenu.insertAdjacentHTML("beforeend", menuArrMarkup);






// import menuHbs from "./templates/menu.hbs";
// import menuJson from "./menu.json";

// const jsmenu = document.querySelector(".js-menu");

// import "./styles/style.css";

// const markup = menuHbs();
// jsmenu.insertAdjacentHTML("beforeend", markup);

// const menuArrMarkup = menuJson();
// jsmenu.insertAdjacentHTML("beforeend", menuArrMarkup);




const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

// Функція для встановлення теми
const setTheme = (theme) => {
  body.classList.remove(Theme.LIGHT, Theme.DARK);
  body.classList.add(theme);
};

// Функція для збереження вибраної теми в localStorage
const saveThemeToLocalStorage = (theme) => {
  localStorage.setItem('theme', theme);
};

// Функція для отримання збереженої теми з localStorage
const getSavedThemeFromLocalStorage = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : Theme.LIGHT;
};

// Встановлюємо початкову тему при завантаженні сторінки
const initialTheme = getSavedThemeFromLocalStorage();
setTheme(initialTheme);
if (initialTheme === Theme.DARK) {
  themeSwitchToggle.checked = true;
}

// Обробник події change на чекбоксі
themeSwitchToggle.addEventListener('change', (event) => {
  const selectedTheme = event.target.checked ? Theme.DARK : Theme.LIGHT;
  setTheme(selectedTheme);
  saveThemeToLocalStorage(selectedTheme);
});




//Друге завдання

// import simpleTemplate from './templates/simple.hbs';
// import listTemplate from "./templates/list.hbs"
// import arrTemplate from "./templates/array.hbs"
// import libsTemplate from "./templates/libs.hbs"
// import { base, list, frameworks, libs } from "./data/hbsData.js"

//Третє завдання

// import refs from "./js/refs.js";
// import { submitHundler } from "./js/handlers.js";
// import questionsTemplate from "./templates/questions.hbs";
// import serverData from "./data/serverData.js";

// import "./styles/style.css";

//Друге завдання

// const root = document.querySelector("#root");

// const markup = simpleTemplate(base);
// root.insertAdjacentHTML("beforeend", markup);

// const listMarkup = listTemplate(list);
// root.insertAdjacentHTML("beforeend", listMarkup);

// const arrMarkup = arrTemplate(frameworks);
// root.insertAdjacentHTML("beforeend", arrMarkup);

// const libsMarkup = libsTemplate(libs);
// root.insertAdjacentHTML("beforeend", libsMarkup);




//Перше завдання

// import example from "./images/bee-on-daisy.jpg";
// import imgSvg from "./images/google-icon.svg";
// import imgPng from "./images/png-transparent-butterfly-pink-free-butterflies-pics-purple-blue-image-file-formats.png";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");

// class Game {
//     name = "Violin Charades"
// }

// const myGame = new Game ();

// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement('img');
// img.src = example;
// app.append(img);

// const svgImg = document.createElement('img');
// svgImg.src = imgSvg;
// app.append(svgImg);

// const pngImg = document.createElement('img');
// pngImg.src = imgPng;
// app.append(pngImg);

// console.log(sum(2, 3));


//Третє завдання

// const markup = questionsTemplate(serverData);
// refs.root.insertAdjacentHTML("beforeend", markup);

// refs.form.addEventListener("submit", submitHundler);
