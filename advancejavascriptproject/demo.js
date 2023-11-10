// we wanna listen to every keystroke here in input field then we wanna count the ch num of character  and then when we didn that we want to update the span number with the remaining amount of character 

// so 60-num of character input 

// select the input field
console.log('hi');

let productNameInputElement=document.getElementById('product-name');

// get access to the element that need to be changed with javascript

let remainingCharsElement=document.getElementById('remaining-chars');

let maxAllowedChars=productNameInputElement.maxLength;

// set event on the input field because we wanna listen to every keystroke here in input field then we wanna count the ch num of character

function updateRemainingCharacters(event) {
    // now we need to read the what ever input given in the textfield so ...

    let enteredText= event.target.value;
    
    // need to find length of text which is entered by user

    let enteredTextLength=enteredText.length;

    console.log(enteredTextLength);

    //now get the max characters the user can put in field and minus it from the length of the charactyer then store the value in the variable

    let remainingCharacters = maxAllowedChars-enteredTextLength;

    remainingCharsElement.textContent=remainingCharacters;

    

    // to change the color of the span we need to target it 

    const spanElement=document.getElementById("remaining-chars");

    // spanElement.style.textAlign='left'; you can change the tyle using javascript

    // We can add a class with help of JavaScript 

    // spanElement.className='warning'; // now we added a class with javascript now because of css it is getting active if u have already given a class and this Js method will oveerride it and if you dont want to let this happen then you can do 
    // spanElement.className='warning some-class'; 

// change the css using boolean value in JavaScript using IF else statement

if (remainingCharacters===0) 
    {
        // spanElement.style.color='red'; or 
        remainingCharsElement.classList.add('beforewarning');
        productNameInputElement.classList.add('beforewarning');
        
    } 
    else if(remainingCharacters<=10){
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('beforewarning' );
        productNameInputElement.classList.remove('beforewarning');
    }
    else
    {
        // remainingCharsElement.style.color='black';
        // productNameInputElement.style.backgroundColor='bisque'; or  
        remainingCharsElement.classList.remove( 'warning');
        productNameInputElement.classList.remove( 'warning');  
    }

}

// after event it asks for the function so we gonna create the function above now then we will give it the call in this addEventListener()
productNameInputElement.addEventListener('input',updateRemainingCharacters);

