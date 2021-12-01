
let player1 = true
let brownArray=[]
let orangeArray=[]

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
    document.querySelectorAll(".child-board").forEach((button) => button.style.backgroundColor = "initial");
    brownArray=[];
    orangeArray=[];
    location.reload()
    event.preventDefault()
}

restartButton.addEventListener("click", restart)
/* player tallied picks and end game function*/

let tallyBrown= 0
let tallyOrange= 0

// *Here* I am someone looping Player 1 to win on the onset, even when the colors are prodominately orange
function gameEnd(){
    event.preventDefault()
    for (let i = 0; i < winCombos.length; i++){
        for (let k = 0; k < 3 ; k++){
            if (brownArray.includes(winCombos[i][k])){ // this is not working, it isn't tallying
                tallyBrown++
                console.log(tallyBrown)// this is not being logged
            } else {tallyBrown= 0}
            if (orangeArray.includes(winCombos[i][k])){
                tallyOrange++
                console.log(tallyOrange)
            } else {tallyOrange= 0}
        }
        // console.log(tallyBrown) // for debugging only
        // console.log(brownArray) //debug
        // console.log(orangeArray) 
        // console.log(tallyOrange)
        if (tallyBrown >= 3){ 
            console.log("Player 1 wins!! New game.")
            //restart()
        } else if (tallyOrange >= 3){
            console.log("Player 2 wins!! New game.")
            //restart()
        } 
    }
}
/* board buttons and player selections and color fuctions*/

const boardButton = document.querySelectorAll(".child-board")

function selection() {
console.log("before if") // for debugging only
        if (player1){      
            function colorBrown(){
                     event.target.style.backgroundColor= "brown"
                     let numberb= event.target.id
                     brownArray.push(numberb) //why is it push all the numbers? another scoping issue?
            }
            boardButton.forEach((button) => button.addEventListener("click", colorBrown));
            player1 = false;
            console.log(" if true")// for debugging only
        } else {
            function colorOrange(){
                       event.target.style.backgroundColor= "orange"
                       console.log(event.target.id ) //with this touch point,  I can see that no matter if its if or else the array pushes the ID number
                       let numbero= event.target.id
                       
                       orangeArray.push(numbero)
            }
            boardButton.forEach((button) => button.addEventListener("click", colorOrange));
            player1 = true;
            console.log(" if false")// for debugging only
        } 
   event.preventDefault()
   gameEnd()
   console.log(" after game function")// for debugging only
}

boardButton.forEach((button) => button.addEventListener("click", selection))