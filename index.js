let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomDiceSource1 = "images/" + randomDiceImage1;
document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomDiceSource2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw."
}
else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Satendra won 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Abhishek won 🚩"
}
