function checkNumber() {
  //debugger;
  // Ask for password length
  var number = window.prompt("How many characters will your password be? 8 characters or higher only.");
  //var length = parseInt(number);
  if (!number || number < 8) {
    alert("I need a bigger number than that to generate your password.");
  }
  
  checkNumber();
}
//console.log(length);
//console.log(number);

/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/