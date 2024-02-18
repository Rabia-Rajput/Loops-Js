// First Example : Sum Numbers
 const calculateSumButton = document.querySelector('#calculator button');

 function calculateSum(){
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;
    for (let i = 0; i <= enteredNumber; i++){
        sumUpToNumber = sumUpToNumber + i;
    }
    const outputResultElement = document.getElementById ('calculated-sum');
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
 }

 calculateSumButton.addEventListener('click', calculateSum);

 //HightLight Links

 const hightlightLinksButton = document.querySelector('#highlight-links button');

function highlightLinks(){
    const anchorElements = document.querySelectorAll('#highlight-links a');
    for (const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }

}


 hightlightLinksButton.addEventListener('click',  highlightLinks );


 //Display Information

 const dummyUserData = {
    firstName : 'Rabia',
    lastName: 'Rajput',
    age : 24,

 };

 const displayButton = document.querySelector('#user-data button');
function displayuserDataButton(){
    const outputDataElement = document.getElementById('output-user-data');
    outputDataElement.innerHTML = ''; // it will display data one time
    for (const key in dummyUserData){
        const newUserDataListItem = document.createElement('li');
        const outputText = key.toUpperCase() + ' : ' + dummyUserData[key];
        newUserDataListItem.textContent = outputText;
        outputDataElement.append(newUserDataListItem);
    }



}

 displayButton.addEventListener('click', displayuserDataButton);




 //Statistics / Roll Dice (while-loop)

 const rollDiceButtonElement = document.querySelector('#statistics button');


 function rollDice(){
    return Math.floor (Math.random() * 6) + 1; // Math.floor(): 5.6758 => 5

 }
 function deriveNumberOfDiceRolls(){
    const targetNumberInputElement =document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber){
        const rolledNumber = rollDice();
        numberOfRolls++ ;
        const newRollListItem = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListItem.textContent =  outputText;
        diceRollsListElement.append(newRollListItem);
        // if (rolledNumber == enteredNumber){
        //     hasRolledTargetNumber = true;
        // }
       hasRolledTargetNumber = rolledNumber == enteredNumber;
    }
    const outputTotalRolls = document.getElementById('output-total-rolls');
    const  outputTargetNumbers = document.getElementById('output-target-number');

      
    outputTargetNumbers.textContent = enteredNumber;
    outputTotalRolls.textContent = numberOfRolls;


 }

 rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
