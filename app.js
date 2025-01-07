// Get the <h1> element where the counter value will be displayed.
let h1Value = document.getElementById("h1");
// Get the "Decrease" button by its ID.
const decBtn = document.getElementById("dec");
// Get the "Reset" button by its ID.
const ResetBtn = document.getElementById("reset");
// Get the "Increase" button by its ID.
const incBtn = document.getElementById("inc");
// Initialize the counter value to 0.
let val = 0;
// Add a click event listener to the "Decrease" button.
decBtn.addEventListener("click",()=>{
    // Decrease the counter value by 1.
    val--;
    // Update the <h1> element's content to show the new counter value.
    h1Value.innerHTML = val;
})
// Add a click event listener to the "Reset" button.
ResetBtn.addEventListener("click",()=>{
    // Reset the counter value to 0.
    val = 0
    // Update the <h1> element's content to show the reset counter value.
    h1Value.innerHTML = val
})
// Add a click event listener to the "Increase" button.
incBtn.addEventListener("click",()=>{
    // Increase the counter value by 1.
    val++
    // Update the <h1> element's content to show the new counter value.
    h1Value.innerHTML = val;
})
