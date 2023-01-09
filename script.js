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

var finalChoice = []
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

if (numberChoice === true) {
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



  return passwordChoice
}

//   if (finalChoice === [])
// alert("Please select at least one option")


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  
  var passwordChoice = getPasswordOptions()
  console.log(passwordChoice)
  return "I'm generating a password"
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




// for - We are going to start a for loop
// var i = 0 - we are creating a variable that we are going to loop over
// i < 5 - The condition to continue the loop
// i++ - After we run the code, we increase our looping variable by 1 i++ === i = i +1

// var passwordLength = 12

// var finalArr = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i']
// var password = ''
// for (var i = 0; i < passwordLength; i++) {
//   var randomIndex = Math.floor(Math.random() * finalArr.length)
// var randomChar = finalArr[randomIndex]
// password += randomChar
  
// }
// console.log(password)
