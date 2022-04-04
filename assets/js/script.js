// Create the generatePassword function to kick off the app and that will connect to the "Generate Password" button 
// provided in the starter code. 
var generatePassword = function() {

// Create a getLength function to prompt the user to select the length of their password that 
// contains a while loop to ensure password falls only between 8-128 characters
  var getLength = function () {
    passwordLength = "";
      while (passwordLength < 8 || passwordLength > 128 || passwordLength === null || isNaN(passwordLength)) {
        passwordLength = prompt("Please choose the length of your password (between 8 and 128 characters)");
      }
    console.log(passwordLength);
    return passwordLength;
  };

  // Add a variable to store the value of password length
  var passwordLength = Number(getLength());
  console.log (passwordLength);


  // Add a function that prompts the user to select different character types for their password 
  // Validate and ensure that at least one character type has been chosen
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
      return {lowerCaseConfirm, upperCaseConfirm, numericConfirm, specialCharConfirm};
    }
  };

  // Create a variable that contains an object with all 4 confirmation results
  var confirmObject = charTypeCheck();
  console.log(confirmObject);

  // Create variables to hold the values of the user's selection for each character type  
  var lowerCaseConfirm = confirmObject.lowerCaseConfirm;
  console.log(lowerCaseConfirm);

  var upperCaseConfirm = confirmObject.upperCaseConfirm;
  console.log(upperCaseConfirm);

  var numericConfirm = confirmObject.numericConfirm;
  console.log(numericConfirm);

  var specialCharConfirm = confirmObject.specialCharConfirm;
  console.log(specialCharConfirm);


  // Create the password based on the user's selected password length and character chaices using a function with arrays
  var createPassWord = function() {
    // Create an empty array and set it to a variable named passwordPool 
    var passwordPool = [];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
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

    var passwordArray = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * passwordPool.length);
      passwordArray.push(passwordPool[randomIndex]);  
    }
  return passwordArray;
  }

  createPassWord();

  var passwordArray = createPassWord();
  console.log(passwordArray)
  var password = passwordArray.join("");

  return password;

}


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