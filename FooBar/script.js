//Function Foobar//
function foobar() {
  var inputNumber = document.getElementById('input-number').value;
  var result = document.getElementById('result');
  
  
    // Clear div result before entering a number
  result.innerHTML = '';


  //checking if variable  is not given a value:
//TypeOf(inputNumber) != number ->protection from hacks and wrong formats
if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100 ) {
  document.getElementById('result').innerHTML = "Enter a number in the range 1 to 100.";
  return;
}

  // Foobar function, writes results into div result // 
for(var i=1; i<=inputNumber; i++){
  if ( i%3 === 0 && i%5 === 0 )
  {
    result.innerHTML += "<p class='fbr'>Foobar!</p>";
  } else if ( i%3 === 0 )  {
    result.innerHTML += "<p class='foo'>Foo</p>";
  } else if ( i%5 === 0 ) {
    result.innerHTML += "<p class='bar'>Bar</p>";
  } else {
    result.innerHTML += "<p>" + i + "</p>";
  }
}
}
