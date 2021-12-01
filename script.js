// warning only like 30% of this works...just trying to get ideas out of head
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
    //document.getElementById(".score-count").innerText = "0";
    document.querySelectorAll(".child-board").forEach((button) => button.style.backgroundColor = "initial");
    brownArray=[];
    orangeArray=[]
    event.preventDefault()
}

restartButton.addEventListener("click", restart)

/* need to create a function/loop to check for wins after every move and ends game at tie or win*/
// psuedo code: if serious of button that match in color match any of the wining combos, alert  that, that color wins, clear board, and add count
//or if all buttons ar enot default color, alert colors tie. and clear board
// if neither nothing
/*
function clearBoard() {
    document.querySelectorAll(".child-board").style.backgroundColor = "initial" // not sure if this will work. intend to change to default color
    
}
*/
let tallyBrown= 0
let tallyOrange= 0

function gameEnd(){
    event.preventDefault()
    for (let i = 0; i < winCombos.length; i++){


        for (let k = 0; k < 3 ; k++){
            if (brownArray.includes(winCombos[i][k])){
                tallyBrown++
            } //else {tallyBrown= 0}
            if (orangeArray.includes(winCombos[i][k])){
                tallyOrange++
            } //else {tallyOrange= 0}
        }

        if (tallyBrown === 3){ 
            console.log("Player 1 wins!! New game.")
            restart()
        } else if (tallyOrange === 3){
            console.log("Player 2 wins!! New game.")
            restart()
        } 
    }
}


/* need function that changes button color based on player being played */
//const player1Button = document.querySelector(".swtich-Player1")
//const player2Button = document.querySelector(".swtich-Player2")

const boardButton = document.querySelectorAll(".child-board")

function selection() {
/*    if (boardButton.forEach( 
        () =>  {
            if (event.target.style.backgroundColor != "brown" && event.target.style.backgroundColor != "orange"){
                 return true
            }
        }
    )){
        */
        if (player1){
            boardButton.forEach((button) => button.addEventListener("click", colorBrown));
            //player1 = false;
            player1 = player1 === true ? false : true
        }else  {
            boardButton.forEach((button) => button.addEventListener("click", colorOrange));
            player1 = true;
           // player1 = player1 === false ? true : false
        } 
   // }
   //player1 = player1 === true ? false : true

   event.preventDefault()
   gameEnd()
}

boardButton.forEach((button) => button.addEventListener("click", selection))

/*need function that switches to player when selected ... and possibly displays it*/

function colorBrown(){
   // if (event.target.style.backgroundColor=="initial" ){
        event.target.style.backgroundColor= "brown"
        let number= event.target.id
        brownArray.push(number)
        // player1 = false;
   // }

/*  
        document.querySelector(".swtich-Player1").style.backgroundColor = "brown"
        document.querySelector(".swtich-Player2").style.backgroundColor = "initial"
*/
}

function colorOrange(){
 //   if (event.target.style.backgroundColor=="initial"){
        event.target.style.backgroundColor= "orange"
        let number= event.target.id
        orangeArray.push(number)
        //player1 = true;
   // }
/*    
    document.querySelector(".swtich-Player1").style.backgroundColor = "initial"
    document.querySelector(".swtich-Player2").style.backgroundColor = "orange"
*/
}

// player1Button.addEventListener("click", colorBrown) ;
// player2Button.addEventListener("click", colorOrange);
