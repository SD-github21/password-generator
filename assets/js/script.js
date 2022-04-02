// Assignment code here

// create password length prompt with conditional recursive function call to ensure password falls only between 8-128 characters

var checkLength = function () {
  var passwordLength = window.prompt("Please choose the length of your password (between 8 and 128 characters)");
    if (passwordLength <8 || passwordLength > 128) {
      window.alert("You need to provide a valid answer! Please try again.");
      return checkLength();
  }

}

checkLength();

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
