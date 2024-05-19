const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const results = document.getElementById('results-div');
clearButton.addEventListener('click', () => {
  results.innerHTML = "";
})
checkButton.addEventListener('click', () => {
  const phoneNumber = userInput.value; 
  if(phoneNumber === ""){
    alert('Please provide a phone number')    
    }
  else {
      let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
      if(regExp.test(phoneNumber) === true){
        results.innerText = `Valid US number: ${phoneNumber}`;
      }
      else {
        results.innerText = `Invalid US number: ${phoneNumber}`;
      }
    }
  })
