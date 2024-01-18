const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]


firstPasswordEl = document.getElementById("first-password-el")
secondPasswordEl = document.getElementById("second-password-el")
numbersOnOffEl = document.getElementById("numbers-on-off-el")
symbolsOnOffEl = document.getElementById("symbols-on-off-el")

function getRandomPassword(){
    let characterSet = []
    characterSet = characterSet.concat(letters)
    let password = []
    let passwordLength = document.getElementById('password-length-el').value
    if (numbersOnOffEl.checked){
        characterSet = characterSet.concat(numbers)
    }
    if (symbolsOnOffEl.checked){
        characterSet = characterSet.concat(symbols)
    }
    // Validate the input
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid password length (between 8 and 128)");
        return;
    }
    for (i = 0; i < passwordLength; i++){
        let number = Math.floor(Math.random() * characterSet.length)
        password.push(characterSet[number])
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
