const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

firstPasswordEl = document.getElementById("first-password-el")
secondPasswordEl = document.getElementById("second-password-el")

function getRandomPassword(){
    let password = []
    for (i = 0; i < 16; i++){
        let number = Math.floor(Math.random() * characters.length)
        password.push(characters[number])
    }
    return password.join("")
} 

function generateTwoPassword(){
    firstPassword = getRandomPassword()
    firstPasswordEl.textContent = firstPassword
    secondPassword = getRandomPassword()
    secondPasswordEl.textContent = secondPassword
}