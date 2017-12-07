//Bubble Sort:

//Get the number from textarea id numbers:
function getInput() {
  return document.getElementById('numbers').value;
}


//Split string value into an array of numbers, checking if current value is a number, removing NaN values:
function processInput(input) {
  var result = {
    numbers: [],
    wrongInputs: [],
    empties: 0//empties is integer  variable 0
  };
  var tokens = input.split(',');
  for (var i = 0; i < tokens.length; i++) {
    if (!!tokens[i]) { // checks against empty strings
      var x = Number(tokens[i]); // parses string to number
      if (!Number.isNaN(x)) { //if x is number ...
        result.numbers.push(x); // add x to results
      }
    }
  }
  return result;
}


//Bubble Sort algorithm:
function bubbleSort(numbers) {
  do {
    var swapped = false;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        var temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        swapped = true;
      }
    }
  }
  while (swapped === true)

  return numbers;
}


//Get the result from textarea id result:
function displayResult(result) {
  document.getElementById('result').value = result;
}


//sorting numbers:
function runSort() {
  var input = getInput();
  var processedInput = processInput(input);
  var sortedNumbers = bubbleSort(processedInput.numbers);
  displayResult(sortedNumbers);
}

