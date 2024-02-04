const password = document.getElementById("password");
const btn = document.querySelector(".generate");
const copy = document.querySelector(".copy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacter = "!@#$%^&*(){}[]";

const allChars = upperCase + lowerCase + numbers + specialCharacter;

btn.addEventListener("click", () => {
    generatePassword();
});

function generatePassword() {
    let pass = "";
    let length = 12;

    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += numbers[Math.floor(Math.random() * numbers.length)];
    pass += specialCharacter[Math.floor(Math.random() * specialCharacter.length)];

    while (pass.length < length) {
        pass += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password.value = pass;
}


copy.addEventListener("click",()=>{

    password.select();
    document.execCommand("copy");
    
});