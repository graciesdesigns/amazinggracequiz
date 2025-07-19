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

    if(questionNumber === 1) {
        hint.textContent = "The music genres are R&B, Indie and Afrobeats.";
    } else if (questionNumber === 2) {
        hint.textContent = "This show has a lot of seasons.";
    } else if (questionNumber === 3) {
        hint.textContent = "Food :3";
    } else {
        hint.textContent = "A nigerian food.";
    }
}