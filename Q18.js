function countConsonants(str) {
    let consonantCount = 0;
    let vowels = 'aeiouAEIOU'; 
    
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i]) && str[i] !== ' ') {
        consonantCount++;
      }
    }
    
    return consonantCount;
  }
  let inputString = "hello";
  let consonantCount = countConsonants(inputString);
  console.log(consonantCount); 
  
 
  