function generatePrimeNumbers(n) {
    let primeNumbers = [];
    let num = 2; 
    
    while (primeNumbers.length < n) {
      if (isPrime(num)) {
        primeNumbers.push(num);
      }
      num++; 
    }
    
    return primeNumbers;
  }
  
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  let inputCount = 5;
  let primeNumberList = generatePrimeNumbers(inputCount);
  console.log(primeNumberList); 
  

  