// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// NOTE to self: PROMPT function displays a model dialog with a message, input field, & 2 buttons "OK" = returns or "CANCEL" = null
// NOTE to self: ALERT function displays a model dialog with a message and an "OK" button

// Generate password function : Password Criteria
function generatePassword() {
  // Prompt for length of Password
  let passwordLength = prompt("Enter password length (minimum 8 characters):");
  passwordLength = Number(passwordLength);
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  else if (passwordLength > 128) {
    alert("Password length must be at most 128 characters");
    return;
  } console.log(generatePassword);
  // NOTE to self: CONFIRM function is used to display dialog box with a message & 2 buttons "OK" = TRUE or "CANCEL" = FALSE
  // Confirms for character types
  let includeLowercase = confirm("Should I include lowercase characters?");
  let includeUppercase = confirm("Should I include uppercase characters?");
  let includeNumbers = confirm("Should I include numerical characters?");
  let includeSpecial = confirm("Should I include special characters?");

  let charTypes = [];
  // NOTE to self: PUSH is an array method to add elements to end of array
  if (includeLowercase) charTypes.push("abcdefghijklmnopqrstuvwxyz");
  if (includeUppercase) charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (includeNumbers) charTypes.push("1234567890");
  if (includeSpecial) charTypes.push(" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  // Validation Alert
  if (charTypes.length === 0) {
    alert("At least one character type must be selected");
    return;
  }

  
}


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
