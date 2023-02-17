// Get display element and set default text
const display = document.querySelector("#display");
display.textContent = "0";

/**
 * Here, I dynamically create all the calculator keys for values 0-9.
 * I use a for loop, and then use the variable i for the value and
 * button text.
 */

const keys = document.querySelector("#keys"); // Get keys parent element from document

for (let i = 0; i < 10; i++) {
  const newKey = document.createElement("button"); // Create the key element

  newKey.setAttribute("class", "key"); // Set the new key's class to .key

  newKey.setAttribute("value", `${i}`); // Set the value for the button to i

  newKey.textContent = i;

  keys.append(newKey); // Append the new key to the keys parent element
}
