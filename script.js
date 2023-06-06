//////// printing the document title in the console.log//////
console.log(document.title) /// expected answer :"Alchemy for beginers"

//////// changing the document title /////

document.title = "Modifying the DOM"
console.log(document.title) ///// expected answer : " Modifying the DOM"

/////Changing the background color of the body to hot pink (#FF69B4)//////////
document.body.style.backgroundColor = "#FF69B4"

/////////Changing the background color of the body to a random color///////////
document.body.style.backgroundColor = "#" + Math.floor(0xffffff * Math.random())

/////////Displaying the children of body//////
const genealogycalTree = document.body.children
for (let i = 0; i < genealogycalTree.length; i++) {
  console.log(genealogycalTree[i])
}
