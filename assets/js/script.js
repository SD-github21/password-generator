// Assignment code here

// Create password length prompt with conditional recursive function call to ensure password falls only between 8-128 characters
var checkLength = function () {
  var passwordLength = window.prompt("Please choose the length of your password (between 8 and 128 characters)");
    if (passwordLength <8 || passwordLength > 128) {
      window.alert("You need to choose a number between 8 and 128. Please try again.");
      return checkLength();
  }
}
checkLength();

// add prompts to confirm inclusion of different character types in password generator

// add variables to hold character types -- using arrays
// var alphaLower = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x,", "y", "z"]
// var alphaUpper = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X,", "Y", "Z"]
// var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var specialChar = ["!", "#", "$", "%", "&", "*", "+", "/", ":", ";", "<", "=", ">", "?", "@", "^", "{", "|", "}", "~"]

// add variables to hold character types -- using "charAt" method

var charTypeCheck = function() {
  var lowerCaseConfirm = window.confirm("Do you want to include lowercase characters in your password?");
  var upperCaseConfirm = window.confirm("Do you want to include uppercase characters in your password?");
  var numericConfirm = window.confirm("Do you want to include numeric characters in your password?");
  var specialCharConfirm = window.confirm("Do you want to include special characters in your password?");
  
  if (!(lowerCaseConfirm) && !(upperCaseConfirm) && !(numericConfirm) && !(specialCharConfirm)) {
    window.alert("You need to choose at least one character option. Please try again.");
    return charTypeCheck();   
  };
}

charTypeCheck();


// var charTypeCheck = function() {
//   if ((lowerCaseConfirm) && (upperCaseConfirm) && (numericConfirm) && (specialCharConfirm)) {
//     var alltypes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+,/:;<=>?@^{|}~";
//     console.log(alltypes);
    
//   }
//   else if ((lowerCaseConfirm) && (upperCaseConfirm) && (numericConfirm)) {
//     var allButSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     console.log(allButSpecial);
//   }

//   else if ((lowerCaseConfirm) && (upperCaseConfirm) && (specialChar)) {
//     var allButNumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&*+,/:;<=>?@^{|}~";
//     console.log(allButNumeric);
//   }

//   else if ((lowerCaseConfirm) && (upperCaseConfirm)) {
//     var alphaUpperLower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     console.log(alphaUpperLower);
//   }

//   else if ((specialChar)&& (numericConfirm)) {
//     var specialNumeric = "!#$%&*+,/:;<=>?@^{|}~0123456789";
//     console.log(specialNumeric);
//   }

//   else if ((specialChar)&& (lowerCaseConfirm)) {
//     var specialLower = "!#$%&*+,/:;<=>?@^{|}~abcdefghijklmnopqrstuvwxyz";
//     console.log(specialLower);
//   }

//   else if ((specialChar)&& (upperCaseConfirm)) {
//     var specialUpper = "!#$%&*+,/:;<=>?@^{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     console.log(specialUpper);
//   }


//   else if (lowerCaseConfirm) {
//     var alphaLower = "abcdefghijklmnopqrstuvwxyz";
//     console.log(alphaLower);
//   }
  
//   else if (upperCaseConfirm) {
//     var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     console.log(alphaUpper);
//   }
  
//   else if (numericConfirm) {
//     var numeric = "0123456789";
//     console.log(numeric);
//   }

//   else if (specialChar) {
//     var specialChar = "!#$%&*+,/:;<=>?@^{|}~;"
//     console.log(specialChar);
//   }

//   else {
//     window.alert("You need to choose at least one character option. Please try again");
//     return charTypeCheck();   
//   };
// }

// charTypeCheck();

// var generatePassword = function() {
//   var password = "";
//   for (var i = 0; i <= passwordLength; i++) {
//       password = 

//   }
// }





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
