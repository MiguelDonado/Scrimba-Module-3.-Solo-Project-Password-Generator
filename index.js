const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

firstPasswordEl = document.getElementById("first-password-el")
secondPasswordEl = document.getElementById("second-password-el")

function getRandomPassword(){
    let password = []
    let passwordLength = document.getElementById('password-length-el').value

    // Validate the input
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid password length (between 8 and 128)");
        return;
    }
    for (i = 0; i < passwordLength; i++){
        let number = Math.floor(Math.random() * characters.length)
        password.push(characters[number])
    }
    return password.join("")
} 

function generateTwoPassword(){
    firstPassword = getRandomPassword()
    if (!firstPassword){
        return
    }
    firstPasswordEl.textContent = firstPassword
    secondPassword = getRandomPassword()
    secondPasswordEl.textContent = secondPassword
}