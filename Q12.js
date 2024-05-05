function greetAll(namesArray) {
    var greetingMessages = [];
    
    for (var i = 0; i < namesArray.length; i++) {
      var greeting = "Hello, " + namesArray[i] + "!";
      greetingMessages.push(greeting);
    }
    
    return greetingMessages;
  }
  let names = ["Alice", "Bob", "Charlie"];
  let greetings = greetAll(names);
  console.log(greetings); 
  
