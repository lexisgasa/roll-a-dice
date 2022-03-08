let randomNumber1 = Math.floor(Math.random()*6)+1;

let randomNumber2 = Math.floor(Math.random()*6)+1;

let getRandomImage1 = "./images/dice" + randomNumber1 + ".png"

let getRandomImage2 = "./images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", getRandomImage1);

document.querySelectorAll("img")[1].setAttribute("src", getRandomImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🟢 Player 1 wins 🔴"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "🔴 Player 2 wins 🟢"
}

else document.querySelector("h1").textContent = "Draw!"

