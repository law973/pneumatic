// Light & Dark Themes ----------

const themeSwitcher = document.getElementById('theme-switcher');
const sunIcon = document.getElementById('sun_icon');
const moonIcon = document.getElementById('moon_icon');

const lightTheme = () => {
    sunIcon.style.visibility = "hidden";
    moonIcon.style.visibility = "visible";
    themeSwitcher.title = "Dark Theme";
}

const darkTheme = () => {
    moonIcon.style.visibility = "hidden";
    sunIcon.style.visibility = "visible";
    themeSwitcher.title = "Light Theme";
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

// Check Local Storage For Theme ----------

// const currentThemeFromLocalStorage = localStorage.getItem('theme');
// if (currentThemeFromLocalStorage) {
//     document.documentElement.setAttribute('data-theme', currentThemeFromLocalStorage);
//     if (currentThemeFromLocalStorage === 'dark') {
//       darkMode();
//     } else {
//       lightMode();
//     }
//   }

// TDEE Calculator Form Functionality ----------

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

// Navigation ----------

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

// Calorie Goal Slider ----------

const slider = document.getElementById("calorie_goal_slider");
const sliderOutput = document.getElementById("calorie_goal_output");

const updateSlider = () => {
    let value = slider.value;
    value = parseInt(value);

    switch(value) {
        case 1:
            sliderOutput.innerHTML = "Lose Weight: (2.00 lb / week)";
            break;
        case 2:
            sliderOutput.innerHTML = "Lose Weight: (1.75 lb / week)";
            break;
        case 3:
            sliderOutput.innerHTML = "Lose Weight: (1.50 lb / week)";
            break;
        case 4:
            sliderOutput.innerHTML = "Lose Weight: (1.25 lb / week)";
            break;
        case 5:
            sliderOutput.innerHTML = "Lose Weight: (1.00 lb / week)";
            break;
        case 6:
            sliderOutput.innerHTML = "Lose Weight: (0.75 lb / week)";
            break;
        case 7:
            sliderOutput.innerHTML = "Lose Weight: (0.50 lb / week)";
            break;
        case 8:
            sliderOutput.innerHTML = "Lose Weight: (0.25 lb / week)";
            break;
        case 9:
            sliderOutput.innerHTML = "Maintain Weight";
            break;
        case 10:
            sliderOutput.innerHTML = "Gain Weight: (0.25 lb / week)";
            break;
        case 11:
            sliderOutput.innerHTML = "Gain Weight: (0.50 lb / week)";
            break;
        case 12:
            sliderOutput.innerHTML = "Gain Weight: (0.75 lb / week)";
            break;
        case 13:
            sliderOutput.innerHTML = "Gain Weight: (1.00 lb / week)";
            break;
        case 14:
            sliderOutput.innerHTML = "Gain Weight: (1.25 lb / week)";
            break;
        case 15:
            sliderOutput.innerHTML = "Gain Weight: (1.50 lb / week)";
            break;
        case 16:
            sliderOutput.innerHTML = "Gain Weight: (1.75 lb / week)";
            break;
        case 17:
            sliderOutput.innerHTML = "Gain Weight: (2.00 lb / week)";
            break;
        default:
            sliderOutput.innerHTML = "Gain Weight: (0.25 lb / week)";
    }
}

slider.addEventListener('input', updateSlider);

window.onload = updateSlider;