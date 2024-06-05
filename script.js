// Light & Dark Themes ----------

const themeSwitcher = document.getElementById('theme-switcher');
const sunIcon = document.getElementById('sun_icon');
const moonIcon = document.getElementById('moon_icon');

// Update Theme Icon & Text
const updateThemeIcon = (isDarkMode) => {
    sunIcon.style.visibility = isDarkMode ? "visible" : "hidden";
    moonIcon.style.visibility = isDarkMode ? "hidden" : "visible";
    themeSwitcher.title = isDarkMode ? "Light Theme" : "Dark Theme";
}
  
// Determine if dark mode is preferred
const prefersDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set the theme based on the preference
const setThemeBasedOnPreference = () => {
    const isDarkMode = prefersDarkMode();
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon(isDarkMode);
}

// Switch Theme 
const switchTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme === 'dark');
}

// Event Listener
themeSwitcher.addEventListener('click', switchTheme);

// Check Local Storage For Theme
const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    } else {
        setThemeBasedOnPreference();
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeBasedOnPreference);

// Initialize theme when the script loads
initializeTheme();

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