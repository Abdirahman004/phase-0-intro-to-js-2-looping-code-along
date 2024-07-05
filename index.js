function writeCards(names, event) {
    // Create a new, empty array to hold the messages
    let messages = [];
  
    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
      // Build the 'thank you' message for each name using string interpolation
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  
      // Add that message to the new array
      messages.push(message);
    }
  
    // Return the new array
    return messages;
  }
  
  // Example usage:
  let names = ["Abdi", "adan", "ali"];
  let event = "birthday";
  console.log(writeCards(names, event));
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  
  
  
  
