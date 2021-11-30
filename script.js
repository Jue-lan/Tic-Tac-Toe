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
    document.querySelectorAll(".child-board").style.background = `${#C6B8A9}`
}

restartButton.addEeventListner("click", restart)

/* need to create a function/loop to check for wins after every move and ends game at tie or win*/

/* need function that changes button color based on player being played */


/*need function that switches to player when selected ... and possibly displays it*/
