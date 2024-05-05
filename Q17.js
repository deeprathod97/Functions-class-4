function reverseWords(sentence) {
  
    let wordsArray = sentence.split(" ");
    let reversedWordsArray = wordsArray.reverse();
    
    let reversedSentence = reversedWordsArray.join(" ");
    
    return reversedSentence;
  }
  
  let inputSentence = "Deep Rajput";
  let reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); 
    
    
  
  