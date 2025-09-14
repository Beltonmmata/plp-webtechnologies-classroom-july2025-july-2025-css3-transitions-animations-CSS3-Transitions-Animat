// ========== Part 2: Functions, Scope, Parameters, Return Values ==========
let globalNumber = 10; // global scope

// Function with parameters & return value
function multiplyNumbers(a, b) {
  let result = a * b; // local scope
  return result;
}

function showCalculation() {
  let localNumber = 5; // local scope
  let result = multiplyNumbers(globalNumber, localNumber);
  document.getElementById(
    "calcResult"
  ).textContent = `Multiplying ${globalNumber} x ${localNumber} = ${result}`;
}

// ========== Part 3: Combining JS + CSS ==========
const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

// Function to toggle animation using classList
function triggerAnimation() {
  jsBox.classList.remove("animate"); // reset if already running
  void jsBox.offsetWidth; // trick to restart animation
  jsBox.classList.add("animate");
}

// Event listener
animateBtn.addEventListener("click", triggerAnimation);
