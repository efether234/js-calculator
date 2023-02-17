/**
 * Set a variable to represent the display section of the calculator.
 * Set the initial content of the display to "0".
 */
const display = document.querySelector("#display");
let displayText = "0";
display.textContent = displayText;

/**
 * Dynamically create all the calculator keys for values 0-9.
 * Use a for loop, and then use the variable i for the value and
 * button text.
 */

const numbers = document.querySelector("#numbers"); // Get keys parent element from document
const percentages = document.querySelector("#percentages"); // Get multipliers parent element

for (let i = 0; i < 10; i++) {
  const newNum = document.createElement("button"); // Create the key element
  newNum.setAttribute("class", "key"); // Set the new key's class to .key
  newNum.setAttribute("value", `${i}`); // Set the value for the button to i
  newNum.textContent = i; // Set text of the button to i
  numbers.append(newNum); // Append the new key to the keys parent element
}

/**
 * Change text on display when buttons are clicked.
 */
const keys = document.querySelectorAll(".key"); // create array with all the keys
keys.forEach((key) => {
  key.addEventListener("click", () => {
    // if display text is only 0, set to an empty string before
    // appending other digits to avoid leading zeroes.
    if (displayText === "0") {
      displayText = "";
    }
    displayText = displayText += key.value; // append value of clicked key to displayText
    display.textContent = displayText; // update text of display with displayText
  });
});

/**
 * Create keys for all the multipliers
 */

const tipOptions = [0.15, 0.18, 0.2, 0.22]; // common tipping percentages
tipOptions.forEach((percentage) => {
  const newPercentage = document.createElement("button");
  newPercentage.setAttribute("class", "key");
  newPercentage.setAttribute("value", `${percentage}`);
  newPercentage.textContent = percentage;
  percentages.append(newPercentage);
});
