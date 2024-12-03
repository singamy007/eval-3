// Classic Function
button.addEventListener('click', function() {
    console.log(this);  // refers to the button
  });
  
  // Arrow Function
  button.addEventListener('click', () => {
    console.log(this);  // refers to the outer scope (e.g., window)
  });
 
  