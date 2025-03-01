// Password Generator

// get element from html radio
const lenght = document.getElementById("lenght");
const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const result  = document.getElementById("result");

// declare valiable for make sure a value from html radio input
let lowerCheck = false;
let upperCheck = false;
let numberCheck = false;
let symbolCheck = false;


function generatePassword(){
    // declare all posibility chars for password
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+=-";
    
    // declare allowed chard and password generated
    let allowedChar = "";
    let password = "";

    // checking if radio input is true or false
    if(lowerCase.checked){
        lowerCheck = true;
    }
    if(upperCase.checked){
        upperCheck = true;
    }
    if(number.checked){
        numberCheck = true;
    }
    if(symbol.checked){
        symbolCheck = true;
    }

    // logic for allowed chars
    allowedChar += lowerCheck ? lowerCaseChars : "";
    allowedChar += upperCheck ? upperCaseChars : "";
    allowedChar += numberCheck ? numberChars : "";
    allowedChar += symbolCheck ? symbolChars : "";

    // logic for undefined input
    if(lenght.value <= 0){
        return result.textContent = "Password lenght must be filled";
    }
    if(allowedChar.length === 0 ){
        return result.textContent = "At least choose 1 of chars";
    }

    // looping for generate random chars for password
    for(let i = 0; i < lenght.value; i++){
        const numOfIndex = Math.floor(Math.random() * allowedChar.length);

        password += allowedChar[numOfIndex];
    }

    result.textContent = password;

    

}

// sort function javascript
const person = [{name: "Spongebob", age: 37, gpa: 3.0},
                {name: "patrick", age: 30, gpa: 2.0},
                {name: "squidward", age: 40, gpa: 2.5}]

person.sort((a, b)=> a.gpa - b.gpa);
person.sort((a, b)=> a.name.localeCompare(b.name));

console.log(person);

// Suffle array
// Fisher-Yates algorithm

cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

suffle(cards);

console.log(cards);

function suffle (array){
    for(let i = array.lenght - 1 ; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}   


date = new Date();

const year = date.getFullYear();

console.info(year);