window.onload = function() {

  ////////// VARIABLE DECLARATIONS

  // number button variable declarations

  var zeroButton = document.getElementById("zero");
  var oneButton = document.getElementById("one");
  var twoButton = document.getElementById("two");
  var threeButton = document.getElementById("three");
  var fourButton = document.getElementById("four");
  var fiveButton = document.getElementById("five");
  var sixButton = document.getElementById("six");
  var sevenButton = document.getElementById("seven");
  var eightButton = document.getElementById("eight");
  var nineButton = document.getElementById("nine");

  // operator button variable declarations

  var plusButton = document.getElementById("plus");
  var minusButton = document.getElementById("minus");
  var timesButton = document.getElementById("times");
  var dividedByButton = document.getElementById("divided_by");

  // action button variable declarations

  var clearButton = document.getElementById("clear");
  var enterButton = document.getElementById("enter");

  // display variable declarations

  var operatorDisplay = document.getElementById("operator_display");
  var resultDisplay = document.getElementById("result_display_value");

  // a div to hold text alerts during and after calculations

  var calculateTracker = document.getElementById("calculate-tracker");

  // number declarations

  var currentNum = "";
  var previousNum = "";
  var operator = "";


  ////////// FUNCTIONS

  // number button function

  var numberFunction = function(numberButton) {
    numberButton.onclick = function(event) {
      console.log(numberButton.innerHTML + ' was clicked!!!');
      calculateTracker.innerHTML = 'Calculating..........';
      resultDisplay.innerHTML += numberButton.innerHTML;
      currentNum = resultDisplay.innerHTML;
      console.log('The current number is: ' + currentNum);
      console.log('The previous number is: ' + previousNum);
    }
  }

  // operator button function

  var operatorFunction = function(operatorButton) {
    operatorButton.onclick = function(event) {
      console.log(operatorButton.innerHTML + ' was clicked!!!');
      operatorDisplay.innerHTML = operatorButton.innerHTML;
      resultDisplay.innerHTML = "";

      previousNum = currentNum;

      if (operatorButton === plusButton) {
        operator = "+";
      } 
      else if (operatorButton === minusButton) {
        operator = "-";
      }
      else if (operatorButton === timesButton) {
        operator = "*";
      }
      else if (operatorButton === dividedByButton) {
        operator = "/";
      }
    }
  }

  // clear function

  var clearFunction = function(button, display) {
    console.log('CLEARING!!!');
    display.innerHTML = "";
  }


  ////////// CLEAR & ENTER

  // clear button

  clearButton.onclick = function(event) {
    console.log('CLEAR was clicked!!!');
    clearFunction(clearButton, operatorDisplay);
    clearFunction(clearButton, resultDisplay);
    calculateTracker.innerHTML = "";
    console.log('The current number was: ' + currentNum);
    currentNum = 0;
    console.log('But now it is: ' + currentNum);
    console.log('The previous number was: ' + previousNum);
    previousNum = 0;
    console.log('But now it is: ' + previousNum);
  }

  // enter button

  enterButton.onclick = function(event) {
    console.log('ENTER was clicked!!!');

    // clears both displays
    clearFunction(enterButton, operatorDisplay);
    clearFunction(enterButton, resultDisplay);

    // performs operations on the stored numbers
    if (operator === "+") {
      var result = parseInt(previousNum) + parseInt(currentNum);
    }
    else if (operator === "-") {
      var result = parseInt(previousNum) - parseInt(currentNum);
    }
    else if (operator === "*") {
      var result = parseInt(previousNum) * parseInt(currentNum);
    }
    else if (operator === "/") {
      var result = parseInt(previousNum) / parseInt(currentNum);
    }
    previousNum = currentNum;
    resultDisplay.innerHTML = result;
    console.log('The result is: ' + result);
    currentNum = result;
    console.log('The current number is: ' + currentNum);
    console.log('The previous number is: ' + previousNum);
    calculateTracker.innerHTML = 'The result is: ' + result;
  }


  ////////// FUNCTION CALLS

  // number function calls

  numberFunction(zeroButton);
  numberFunction(oneButton);
  numberFunction(twoButton);
  numberFunction(threeButton);
  numberFunction(fourButton);
  numberFunction(fiveButton);
  numberFunction(sixButton);
  numberFunction(sevenButton);
  numberFunction(eightButton);
  numberFunction(nineButton);

  // operator function calls

  operatorFunction(plusButton);
  operatorFunction(minusButton);
  operatorFunction(timesButton);
  operatorFunction(dividedByButton);


}