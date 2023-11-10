// paragraphElement = document.body.firstElementChild or 
let paragraphElement = document.querySelector('p');
function changeParagraphText(event) {
    paragraphElement.textContent='Clicked'
    // let enterdText=event.data; // This is diffefrent!

    console.log(event);
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement=document.querySelector('input');


function retriveuserInpput(event) {
    
    let newElement=document.createElement('p');
    let parentElements=document.querySelector('body');
    // let enterdText=inputElement.value; // we can use this or 
    let enterdText=event.target.value; // this is alternative approach 
    newElement.textContent=enterdText;
    parentElements.append(newElement);// to add a new elemebnt in html 
    // console.log(event); event is object will return many properties of the particular event 
    // let enterdText=event.data; // This is diffefrent!

    console.log(enterdText);
}
inputElement.addEventListener('input', retriveuserInpput); 


