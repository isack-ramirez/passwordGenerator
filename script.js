
var charArrary=['a','b','c','d','e','f','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numArrary=[1,2,3,4,5,6,7,8,9,0];
var SPcharArray=['$','%',"@",'!','&']

var generatedPassword=[];

var useChars = true;
var useNums = true;
var useSPchars = true;

var validated=false;

while(validated===false){
  var usingChars=prompt("Hello! Would you like to use [LETTERS] in your password? Y / N ")
      if(usingChars==='y' ||usingChars=== 'Y'){
          usechars=true;
          validated=true;
      }
    else if(usingChars==='n' ||usingChars=== 'N'){
      useChars=false;
      validated=true;
  
    }
    else{
      alert("Invalid input! Please enter the letter Y or N.")
    }
  
  }

validated = false;

while(validated===false){

   var usingNums=prompt("Hello! Would you like to use [NUMBERS] in your password? Y / N ")
   if(usingNums==='y' ||usingNums=== 'Y'){
    useNums=true;
    validated=true;
}
else if(usingNums==='n' ||usingNums=== 'N'){
useNums=false;
validated=true;

}
else{
alert("Invalid input! Please enter the letter Y or N.")
}

}

validated = false;

while(validated===false){

   var usingSPchars=prompt("Hello! Would you like to use [SPECIAL CHARACTERS (eg % )] in your password? Y / N ")
   if(usingSPchars==='y' ||usingSPchars=== 'Y'){
    useSPchars=true;
    validated=true;
}
else if(usingSPchars==='n' ||usingSPchars=== 'N'){
use=false;
validated=true;

}
else{
alert("Invalid input! Please enter the letter Y or N.")
}

}




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

      else if(useChars===true && useNums===true && useSPchars===false){
        var combinedArrays = charArrary.concat(numArrary);
      }

      else if(useChars===true && useNums===true && useSPchars===false){
        var combinedArrays = charArrary.concat(numArrary);
      }
      
      else if(useChars===true && useNums===false && useSPchars===true){
        var combinedArrays = charArrary.concat(SPcharArray);
      } 

      else if(useChars===true && useNums===false && useSPchars===false){
        var combinedArrays = charArrary
      } 

      else if(useChars===false && useNums===true && useSPchars===true){
        var combinedArrays = numArrary.concat(SPcharArray);
      } 

      else if(useChars===false && useNums===false && useSPchars===true){
        var combinedArrays = SPcharArray;
      } 

      else if(useChars===false && useNums===true && useSPchars===false){
        var combinedArrays = numArrary;
      } 

      else if(useChars===false && useNums===false && useSPchars===true){
        var combinedArrays = SPcharArray;
      } 

      else{
        combinedArrays=['H',"H","H","A","A","HA"]
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





    




