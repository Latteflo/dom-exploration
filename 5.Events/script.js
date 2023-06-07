// get current time in milliseconds
const _initTime = Date.now()

//  calculates the elapsed time in seconds from _initTime to the current time.
const getElapsedTime = () => {
  // Calculate the elapsed time by subtracting _initTime from the current time / 1000 to convert milliseconds to seconds.
  // The Number() function is used to convert the result to a number and toFixed(2) ensures the result is a string with a maximum of two decimals
  // The result is then concatenated with 's' to indicate seconds.
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s"
}

// Declare a function clickOnSquare that logs the second class of the clicked element (e.target.classList[1]) and the elapsed time since _initTime.
const clickOnSquare = (e) => {
  // Log the second class of the clicked element
  console.log(e.target.classList[1])
  // Log the elapsed time by calling the getElapsedTime function
  console.log(getElapsedTime())
}

// Get all elements with the class 'actionsquare' and assign them to the variable actionSquares
const actionSquares = document.querySelectorAll(".actionsquare")

// Iterate through each element in actionSquares
for (let actionSquare of actionSquares) {
  // Add an event listener to each element in actionSquares, which triggers the clickOnSquare function when the element is clicked.
  actionSquare.addEventListener("click", clickOnSquare)
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
const colors = ["red", "green", "blue", "yellow", "pink"]

// Get reference to the .displayedsquare-wrapper
const wrapper = document.querySelector(".displayedsquare-wrapper")

// Get global reference of the ul as we will use it inside of functions too
var ul = document.querySelector("ul")

// Function to generate a random color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

// Add click event to action squares
actionSquares.forEach((actionSquare) => {
  actionSquare.addEventListener("click", (e) => {
    // Create new div and assign class and color
    const div = document.createElement("div") /// creates new div
    div.classList.add("displayedsquare", e.target.classList[1]) ///assign class
    wrapper.appendChild(div) ///append child

    // Create new ul entry as li items
    const li = document.createElement("li") // create li bucket for info
    li.textContent = `[ ${getElapsedTime()} ] Created a new square with ${
      e.target.classList[1]
    } color ` /// add context to li - string and value
    ul.appendChild(li) /// append child to parent
  })
})

// Add keypress event to body
document.body.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    //keyCode is deprecated that's why I use code
    // Change the background color of the page when spacebar is pressed
    document.body.style.backgroundColor = getRandomColor()
    // Log the event
    const li = document.createElement("li") ///create li bucket
    li.textContent = `[ ${getElapsedTime()} ] Background color was changed.` ///add text
    ul.appendChild(li) //append child
  } else if (e.code === "KeyL") {
    // Delete ul entries when 'l' key is pressed
    while (ul.firstChild) {
      // while there is a child in ul
      ul.removeChild(ul.firstChild) // we remove it
    }
  } else if (e.code === "KeyS") {
    // Delete squares when 's' key is pressed
    const squares = document.getElementsByClassName("displayedsquare") // select container with class name for squares
    Array.from(squares).forEach((square) => {
      //turn it into array and loop trough each of them to remove the children
      square.parentNode.removeChild(square)
    })
  }
})

// Add a click event listener to the 'wrapper' element
wrapper.addEventListener("click", (e) => {
  // Check if the clicked element has a class 'displayedsquare'
  if (e.target.classList.contains("displayedsquare")) {
    // Display an alert with the color of the clicked square assuming that the color is added as a second class
    alert(`The color of this square is ${e.target.classList[1]}`)
  }
})
