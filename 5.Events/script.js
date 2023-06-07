// get current time in milliseconds
const _initTime = Date.now()

//  calculates the elapsed time in seconds from _initTime to the current time.
const getElapsedTime = () => {
  // Calculate the elapsed time by subtracting _initTime from the current time / 1000 to convert milliseconds to seconds.
  // The Number() function is used to convert the result to a number and toFixed(2) ensures the result is a string with a maximum of two decimals
  // The result is then concatenated with 's' to indicate seconds.
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

// Declare a function clickOnSquare that logs the second class of the clicked element (e.target.classList[1]) and the elapsed time since _initTime.
const clickOnSquare = (e) => {
  // Log the second class of the clicked element
  console.log(e.target.classList[1])
  // Log the elapsed time by calling the getElapsedTime function
  console.log(getElapsedTime())
}

// Get all elements with the class 'actionsquare' and assign them to the variable actionSquares
const actionSquares = document.querySelectorAll('.actionsquare')

// Iterate through each element in actionSquares
for (let actionSquare of actionSquares) {
  // Add an event listener to each element in actionSquares, which triggers the clickOnSquare function when the element is clicked.
  actionSquare.addEventListener('click', clickOnSquare)
}

///////////////////////////////// REQuirements: ////////////////////////////////////////////////////////////////////
//Everytime the user clicks on one of the action squares:
//Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
//Create a new <li> in the log below to state when the action was done It should look like this
//Add an event listener on the document <body>, listening for the keypress event.
//When the spacebar is hit randomly change the background color of the whole page
//Log when the spacebar is used the same way you used for the generated squares.
//When the l key is pressed the log gets deleted (erases the generated <li>s) using a while loop
//When the s key is pressed the squares get deleted (erases the generated squares)
//Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assign a list of potential colors
const colors = ["red", "green", "blue", "yellow", "pink"];

// Get reference to the .displayedsquare-wrapper
const wrapper = document.querySelector(".displayedsquare-wrapper");

// Get reference to the log
const log = document.querySelector(".log");

// Function to generate a random color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

