
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
            if (brownArray.includes(winCombos[i][k])){
                tallyBrown++
                console.log(tallyBrown)
            } //else {tallyBrown= 0}
            if (orangeArray.includes(winCombos[i][k])){
                tallyOrange++
                console.log(tallyOrange)
            } //else {tallyOrange= 0}
        }
        console.log(tallyBrown)
        console.log(tallyOrange)
        if (tallyBrown === 3){ 
            console.log("Player 1 wins!! New game.")
            //restart()
        } else if (tallyOrange === 3){
            console.log("Player 2 wins!! New game.")
            //restart()
        } 
    }
}


/* board buttons and player selections and color fuctions*/

const boardButton = document.querySelectorAll(".child-board")

function selection() {
console.log("before if")
        if (player1){// *Here* I can't get color to swap back. It swaps once and sticks to orange. using console.log 
            //I can read that the true false staments alternate, but the color selected doesn't match the command
            
            function colorBrown(){
                // if (event.target.style.backgroundColor=="initial" ){
                     event.target.style.backgroundColor= "brown"
                     let number= event.target.id
                     brownArray.push(number)
                // }
             }
            boardButton.forEach((button) => button.addEventListener("click", colorBrown));
            player1 = false;
            console.log(" if true")
        } else {

            function colorOrange(){
                //   if (event.target.style.backgroundColor=="initial"){
                       event.target.style.backgroundColor= "orange"
                       let number= event.target.id
                       orangeArray.push(number)
                       //}
               }
            boardButton.forEach((button) => button.addEventListener("click", colorOrange));
            player1 = true;
            console.log(" if false")
        } 
   event.preventDefault()
   gameEnd()
   console.log(" after game function")
}

boardButton.forEach((button) => button.addEventListener("click", selection))

