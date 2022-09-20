// Assignment Code
var UpperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var SpecialCharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"]
var LowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var AllCharacters = []
  var length = prompt("Please choose the length of your password")
  while (length < 8 || length > 128) {
    alert("You have entered the wrong password length")
    var length = prompt("Please choose the length of your password")
  }
  var UpperCaseConfirm = confirm("Would you like to add uppercase letters?")
  if (UpperCaseConfirm == true) {
    AllCharacters = AllCharacters.concat(UpperCaseCharacters)
    console.log("UpperCase")
  }
  var LowerCaseConfirm = confirm("Would you like to add lowercase letters?")
  if (LowerCaseConfirm == true) {
    AllCharacters =AllCharacters.concat(LowerCaseCharacters)
    console.log("LowerCase")
  }
  var NumbersConfirm = confirm("Would you like to add numbers?")
  if (NumbersConfirm == true) {
    AllCharacters = AllCharacters.concat(Numbers)
    console.log("Numbers")
  }
  var SpecialCharactersConfirm = confirm("Would you like to add special characters")
  if (SpecialCharactersConfirm == true) {
    AllCharacters = AllCharacters.concat(SpecialCharacters)
    console.log("SpecialCharacters")
  }
  console.log(AllCharacters)
  console.log("To do create a password with .length ", length)
var NewPasswordArray= []
for (var i= 0;i < length ; i++){
  console.log ("To do I can use this index var " ,i)
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);