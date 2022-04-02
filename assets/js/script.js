// Assignment code here

// Create password length prompt with conditional recursive function call to ensure password falls only between 8-128 characters
var checkLength = function () {
  var passwordLength = window.prompt("Please choose the length of your password (between 8 and 128 characters)");
    if (passwordLength <8 || passwordLength > 128) {
      window.alert("You need to provide a valid answer! Please try again.");
      return checkLength();
  }
}
checkLength();

// add prompts to confirm inclusion of different character types in password generator
var lowerCaseConfirm = window.confirm("Do you want to include lowercase characters in your password?");
var upperCaseConfirm = window.confirm("Do you want to include uppercase characters in your password?");
var numericConfirm = window.confirm("Do you want to include numeric characters in your password?");
var specialCharConfirm = window.confirm("Do you want to include special characters in your password?");

// add variables to hold character types
var alphaLower = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x,", "y", "z"]
var alphaUpper = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X,", "Y", "Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["!", "#", "$", "%", "&", "*", "+", "/", ":", ";", "<", "=", ">", "?", "@", "^", "{", "|", "}", "~"]






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
