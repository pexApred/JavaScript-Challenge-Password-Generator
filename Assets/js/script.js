// Assignment Code
var generateBtn = document.querySelector("#generate");

// function generateBtn() {
//   let passwordLength = prompt("Enter password length (minimum 8 characters):");
//   if (passwordLength < 8) {
//     alert("Password length must be at least 8 characters");
//     else if (passwordLength > 100) {
//       alert("Password length must be at most 100 characters");
//       return;
//     };
//   };
//   }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password();
generatePassword;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
