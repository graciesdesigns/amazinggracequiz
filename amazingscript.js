console.log("The Amazing Grace console is connected, yassss!");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const radio = document.querySelectorAll('input[type="radio"]');
const result = document.querySelectorAll('output');
const button = document.querySelector('#check');


const yay = "CORRECT!";
const bruh = "WRONG!";

button.addEventListener("click", function() {
    checkboxes.forEach(function(right, index) {
        if (right.checked && right.value === "correct") {
            result[index].textContent = yay;
        } else if (right.checked && right.value === "wrong") {
            result[index].textContent = bruh;
        }else {
            result[index].textContent = "";  
        }
    });
   radio.forEach(function(right1, index1) {
    const adjustedIndex = checkboxes.length + index1; // start after the last checkbox
    if (right1.checked && right1.value === "correct") {
        result[adjustedIndex].textContent = yay;
    } else if (right1.checked && right1.value === "wrong") {
        result[adjustedIndex].textContent = bruh;
    } else {
        result[adjustedIndex].textContent = "";  
    }
});


});
