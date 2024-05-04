const themeSwitcher = document.getElementById('theme-switcher');
let form = document.getElementById("form_tdee");

// Light Mode Styles
function lightMode() {
    themeSwitcher.innerText = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M524-40q-84 0-157.5-32t-128-86.5Q184-213 152-286.5T120-444q0-146 93-257.5T450-840q-18 99 11 193.5T561-481q71 71 165.5 100T920-370q-26 144-138 237T524-40Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T504-425q-61-61-97-138t-43-163q-77 43-120.5 118.5T200-444q0 135 94.5 229.5T524-120Zm-20-305Z"/></svg>`
}

// Dark Mode Styles
function darkMode() {
    themeSwitcher.innerText = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>`
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