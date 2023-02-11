// Assignment Code
var generateBtn = document.querySelector("#generate");

// Center content code
var div = document.getElementsByClassName("wrapper");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generate password function
function generatePassword() {
  let passwordLength = prompt("Enter password length (minimum 8 characters):");
  passwordLength = Number(passwordLength);

  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  else if (passwordLength > 100) {
    alert("Password length must be at most 100 characters");
    return;
  } console.log(generatePassword);


}


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
