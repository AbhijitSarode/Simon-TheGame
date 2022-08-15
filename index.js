let buttonColors = ['red', 'blue', 'green', 'yellow'] 
let randomChosenColor
let gamePattern = []

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    randomChosenColor = buttonColors[randomNumber]
    console.log(randomNumber);
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor)
    console.log(gamePattern);
}

nextSequence()