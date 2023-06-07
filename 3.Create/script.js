///////Modify the script.js to create a new <section> with a random background-color for each learner in your group./////////////
////////This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>///////////////

 // Array of learners
 let learners = ["Me"," Myself", "I"];

// Function to add a new section for each learner
function addNewSection(learner) {
    // Create a new 'section' element
    let newSection = document.createElement("section");
  
    // Create a new 'p' element
    let paragraph = document.createElement("p");
  
    // Create a new text node with the learner's name
    let newContent = document.createTextNode(learner);
  
    // Append the text node to the newly created 'p' element
    paragraph.appendChild(newContent);
  
    // Append the 'p' element to the 'section' element
    newSection.appendChild(paragraph);
  
    // Generate a random color in hexadecimal format
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
    // Set the random color as the background color of the 'section' element
    newSection.style.backgroundColor = randomColor;
  
    // Set the text color of the 'p' element based on the background color
    paragraph.style.color = getTextColor(randomColor);
  
    // Select the 'article' element from the DOM
    const currentArticle = document.querySelector("article");
  
    // Append the new 'section' element to the 'article' element
    currentArticle.appendChild(newSection);
  }

  ////////////If the background is dark the text should be white, if the background is light the text should be black/////////////
  
  // Function to determine the text color based on the background color
  function getTextColor(hexColor) {
    // Convert the red, green, and blue components of the hex color to decimal
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);
  
    // Calculate the relative luminance of the color
    let luminance = 0.299*r + 0.587*g + 0.114*b;
  
    // If the color is dark (luminance <= 128), return "white"; otherwise, return "black"
    if (luminance <= 128) {
      return "white";
    } else {
      return "black";
    }
  }
  
 
  //////////////////Find a way so that everytime you load the page the order of the elements changes!//////////////

  // Function to shuffle an array
  function shuffleArray(array) {
    // Iterate over the array in reverse
    for (let i = array.length - 1; i > 0; i--) {
      // Select a random index
      let j = Math.floor(Math.random() * (i + 1));
  
      // Swap the current element with the randomly selected element
      [array[i], array[j]] = [array[j], array[i]];
    }
    
    // Return the shuffled array
    return array;
  }
  
  // Shuffle the learners array
  learners = shuffleArray(learners);
  
  // For each learner in the shuffled array, call the 'addNewSection' function
  learners.forEach((learner) => {
    addNewSection(learner);
  });
  
  