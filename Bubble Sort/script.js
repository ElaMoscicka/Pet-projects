//Bubble Sort:
var validInputRegExp = /^-?\d+(,-?\d+)*$/;

//Get the number from textarea id numbers:
function getInput(){
  return document.getElementById('numbers').value;
//"1, 3, 4, 5"
  /*function getInput(){
  var input = document.getElementById('numbers').value;

  return input*/
}

function validateInput(input) {
    return validInputRegExp.test(input); 
  /*function validateInput(input) {
    var isValid = validInputRegExp.test(input);
  
  return isValid;
*/
}

//Split string value into an array of numbers, checking if current value is a number, removing NaN values:
function getNumbers(input){
  return input.split(",").map(number => +number).filter(number => isNaN(number) === false);
//[1, 3, 4, 5]
  /*  function getNumbers(input){
var numbers = input.split(",").map(number => +number).filter(number => isNaN(number) === false);
  
  return numbers;*/
}

  
//Bubble Sort algorithm:
function bubbleSort(numbers){
 do{
  var swapped = false;
  for (var i = 0; i<numbers.length; i++){
    if (numbers[i]> numbers[i+1]){
      var temp = numbers[i];
      numbers[i] = numbers[i+1];
      numbers[i+1] = temp;
      swapped = true;
    }
  }
 }
  while(swapped === true)

    return numbers;
  /*function bubbleSort(numbers){
 var length = numbers.length-1;
 do{
  var swapped = false;
  for (var i = 0; i<length; i++){
    if (numbers[i]> numbers[i+1]){
      var temp = numbers[i];
      numbers[i] = numbers[i+1];
      numbers[i+1] = temp;
      swapped = true;
    }
  }
 }
  while(swapped === true)

    return numbers;*/
}

//Get the result from textarea id result:
function displayResult(result){
  document.getElementById('result').value = result;
}


//sorting numbers:
function runSort(){
  var input = getInput();
  
  var isValidInput = validateInput(input);
  
  if(isValidInput) {
      var numbers = getNumbers(input);
      var sortedNumbers = bubbleSort(numbers);
      displayResult(sortedNumbers);
  } else {
    alert('Invalid input!');
  }
}
