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

  // div to hold text alerts during and after calculations

  var calculateTracker = document.getElementById("calculate-tracker");

  // number declarations

  var hiddenNum = "";


  ////////// FUNCTIONS

  // number button function

  var numberFunction = function(numberButton) {
    numberButton.onclick = function(event) {
      console.log(numberButton.innerHTML + ' was clicked!!!');
      calculateTracker.innerHTML = 'Calculating..........';
      resultDisplay.innerHTML += numberButton.innerHTML;

      console.log('The result display reads: ' + resultDisplay.innerHTML);
    }
  }

  // operations function

  var operations = function() {
    if (operatorDisplay.innerHTML === "+") {
      resultDisplay.innerHTML = parseInt(hiddenNum) + parseInt(resultDisplay.innerHTML);
    }
    else if (operatorDisplay.innerHTML === "-") {
      resultDisplay.innerHTML = parseInt(hiddenNum) - parseInt(resultDisplay.innerHTML);
    }
    else if (operatorDisplay.innerHTML === "*") {
      resultDisplay.innerHTML = parseInt(hiddenNum) * parseInt(resultDisplay.innerHTML);
    }
    else if (operatorDisplay.innerHTML === "/") {
      resultDisplay.innerHTML = parseInt(hiddenNum) / parseInt(resultDisplay.innerHTML);
    } 
  }

  // operator button function

  var operatorFunction = function(operatorButton) {
    operatorButton.onclick = function(event) {
      console.log(operatorButton.innerHTML + ' was clicked!!!');
      
      if (resultDisplay.innerHTML !== "" && hiddenNum !== undefined) {
        operations(); 
      }

      hiddenNum = resultDisplay.innerHTML;
      console.log('The held number is: ' + hiddenNum);

      resultDisplay.innerHTML = "";
      operatorDisplay.innerHTML = operatorButton.innerHTML;
    }
  }

  // clear function

  var clearFunction = function(button, display) {
    console.log('CLEARING!!!!!');
    display.innerHTML = "";
  }


  ////////// CLEAR & ENTER

  // clear button

  clearButton.onclick = function(event) {
    console.log('CLEAR was clicked!!!');

    clearFunction(clearButton, operatorDisplay);
    clearFunction(clearButton, resultDisplay);

    calculateTracker.innerHTML = "";
    hiddenNum = "";

  }

  // enter button

  enterButton.onclick = function(event) {
    console.log('ENTER was clicked!!!');

    if (resultDisplay.innerHTML === "") {

      if (operatorDisplay.innerHTML === "+") {
        resultDisplay.innerHTML = parseInt(hiddenNum) + parseInt(hiddenNum);
      }
      else if (operatorDisplay.innerHTML === "-") {
        resultDisplay.innerHTML = parseInt(hiddenNum) - parseInt(hiddenNum);
      }
      else if (operatorDisplay.innerHTML === "*") {
        resultDisplay.innerHTML = parseInt(hiddenNum) * parseInt(hiddenNum);
      }
      else if (operatorDisplay.innerHTML === "/") {
        resultDisplay.innerHTML = parseInt(hiddenNum) / parseInt(hiddenNum);
      }
    }

    else {
      operations();
    }
 
    clearFunction(enterButton, operatorDisplay);
    console.log('The result is: ' + resultDisplay.innerHTML);
    calculateTracker.innerHTML = 'The result is: ' + resultDisplay.innerHTML;
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