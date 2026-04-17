console.log("Multi-Tool Website Loaded");
const quotes = [
  "Believe in yourself!",
  "Stay positive, work hard, make it happen.",
  "Success is the sum of small efforts.",
  "Every day is a new beginning.",
  "Believe you can and you're halfway there.",
  "The biggest adventure you can take is to live the life of your dreams.",
  "You have to believe in yourself when no one else does.",
  "Life is like a box of chocolates. You never know what you're gonna get.",	
  "Knowledge is power.",
  "When you have a dream, you've got to grab it and never let go."
];

const colors = [
  
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("quoteText").innerText = quotes[randomIndex];
  document.body.style.background = randomColor;
}

let expression = "";

function press(num) {
  expression += num;
  document.getElementById("calc-display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("calc-display").value = "";
}

function calculate() {
  try {
    expression = eval(expression); // calculate result
    document.getElementById("calc-display").value = expression;
    expression = ""; // reset after calculation
  } catch {
    document.getElementById("calc-display").value = "Error";
    expression = "";
  }
}
