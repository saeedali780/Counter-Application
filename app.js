let h1Value = document.getElementById("h1");
const decBtn = document.getElementById("dec");
const ResetBtn = document.getElementById("reset"); 
const incBtn = document.getElementById("inc");
let val = 0;

decBtn.addEventListener("click",()=>{
    val--;
    h1Value.innerHTML = val;
})

ResetBtn.addEventListener("click",()=>{
    val = 0
    h1Value.innerHTML = val
})

incBtn.addEventListener("click",()=>{
    val++
    h1Value.innerHTML = val;
})
