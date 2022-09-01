var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var beta = "abcdifghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*_-+=";

function generatePassword() {
  // Ask for password length
  var number = prompt("How many characters will your password be? 8 characters or higher only.");
  if (!number) {
    alert("Please enter a number. :)");
   generatePassword();
  } else if (number < 8) {
    alert("I need a bigger number than that to generate your password.");
   generatePassword();
  }
  var length = parseInt(number);

  // Questions to set parameters of the password
  var charUp = confirm("Do you need an Uppercase letter?")
  if (true) {
    charUp = alpha;
  };
  var charLow = confirm("Do you need a Lowercase letter?")
  if (true) {
    charLow = beta;
  };
  var charSpc = confirm("Any special characters required?")
  if (true) {
    charSpc = special;
  };
  var charNum = confirm("Final parameter is there any numbers needed?")
  if (true) {
    charNum = numbers;
  };
  
  for (i = 0; i < length; i++){

  }
};


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
