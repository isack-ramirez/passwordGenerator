
var charArrary=['a','b','c','d','e','f','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numArrary=[1,2,3,4,5,6,7,8,9,0];
var SPcharArray=['$','%',"@",'!','&']

var generatedPassword=[];

var useChars = true;
var useNums = true;
var useSPchars = true;

var combinedArrays;


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
  generatedPassword=[];

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






function generatePassword(){

      if(useChars===true && useNums===true && useSPchars===true){
          
          var combinedArrays = charArrary.concat(numArrary,SPcharArray);
      }

      else if(usechars===true && useNums===true && useSPchars===false){
        var combinedArrays = charArrary.concat(numArrary);
      }

      else if(usechars===true && useNums===true && useSPchars===false){
        var combinedArrays = charArrary.concat(numArrary);
      }
      
      else if(usechars===true && useNums===false && useSPchars===true){
        var combinedArrays = charArrary.concat(SPcharArray);
      } 

      else if(usechars===true && useNums===false && useSPchars===false){
        var combinedArrays = charArrary
      } 

      else if(usechars===false && useNums===true && useSPchars===true){
        var combinedArrays = numArrary.concat(SPcharArray);
      } 

      else if(usechars===false && useNums===false && useSPchars===true){
        var combinedArrays = SPcharArray;
      } 

      else if(usechars===false && useNums===true && useSPchars===false){
        var combinedArrays = numArrary;
      } 






          for(i=0;i<=3;i++){
                console.log();
                generatedPassword.push(combinedArrays[Math.floor(Math.random()*combinedArrays.length)]);
                
          }return generatedPassword;
      

    



};




function getRandomItemFromArray(arrayX){
    
    return arrayX[Math.floor(Math.random()*arrayX.length)];

}

console.log(generatedPassword);
