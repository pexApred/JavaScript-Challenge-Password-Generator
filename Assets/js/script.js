// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generate password function
function generatePassword() {
  let passwordLength = prompt("Enter password length (minimum 8 characters):");
  passwordLength = Number(passwordLength)
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");

  else if (passwordLength > 100)
      alert("Password length must be at most 100 characters");
  return;
    };
  }

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
