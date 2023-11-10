// buildin window and functions

// window means the browser window / tab

// console.dir(document);

// in console we will see #document and the page in right gets highlighted and try to expand it

// we can also use doument insted of windpw.document

// window.document gives acces to the DOM

// will give all the property and meths in console

//to see how the HTML is converted into javascript you can use console.dir(document);

// we can also do window .alert

// window.alert();

// document obj holds information and functionality to the loaded content  e.g utility function to access HTML element

// documernt object is related to DOM 

//what is DOM 

// DOM IS DOCUMENT OBJECT MODEL  the data representation ('internal represntation') of parsed HTML code

// browser parse the HTMl code intp bunch of JS object every html code we created is converted into JS object then those object are nested into each other to represent our html structure  

// door to DOM is that document object , document is used to get acces to certain eemnt and get input value from the user to store in variable 

// we will now add the link in anchor tag with help of JAVASCRIPT  we wrote the below code with the help of console.dir(document) it will lead us to the way how browser converted the HTML to JAVASCRIPT and by following that we can write anc do changes in html with help of javascript but the JAVASCRIPT SHOULD BE LINKED 

// document.body.children[1].children[0].href='https://google.com';   
//it is drilling its not too much good 



// it will give error it is because unless you kniow how javascript works and how its been executed 

//it failed because our code execute too early because its in the head section and we need to make it execute it when the full HTML loads then the javascript should load so shift the src script from head to body or in html or create new element the another method is that is that you add another attribute that is 'defer' it activate it which means wait untl the whole document loads now it works 

//question arises that why then console.dir(document) works?? andswer is because the document exists from the start that is why we can log it imiditely and the content of it which is missing initally is basicaly added to the document object after we initally logged it so what ever we are outputting in our console is updated behind the scene .  thats why we log it but not change it  because when we change it  that happens instantly its not waitning until main the content  is there 


 //QUERY METHOD

let anchorElement=document.getElementById('external-link'); 
 // ectra flexability 
anchorElement.href='http://google.com';

anchorElement=document.querySelector( 'p a');             
 // it wants a CSS selector or i could also select my anchor tag will always select the first matching element not all 

// //  if you want all the you have to use document.querySelectorAll(); will return array of similkar elements

anchorElement.href='https://academind.com'


// 1.inserting new element in html using javascfript  using createElement();

let newAnchorElement=document.createElement('a');
newAnchorElement.href="https://mega.com";
newAnchorElement.textContent="This lead to mega";
// not yet displayed thats why we need 2nd and 3rd element

// 2. Get access to the parent that should hold the new element

let firstParagraph=document.querySelector('p');


// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// To Remove Elements

// Select element

let firH1Element = document.querySelector('h1');

// Remove it

// firH1Element.remove(); // for newr browser

firH1Element.parentElement.removeChild(firH1Element);

//MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);
// i got it

// innHTML property is bit like textContent

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML='Hi this is <strong> important </strong>'; // no line break you can add a concatination for line  break 

// EVents 

