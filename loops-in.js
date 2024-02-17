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