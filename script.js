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

var finalChoice = []

// Function to prompt user for password options
function getPasswordOptions() {

var passwordChoice =  {
  length : 0,
  lowercase : false,
  uppercase : false,
  numeric : false,
  specialcharacters : false,

}

  var validNumber = false
  while (validNumber === false) {
    var numberChoice = prompt("Enter a number between 10 and 64")
    if (numberChoice > 64 || numberChoice < 10) {
      alert("the number is not between 10 and 64")
    }
    else {
      validNumber = true
      passwordChoice.length = numberChoice
    }

  }
console.log("the loop has finished!!!")

var lowercaseChoice = confirm("Would you like lowercase letters in your password?")
console.log(lowercaseChoice)
passwordChoice.lowercase = lowercaseChoice

if (lowercaseChoice === true) {
finalChoice = lowerCasedCharacters.concat(finalChoice)
console.log(finalChoice)
}

var uppercaseChoice = confirm("Would you like uppercase letters in your password?")
console.log(uppercaseChoice)
passwordChoice.uppercase = uppercaseChoice

if (uppercaseChoice === true) {
  finalChoice = upperCasedCharacters.concat(finalChoice)
  console.log(finalChoice)
  }

var numericChoice = confirm("Would you like numbers in your password?")
console.log(numericChoice)
passwordChoice.numeric = numericChoice

if (numericChoice === true) {
  finalChoice = numericCharacters.concat(finalChoice)
  console.log(finalChoice)
  }

var specialcharactersChoice = confirm("Would you like special characters in your password?")
console.log(specialcharactersChoice)
passwordChoice.specialcharacters = specialcharactersChoice

if (specialcharactersChoice === true) {
  finalChoice = specialCharacters.concat(finalChoice)
  console.log(finalChoice)
  }

  else {
    alert("Error: Please select at least one character type")
  }
  

  console.log(finalChoice)
  return passwordChoice
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// Function to generate password with user input
function generatePassword() {
  var passwordChoice = getPasswordOptions()
  if(!passwordChoice) return
  var generatedPassword = ""
  for (var i = 0; i < passwordChoice.length; i++) {
    generatedPassword += getRandom(finalChoice);
  }
  return generatedPassword
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
