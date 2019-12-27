class TicGame {
    constructor() {
        this.currentPlayer = false;
    }
    //run stuff on the start of the game
    startGame() {
        console.log("Game started !")
    }
    //handle palyer click, determin what button clicked and who clicked it
    onPlayerClick(buttonId, player) {
        //check no one clicked it already 
        if (document.getElementById(buttonId).innerText === "⬛") {
            //based on current player do x or o
            if (this.currentPlayer) {
                document.getElementById(buttonId).innerText = "O"
                document.getElementById(buttonId).style.background = "Crimson"
                this.currentPlayer = false;
                document.getElementById("gameStateLabel").innerHTML = "Player X turn"
                document.getElementById("gameStateLabel").style.background = "Crimson"
            }
            else {
                document.getElementById(buttonId).innerText = "X"
                document.getElementById(buttonId).style.background = "darkOliveGreen"
                this.currentPlayer = true;
                document.getElementById("gameStateLabel").innerText = "Player O turn"
                document.getElementById("gameStateLabel").style.background = "darkOliveGreen"
            }
            document.getElementById(buttonId).disabled = true;
        }

        //console.log("something clicked !",buttonId,this.currentPlayer)
        if (this.winnerCheck() === true) {
            document.getElementById("gameStateLabel").innerText = "PLAYER O WON !! GG"
            document.getElementById("gameStateLabel").style.background = "gold"
            this.gameEnded()
            return
        } else if (this.winnerCheck() === false) {
            document.getElementById("gameStateLabel").innerText = "PLAYER X WON !! GG"
            document.getElementById("gameStateLabel").style.background = "gold"
            this.gameEnded()
        }
        else if (this.endGameCheck()) {
            document.getElementById("gameStateLabel").innerText = "IT'S A TIE !! GG"
            document.getElementById("gameStateLabel").style.background = "gray"
            this.gameEnded()
        }
    }
    //end the game disabling all button
    gameEnded() {
        var rows = document.getElementById("gameTable").rows
        for(var j=0;j<3;j++){
            for(var i=0;i<3;i++){
            rows[j].cells[i].childNodes[0].disabled = true;
            }
    }
    }
    //checks if all buttons were clicked, end game if true
    endGameCheck() {
        var rows = document.getElementById("gameTable").rows
        //make a counter that will increase everytime you find a button that has a text
        //if that counter exceeds 9 return true
        var filledCounter = 0;
        for(var j=0;j<3;j++){
        for (var i = 0; i < 3; i++) {
            if (rows[j].cells[i].childNodes[0].innerText != "⬛") { filledCounter++; }
            if (filledCounter === 9) { return true }
        }

    }

        return false;
    }
    //check if someone won, by hard coding all possible win scenarios and check agianst it
    //to be re written in dynamic manners later on
    winnerCheck() {
        var rows = document.getElementById("gameTable").rows
        //make a counter that will increase everytime you find a button that has a text
        //if that counter exceeds 9 return true
        var resultArray = []
        for(var j=0;j<3;j++){
        for (var i = 0; i < 3; i++) {
            resultArray.push(rows[j].cells[i].childNodes[0].innerText)
        }
        }
        //FOR X WINNER
        if (resultArray[0] === "X" && resultArray[1] === "X" && resultArray[2] === "X") { return false }
        if (resultArray[3] === "X" && resultArray[4] === "X" && resultArray[5] === "X") { return false }
        if (resultArray[6] === "X" && resultArray[7] === "X" && resultArray[8] === "X") { return false }
        if (resultArray[0] === "X" && resultArray[4] === "X" && resultArray[8] === "X") { return false }
        if (resultArray[2] === "X" && resultArray[4] === "X" && resultArray[6] === "X") { return false }
        if (resultArray[0] === "X" && resultArray[3] === "X" && resultArray[6] === "X") { return false }
        if (resultArray[1] === "X" && resultArray[4] === "X" && resultArray[7] === "X") { return false }
        if (resultArray[2] === "X" && resultArray[5] === "X" && resultArray[8] === "X") { return false }
        //FOR O WINNER
        if (resultArray[0] === "O" && resultArray[1] === "O" && resultArray[2] === "O") { return true }
        if (resultArray[3] === "O" && resultArray[4] === "O" && resultArray[5] === "O") { return true }
        if (resultArray[6] === "O" && resultArray[7] === "O" && resultArray[8] === "O") { return true }
        if (resultArray[0] === "O" && resultArray[4] === "O" && resultArray[8] === "O") { return true }
        if (resultArray[2] === "O" && resultArray[4] === "O" && resultArray[6] === "O") { return true }
        if (resultArray[0] === "O" && resultArray[3] === "O" && resultArray[6] === "O") { return true }
        if (resultArray[1] === "O" && resultArray[4] === "O" && resultArray[7] === "O") { return true }
        if (resultArray[2] === "O" && resultArray[5] === "O" && resultArray[8] === "O") { return true }



        console.log(resultArray)
        return null;
    }
    resetGame() {
        location.reload();
    }
}
var newGame = new TicGame();
newGame.startGame()