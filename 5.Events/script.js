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

