////////////////Requirements////////////////////////
/*Use childNodes to list all the children from the <ul>
Write a for loop to iterate over every child.
In this loop:
Use a condition in the loop to only iterate over element nodes 
Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
Since Fast and Furious is the most important franchise ever, add a class .important to the element
Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element
Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display:
'The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.'

(*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).

(*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, 
however Fast and Furious should remain the first element (most important franchise ever, remember?)

(*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
Create a new <div> before the list, using createElement and insertBefore

Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"
Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')*/

// Get the ul element
let ul = document.querySelector("ul")

// Get all children nodes of the ul
let children = ul.childNodes

// Function to handle the click event -alerts the name of the clicked movie with the exception of FF
function handleClick(e) {
  // If 'Fast and Furious' is clicked, display the special message Diogo wants
  if (e.target.textContent.includes("Fast and Furious")) {
    alert(
      "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
    )
  } else {
    alert(e.target.textContent) // else, display the name of the clicked item
  }
}
// Iterate over every child
for (let i = 0; i < children.length; i++) {
  // Check if the node is an element node
  if (children[i].nodeType === 1) {
    // Add the click event listener
    children[i].addEventListener("click", handleClick)

    // Check if the element contains 'Fast and Furious'
    if (children[i].textContent.includes("Fast and Furious")) {
      ul.insertBefore(children[i], ul.firstChild) // Move it to the top of the list
      children[0].classList.add("important") // Add the 'important' class to it
    }
  }
}

// Shuffle the titles but keep FF to the top
document.body.addEventListener("keypress", (e) => {
  if (e.code === "R") {
    // Create a new array with the children of the ul
    let array = Array.from(ul.children)
    let important = array.splice(  
      array.findIndex((item) => item.textContent.includes("Fast and Furious")),
      1
    ) // remove the 'Fast and Furious' item
    array.sort(() => Math.random() - 0.5) //shuffle the rest
    array.unshift(important[0]) //add 'Fast and Furious' back at the start
    // Append each item in the new order
    array.forEach((item) => ul.appendChild(item))
  }
  if (e.code === "D") {
    // Clone 'Fast and Furious' item
    let clone = document.querySelector(".important").cloneNode(true)
    ul.appendChild(clone) //// append it to the ul
  }
})

//Using createElement, create a <select> tag into the previously created <div>, 
//with two <option>s in it: "important franchises" and "normal franchises"

//let selectorContainer = document.createElement("div") /// created the div
//document.body.appendChild(selectorContainer)
//let selector= document.createElement("select")// created the selector
//let option1=document.createElement('option').textContent="important francises" //option 1
//let option2= document.createElement('option').textContent="normal francises"///option 2
//selectorContainer.appendChild("select")
//selector.appendChild('option1')
//selector.appendChild('option2') // we append the 2 options
// // put the selector inside the div


//selector.addEventListener("change", handleChange)   

//const handleChange =(change)=>{
//    switch (change) {
//        case '0':
//            console.log(option1)
//            break;   
//        case '1':
//            console.log(option2)
//            break;
//    } 
//}

//Add an eventListener to the <select>, on change,
// if the option "important franchise" is chosen, only display items of the list that have the class .important.
//  (hint: you can toggle visibility using element.style.visibility = 'hidden')*/
