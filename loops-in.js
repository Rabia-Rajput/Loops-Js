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
    for (const key in dummyUserData){
        const newUserDataListItem = document.createElement('li');
        const outputText = key.toUpperCase() + ' : ' + dummyUserData[key];
        newUserDataListItem.textContent = outputText;
        outputDataElement.append(newUserDataListItem);
    }



}


 displayButton.addEventListener('click', displayuserDataButton);