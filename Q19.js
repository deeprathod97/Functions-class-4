function isLeapYear(year) {
    
    if (year % 4 === 0) {
      
      if (year % 100 !== 0 || year % 400 === 0) {
        return true;
      }
    }
    
    return false; 
  }
  var inputYear = 2024;
  var isLeap = isLeapYear(inputYear);
  console.log(isLeap); 
  
  
 