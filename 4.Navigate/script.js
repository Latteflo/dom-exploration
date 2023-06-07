/*Modify the script.js, do not create any new nodes!

Select the last child of the <ol> tag and put it at the beginning of the list
Move the <h2> of the third section in the second one and vice-versa
Delete the last section from the DOM, we don't need it anyways
*/

// Select the <ol> tag from the document
let olElementWeWantToSelect = document.querySelector('ol');

// Select the last child of the <ol> tag
let lastChild = olElementWeWantToSelect.lastElementChild;

// Insert the last child at the beginning of the <ol> list
olElementWeWantToSelect.insertBefore(lastChild, olElementWeWantToSelect.firstElementChild);

// Select all <h2> tags within <section> tags
let allTheH2s = document.querySelectorAll('section h2');

// Clone the <h2> of the second section
let h2OfSection2 = allTheH2s[1].cloneNode(true);

// Clone the <h2> of the third section
let h2OfSection3 = allTheH2s[2].cloneNode(true);

// Replace the <h2> of the second section with the cloned <h2> of the third section
allTheH2s[1].parentNode.replaceChild(h2OfSection3, allTheH2s[1]);

// Replace the <h2> of the third section with the cloned <h2> of the second section
allTheH2s[2].parentNode.replaceChild(h2OfSection2, allTheH2s[2]);

// Select all <section> tags
let sections = document.querySelectorAll('section');

// Remove the last <section> from the document
sections[sections.length - 1].remove();

