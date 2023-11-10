// First Example : Sum Numbers
const calculateSumButtonElement = document.querySelector('#calculator button');// first button inside calculator id now even if we add any other button before calculator section then it wont work on that new button

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;
    // using for loop
    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;

    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);


// for of loop
// for highlighted links

const highlightLinksElementButton = document.querySelector('#highlight-links button');

function highlightLinks() {
    // for of loop
    // get acces to every anchor element one way to do it is by using QuerySelectorAll creates array of founded elements

    const anchorElements = document.querySelectorAll('#highlight-links a');


    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }

}

highlightLinksElementButton.addEventListener('click', highlightLinks);

// DISPLAY USER DATA USING FOR IN

const dummyUserData = {
    name: 'Atharva',
    age: 18,
    lastName: 'Jaiswal'
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = ''; //it will clear the ul element whenever you will click on the button or when the function is called 

    // displayUserData();


    for (const key in dummyUserData) {

        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ':' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText; outputDataElement.append(newUserDataListItemElement);

    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);


// Staticstics Roll the dice 

// we can use the while loop

const rollDiceBttonElement = document.querySelector('#statistics button');

function rollDice() {

    return Math.floor(Math.random()*6 +1);//math.floor 5.64=> 5

}

function derivedNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number'); // INPUTELEMENT

    const enteredNumber = targetNumberInputElement.value;
    // by adding + after = we can convert string to number

    const diceRollsListElement = document.getElementById('dice-rolls'); // UNORDERED LIST

    diceRollsListElement.innerHTML = ''; //TO AGAIN CEAR FOR EXISTING ELEMENTS 

    let hasRolledTargetNumber = false; //

    let numberOfRolls=0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber=true; 
        // }
        numberOfRolls++;

        const newRollListItemElement=document.createElement('li');

        const outputText='Roll'+numberOfRolls+':' + rolledNumber;

        newRollListItemElement.textContent=outputText;

        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber=rolledNumber==enteredNumber;
    }

    const outputTotalRollsElement=document.getElementById('output-total-rolls');

    const outputTargetNumberElement=document.getElementById('output-total-number');

    outputTargetNumberElement.textContent=enteredNumber;

    outputTotalRollsElement.textContent=numberOfRolls;



    outputTargetNumberElement.textContent=enteredNumber;

    outputTotalRollsElement
}

rollDiceBttonElement.addEventListener('click', derivedNumberOfDiceRolls);
