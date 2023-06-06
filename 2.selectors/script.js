////Add a title attribute to every element that has the important class///////////

let element = document.getElementsByClassName("important") //get all elements with the class of important
for (let i = 0; i < element.length; i++) {
  ///loop trought all elements
  element[i].setAttribute("title", "This is an important item.") ///add the attribute to each instance
}

/////Select all the img tags and loop through them. If they have no important class, turn their display property to none

let imagesDetected = document.querySelectorAll("img") /// get all images
for (let i = 0; i < imagesDetected.length; i++) {
  ///loop trough all of them
  if (!imagesDetected[i].classList.contains("important")) {
    /// check if image have the class of important - if it is true it does nothing
    imagesDetected[i].style.display = "none"
    ///if it is false it turns the display to none
  }
}

/////Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well

let paragraph = document.querySelectorAll("p") //// select all p elements
for (let i = 0; i < paragraph.length; i++) {
  ///loops trough all of them
  console.log(paragraph[i].textContent) /// prints the content of the paragraph
  if (paragraph[i].classList.length > 0) {
    ////checks of there are classes declared
    console.log(paragraph[i].classList) /// prints the classes
  }
}

////Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

let paragraphColorCheck = document.querySelectorAll("p") ////select all p elements

for (let i = 0; i < paragraphColorCheck.length; i++) {
  //// loops trough all of them
  if (!paragraphColorCheck[i].classList.length > 0) {
    //// checks if the p does NOT have a class
    paragraphColorCheck[i].style.color =
      "#" + Math.floor(0xffffff * Math.random()) ///gives a random color to the p
  }
}
