class TicGame {
    constructor() {
        this.currentPlayer = false;
    }
    //run stuff on the start of the game
    startGame(){
        console.log("Game started !")
    }
    //handle palyer click, determin what button clicked and who clicked it
    onPlayerClick(buttonId,player){
        //check no one clicked it already 
        if(document.getElementById(buttonId).innerText === ""){
            //based on current player do x or o
            if(this.currentPlayer){
                document.getElementById(buttonId).innerText = "O"
                this.currentPlayer = false;
            }
            else{
                document.getElementById(buttonId).innerText = "X"
                this.currentPlayer = true;
            }
        }
       
        console.log("something clicked !",buttonId,this.currentPlayer)
        console.log(this.endGameCheck())
    }
    //checks if all buttons were clicked, end game if true
    endGameCheck(){      
        var rows = document.getElementById("gameTable").rows
        //make a counter that will increase everytime you find a button that has a text
        //if that counter exceeds 9 return true
        var filledCounter = 0;
        for(var i = 0;i < 3; i++){
            if(rows[0].cells[i].childNodes[0].innerText != "") {  filledCounter++; }
            if(filledCounter === 9){ return true}
        }
        for(var i = 0;i < 3; i++){
            if(rows[1].cells[i].childNodes[0].innerText != "") {  filledCounter++; }
            if(filledCounter === 9){ return true}
        }
        for(var i = 0;i < 3; i++){
            if(rows[2].cells[i].childNodes[0].innerText != "") {  filledCounter++; }
            if(filledCounter === 9){ return true}
        }

        return false;
    }
  }
  var newGame = new TicGame();
  newGame.startGame()