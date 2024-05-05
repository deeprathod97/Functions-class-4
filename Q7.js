function greetUser() {
    let userName = prompt("Please enter your name:");
    if (userName) {
      alert("Hello, " + userName + "!");
    } else {
      alert("Hello, guest!");
    }
  }
  greetUser();
  
  
  