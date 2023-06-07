//Modify the script.js to create a new <section> with a random background-color for each learner in your group.
//This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

function addNewSection(name) {
  let newSection = document.createElement("section")
  // create a new section element
  let paragraph = document.createElement("p")
  // and give it some content
  let newContent = document.createTextNode(name)
  // append the text node to the newly created paragraph
  paragraph.appendChild(newContent)
  // append the paragraph to the section
  newSection.appendChild(paragraph)
  // generate a random color
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
  // set the random color as the section's background color
  newSection.style.backgroundColor = randomColor
  // select the article element
  const currentArticle = document.querySelector("article")
  // append the new section to the article
  currentArticle.appendChild(newSection)
}

addNewSection("Me")
addNewSection("Myself")
addNewSection("I")

//If the background is dark the text should be white, if the background is light the text should be black

//Find a way so that everytime you load the page the order of the elements changes!
