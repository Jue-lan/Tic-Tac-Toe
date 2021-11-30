// warning only like 30% of this works...just trying to get ideas out of head


/* need array of win combos */

const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
/* need button that restarts game */
const restartButton = document.querySelector(".restart")

function restart() {
    document.getElementById(".score-count").innerText = 0;
    document.querySelectorAll(".child-board").style.background = initial // not sure if this will work. intend to change to default color
    colorBrown()
}

restartButton.addEeventListner("click", restart)

/* need to create a function/loop to check for wins after every move and ends game at tie or win*/
// psuedo code: if serious of button that match in color match any of the wining combos, alert  that, that color wins, clear board, and add count
//or if all buttons ar enot default color, alert colors tie. and clear board
// if neither nothing

function clearBoard() {
    document.querySelectorAll(".child-board").style.background = initial // not sure if this will work. intend to change to default color
    colorBrown()
}

function gameEnd(){
}

/* need function that changes button color based on player being played */
const player1Button = document.querySelector(".swtich-Player1")
const player2Button = document.querySelector(".swtich-Player2")

const boardButton = document.querySelectorAll(".child-board")

function selection() {
    if (document.querySelector(".swtich-Player1").style.background === "brown"){
        boardButton.addEeventListner("click", colorBrown)
    } else {
        boardButton.addEeventListner("click", colorOrange)
    }
}
/*need function that switches to player when selected ... and possibly displays it*/

function colorBrown(){
        document.querySelector(".swtich-Player1").style.background = "brown"
        document.querySelector(".swtich-Player2").style.background = "initial"

}

function colorOrange(){
    document.querySelector(".swtich-Player1").style.background = "initial"
    document.querySelector(".swtich-Player2").style.background = "orange"
}

player1Button.addEeventListner("click", colorBrown)
player2Button.addEeventListner("click", colorOrange)