function countVowels(str) {
    let vowelCount = 0;
    let vowels = 'aeiouAEIOU'; 
    
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount++;
      }
    }
    
    return vowelCount;
  }
  let inputString = "hello";
  let vowelCount = countVowels(inputString);
  console.log(vowelCount); 
  
 
  