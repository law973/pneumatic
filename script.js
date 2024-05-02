let form = document.getElementById("form_tdee");

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