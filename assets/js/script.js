// Assignment code here

// Create password length prompt 
// Add conditional recursive function call to ensure password falls only between 8-128 characters
// var checkLength = function () {
//   var passwordLength = window.prompt("Please choose the length of your password (between 8 and 128 characters)");
//     if (passwordLength <8 || passwordLength > 128) {
//       window.alert("You need to choose a number between 8 and 128. Please try again.");
//       return checkLength();
//   }
// }
// checkLength();


// Create password length prompt using a different method
// Add conditional recursive function call to ensure password falls only between 8-128 characters
var getLength = function () {
  passwordLength = "";
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Please choose the length of your password (between 8 and 128 characters)");
  }
  console.log(passwordLength)
  return passwordLength;
};

// Add storage of password
var passwordLength = Number(getLength());
console.log (passwordLength);


// Add prompts to confirm inclusion of different character types in password generator 
// Validate that at least one character has been chosen
var charTypeCheck = function() {
  var lowerCaseConfirm = window.confirm("Do you want to include lowercase characters in your password?");
  var upperCaseConfirm = window.confirm("Do you want to include uppercase characters in your password?");
  var numericConfirm = window.confirm("Do you want to include numeric characters in your password?");
  var specialCharConfirm = window.confirm("Do you want to include special characters in your password?");
  
  if (!(lowerCaseConfirm) && !(upperCaseConfirm) && !(numericConfirm) && !(specialCharConfirm)) {
    window.alert("You need to choose at least one character option. Please try again.");
    return charTypeCheck();   
  }
  else {
    
    return { lowerCaseConfirm, upperCaseConfirm, numericConfirm, specialCharConfirm};
   
  }
};

var confirmObject = charTypeCheck();
console.log(confirmObject);

var lowerCaseConfirm = confirmObject.lowerCaseConfirm;
console.log(lowerCaseConfirm);

var upperCaseConfirm = confirmObject.upperCaseConfirm;
console.log(upperCaseConfirm);

var numericConfirm = confirmObject.numericConfirm;
console.log(numericConfirm);

var specialCharConfirm = confirmObject.specialCharConfirm;
console.log(specialCharConfirm);



// build generatePassword function using arrays
var generatePassWord = function() {
  var passwordPool = [];
  var alphaLower = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x,", "y", "z"]
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X,", "Y", "Z"]
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialChar = ["!", "#", "$", "%", "&", "*", "+", "/", ":", ";", "<", "=", ">", "?", "@", "^", "{", "|", "}", "~"]

      if (lowerCaseConfirm) {
      Array.prototype.push.apply(passwordPool, alphaLower);
    }  
    if (upperCaseConfirm) {
      Array.prototype.push.apply(passwordPool, alphaUpper);
    }  
    if (numericConfirm) {
      Array.prototype.push.apply(passwordPool, numeric);
    }  
    if (specialCharConfirm) {
      Array.prototype.push.apply(passwordPool, specialChar);
    }

  var password = [];
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordPool.length);
    var randomItem = passwordPool[randomIndex];
      // Array.prototype.push.apply(password, randomItem);
    console.log(randomItem);
  }
  
}
generatePassWord();

// build generatePassword function using strings and characters
// var generatePassword = function() {
//   var password = "";
//   var alphaLower = "abcdefhijklmnopqrstuvwxyz"
//   var alphaUpper = "ABCDEFHIJKLMNOPQRSTUVWXYZ]
//   var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//   var specialChar = ["!", "#", "$", "%", "&", "*", "+", "/", ":", ";", "<", "=", ">", "?", "@", "^", "{", "|", "}", "~"]

//   for (var i = 0; i <= passwordLength + 1; i++) {
//     if ((lowerCaseConfirm) && (upperCaseConfirm) && (numericConfirm) && (specialCharConfirm)) {
//       password += alphaLower

//   }
// }



// add variables to hold character types -- using characters

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