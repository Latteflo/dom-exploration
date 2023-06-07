///////////////////////////////Requirements///////////////////////////////////////
/*- Add a `keyup` listener on the first input field, so that once you type a letter in this field, 
it goes into the `<span id="display-firstname">`. The content of the field and the span should always remain the same.
- Add a `keyup` listener on the second input (the number input), 
so that if the age is below 18 the content of the section `a-hard-truth` remains hidden,
 otherwise show them this hard to swallow fact.
- Well this is a common one. 
Add a `keyup` listener on both fields and show a visual hint (for instance turn the field red)
 if the password is too short (less than 6 characters) or if the password and its confirmation do not match. 
- Finally, use a `change` listener on the `<select>` field to toggle a dark mode on the whole page. 
*/

// Get references to the HTML elements we'll need to manipulate.
let firstNameInput = document.getElementById("firstname") //// first name field
let firstNameDisplay = document.getElementById("display-firstname") ///first name display field
let ageInput = document.getElementById("age") ////age field
let hardTruthSection = document.getElementById("a-hard-truth") /// message field
let passwordInput = document.getElementById("pwd") ////password 1st type
let passwordConfirmInput = document.getElementById("pwd-confirm") ////password confirm
let modeSelector = document.getElementById("toggle-darkmode") ////darkmode field

// Add a 'keyup' event listener to the first name input.
firstNameInput.addEventListener("keyup", function () {
  // Whenever a key is released, update the content of the span
  // with the current value of the input field.
  firstNameDisplay.textContent = firstNameInput.value
})

// Add a 'keyup' event listener to the age input.
ageInput.addEventListener("keyup", function () {
  // Check if the value of the age input is less than 18.
  if (ageInput.value < 18) {
    // If so, hide the 'hard truth' section.
    hardTruthSection.style.visibility = "hidden"
  } else {
    // Otherwise, show the 'hard truth' section.
    hardTruthSection.style.visibility = "visible"
  }
})

// Add a 'keyup' event listener to the password and password confirmation inputs.
passwordInput.addEventListener("keyup", checkPassword)
passwordConfirmInput.addEventListener("keyup", checkPassword)

function checkPassword() {
  // Check if the password is less than 6 characters long, or if the two passwords don't match.
  if (
    passwordInput.value.length < 6 ||
    passwordInput.value !== passwordConfirmInput.value
  ) {
    // If so, change the background color of the password fields to red.
    passwordInput.style.backgroundColor = "red"
    passwordConfirmInput.style.backgroundColor = "red"
  } else {
    // Otherwise, the background color goes green.
    passwordInput.style.backgroundColor = "lightgreen"
    passwordConfirmInput.style.backgroundColor = "lightgreen"
  }
}

// Add a 'change' event listener to the mode selector.
modeSelector.addEventListener("change", function () {
  // If the selected value is 'dark', change the background color of the body to black and the color to white.
  if (modeSelector.value === "dark") {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  } else {
    // If the selected value is 'light', change the background color of the body to white and the color to black.
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
})
