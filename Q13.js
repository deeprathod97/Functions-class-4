function calculateFactorial(number) {
    if (number < 0) {
      return "Error: Factorial of a negative number is undefined";
    } else if (number === 0 || number === 1) {
      return 1;
    } else {
      var factorial = 1;
      for (var i = 2; i <= number; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  let inputNumber = 5;
  let factorialResult = calculateFactorial(inputNumber);
  console.log(factorialResult); 
  

  