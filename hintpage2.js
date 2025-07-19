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

    if(questionNumber === 5) {
        hint.textContent = "A lot of screen time on the PC.";
    } else if (questionNumber === 6) {
        hint.textContent = "Gotham.";
    } else {
        hint.textContent = "Pandemic times."
    }
}