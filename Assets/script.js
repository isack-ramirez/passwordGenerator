
var charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var SPcharArray = ['$', '%', "@", '!', '&', '"', '#',"'","(",")","*","+",",","-",".","/",":",";"
,"<","=",">","?","[","]","^","_","`","|","}"," ~"]

var generatedPassword = [];

var useChars = false;
var useNums = false;
var useSPchars = false;

var validated = false;

while (validated === false) {
  var usingChars = prompt("Hello! Would you like to use [LETTERS] in your password? Y / N ")
  if (usingChars === 'y' || usingChars === 'Y') {
    useChars = true;
    validated = true;
  }
  else if (usingChars === 'n' || usingChars === 'N') {
    useChars = false;
    validated = true;

  }
  else {
    alert("Invalid input! Please enter the letter Y or N.")
  }

}

validated = false;

while (validated === false) {

  var usingNums = prompt("Hello! Would you like to use [NUMBERS] in your password? Y / N ")
  if (usingNums === 'y' || usingNums === 'Y') {
    useNums = true;
    validated = true;
  }
  else if (usingNums === 'n' || usingNums === 'N') {
    useNums = false;
    validated = true;

  }
  else {
    alert("Invalid input! Please enter the letter Y or N.")
  }

}

validated = false;

while (validated === false) {

  var usingSPchars = prompt("Hello! Would you like to use [SPECIAL CHARACTERS (eg % )] in your password? Y / N ")
  if (usingSPchars === 'y' || usingSPchars === 'Y') {
    useSPchars = true;
    validated = true;
  }
  else if (usingSPchars === 'n' || usingSPchars === 'N') {
    use = false;
    validated = true;

  }
  else {
    alert("Invalid input! Please enter the letter Y or N.")
  }

}


validated = false;
var passwordLength;
while (validated === false) {

  var passwordLength = prompt("Enter the number of characters desired (min 8 max 128)");
  
  isLetter=isNaN(passwordLength);

  if(passwordLength < 8 ) {
    alert("Please enter a number between 8 and 128")
    passwordLength=0;

  }

  else if(passwordLength > 128 ){
    alert("Please enter a number between 8 and 128")
    passwordLength=0;
  }
 
  else if(isLetter===true){
    alert("Please enter a number between 8 and 128")
    passwordLength=0;
  }

  else{
    validated=true;
  }

}



var combinedArrays;


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
  generatedPassword = [];

  var passwordText = document.querySelector("#password");

  console.log("button pressed")

  password = generatePassword();

  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* TO DO---------------------------------------------------------------------------

Give user prompt for password chriteria
: length (min 8, max 128)
: character types (uppercase, lowercase , special characters, numeric)

Vallidate user input

Write to the screen


---------------------------------------------------------------------------*/






function generatePassword() {

  console.log(useChars);
  console.log(useNums);
  console.log(useSPchars);

  var combinedArrays = [];
  if (useChars === true) {

    combinedArrays = combinedArrays.concat(charArray);
    console.log(combinedArrays);
  
  }
  if (useNums === true) {
    combinedArrays = combinedArrays.concat(numArray);
  }

  if (useSPchars === true) {
    combinedArrays = combinedArrays.concat(SPcharArray);
  }

  for (i = 0; i < passwordLength; i++) {
    console.log();

    generatedPassword.push(combinedArrays[Math.floor(Math.random() * combinedArrays.length)]);

  } return generatedPassword;






};




function getRandomItemFromArray(arrayX) {

  return arrayX[Math.floor(Math.random() * arrayX.length)];

}


console.log(generatedPassword);










