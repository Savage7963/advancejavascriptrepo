// Exercise Time!

// 1. Select the h1 element by "drilling into the DOM" and save it in a variable of your choice

// console.dir(document);
let choice = document.childNodes[1].childNodes[2].childNodes[1];

//2. access the parent element using the variable above 
let yourChoice=document.body.firstElementChild;
console.log(yourChoice.parentElement); // body
console.log(choice);// body

// BoNUs TAaSK Try using the variable from (1) to get access to the sibling element (i.e the element next to the h1 element);

console.dir(choice.nextElementSibling);

//3rd task get elemet by id the h1 elemet

let byId= document.getElementById('first-element');

console.log(byId);

// 4. Select the second p element with querySelector (you Might need to add something, in HTML code , eg a class) and store it in a new variable with a name of your choice you need a class selector to do so,

let paragraph = document.querySelector('.highlighted-paragraph');

console.log(paragraph);

// 5. change the value of p elemenmt 

paragraph.textContent='This was changed by me';
