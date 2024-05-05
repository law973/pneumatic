const themeSwitcher = document.getElementById('theme-switcher');
const sunIcon = document.getElementById('sun_icon');
const moonIcon = document.getElementById('moon_icon');
let form = document.getElementById("form_tdee");

// Light Mode Styles
function lightMode() {
    sunIcon.style.visibility = "hidden";
    moonIcon.style.visibility = "visible";
}

// Dark Mode Styles
function darkMode() {
    moonIcon.style.visibility = "hidden";
    sunIcon.style.visibility = "visible";
}

// Switch Theme
function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (!currentTheme || currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Event Listener
themeSwitcher.addEventListener('click', switchTheme);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get all necessary inputs by their IDs
    let genderInputs = document.querySelectorAll("input[name='gender']");
    let age = document.getElementById("age");
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    let activity = document.getElementById("activity");

    // check if radio buttons are selected
    let genderSelected = Array.from(genderInputs).some(input => input.checked);

    // check if every field has a value
    if (
        genderSelected &&
        age.value &&
        weight.value &&
        height.value &&
        activity.value
    ) {
        alert("Full calculator functionality coming soon");
    } else {
        alert("Please ensure that you add a value for each input.");
    }
});