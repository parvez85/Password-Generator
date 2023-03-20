// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    var passwordLength = prompt("Please enter desired password length");
  console.log (passwordLength);
   
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid input! Password length must be a number between 8 and 128.");
    return;
  }

  // Prompt user for which character types to include in password
  var includeSpecial = confirm("Would you like to include special characters?");
  var includeNumeric = confirm("Would you like to include numeric characters?");
  var includeLowercase = confirm("Would you like to include lowercase characters?");
  var includeUppercase = confirm("Would you like to include uppercase characters?");

  // Validate that user has selected at least one character type
  if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
    alert("Invalid input! Please select at least one character type.");
    return;
  }


}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var genrated =getPasswordOptions();
  return genrated;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);