// Light & Dark Themes

const themeSwitcher = document.getElementById('theme-switcher');
const sunIcon = document.getElementById('sun_icon');
const moonIcon = document.getElementById('moon_icon');

const lightTheme = () => {
    sunIcon.style.visibility = "hidden";
    moonIcon.style.visibility = "visible";
}

const darkTheme = () => {
    moonIcon.style.visibility = "hidden";
    sunIcon.style.visibility = "visible";
}

const switchTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (!currentTheme || currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkTheme();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightTheme();
    }
}

themeSwitcher.addEventListener('click', switchTheme);

// Check Local Storage For Theme

// const currentThemeFromLocalStorage = localStorage.getItem('theme');
// if (currentThemeFromLocalStorage) {
//     document.documentElement.setAttribute('data-theme', currentThemeFromLocalStorage);
//     if (currentThemeFromLocalStorage === 'dark') {
//       darkMode();
//     } else {
//       lightMode();
//     }
//   }

// TDEE Calculator Form Functionality

let form = document.getElementById("form_tdee");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get All Necessary Inputs By Their IDs
    let genderInputs = document.querySelectorAll("input[name='gender']");
    let age = document.getElementById("age");
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    let activity = document.getElementById("activity");

    // Check If Radio Buttons Are Selected
    let genderSelected = Array.from(genderInputs).some(input => input.checked);

    // Check If Every Field Has A Value
    if (
        genderSelected &&
        age.value &&
        weight.value &&
        height.value &&
        activity.value
    ) {
        alert("Full calculator functionality coming soon!");
    } else {
        alert("Please add a value for each input!");
    }
});

// Navigation

const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');

const toggleMenu = () => {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
}

const hideMenu = () => {
  nav.classList.remove('active');
  menuIcon.classList.remove('active');
}