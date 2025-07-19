const character = document.getElementById("minigrace");
const hintbox = document.getElementById("hintBox");

character.addEventListener("click", function() {
    if (hintbox.style.display === "block") {
    hintbox.style.display = "none";
} else {
    hintbox.style.display = "block";
}
});


function showHint(questionNumber) {
    const hint = document.getElementById("hintMessage");

    if(questionNumber === 8) {
        hint.textContent = "The ____  Grace ran was in miles.";
    } else if (questionNumber === 9) {
        hint.textContent = "Check out oogechee on Instagram!";
    } else {
        hint.textContent = "Some number between 1 and 4";
    } 
}