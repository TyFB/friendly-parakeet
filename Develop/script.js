var options = [
  alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  beta = "abcdifghijklmnopqrstuvwxyz",
  numbers = "0123456789",
  special = "!@#$%^&*_-+=",
];

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
  if (true){
    for (i =0; i < length; i++) {
      charUp += alpha.charAt(Math.floor(Math.random() * alpha.length));
    }
  }
  else {
    charUp = "";
  };
  var charLow = confirm("Do you need a Lowercase letter?")
  if (true) {
    for (i = 0; i < length; i++) {
      charLow += beta.charAt(Math.floor(Math.random() * beta.length));
    }
  }
  else {
    charLow = "";
  }
  var charSpc = confirm("Any special characters required?")
  if (true) {
    for (i=0; i<length; i++) {
      charSpc += special.charAt(Math.floor(Math.random() * special.length));
    }
  }
  else {
    charSpc = "";
  }
  var charNum = confirm("Final parameter is there any numbers needed?")
  if (true) {
   for (i=0; i<length; i++) {
    charNum += numbers.charAt(Math.floor(Math.random() * numbers.length));
   }
  }
  else {
    charNum = "";
  }

  // This is where we take all given answers to generate your password
  
    var randPass = charUp + charLow + charSpc + charNum
    console.log(randPass);
  
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
