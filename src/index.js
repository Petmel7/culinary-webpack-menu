import menuHbs from "./templates/menu.hbs";
import menuJson from "./menu.json";

const jsmenu = document.querySelector(".js-menu");

import "./styles/style.css";

const markup = menuHbs(menuJson);
jsmenu.insertAdjacentHTML("beforeend", markup);




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