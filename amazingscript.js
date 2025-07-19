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
            console.log("Correct!");
        } else if (right.checked && right.value === "wrong") {
            result[index].textContent = bruh;
            console.log("Wrong!");
        }else {
            result.textContent = "";
        }
    });
   radio.forEach(function(right1, index1) {
    const adjustedIndex = checkboxes.length + index1; 
    if (right1.checked && right1.value === "correct") {
        result[adjustedIndex].textContent = yay;
        console.log("Correct!");
    } else if (right1.checked && right1.value === "wrong") {
        result[adjustedIndex].textContent = bruh;
        console.log("Wrong");
    } else {
        result[adjustedIndex].textContent = "";  
    }
    });
});
