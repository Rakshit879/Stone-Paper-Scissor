let choices = document.querySelectorAll(".gamechoice");
const options = ["rock", "paper", "scissor"];
let rsltMsg = document.querySelector("#rsltMsg");
let resultMessage = document.querySelector(".resultMessage");
let playerscore = document.getElementById("player-score");
let computerscore = document.getElementById("computer-score");
let cScore = parseInt(computerscore.innerText);
let pScore = parseInt(playerscore.innerText);


function compChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

for(let choice of choices){
    choice.addEventListener("click",()=>{
        let id = choice.getAttribute("id");
        let computerchoice = compChoice();
        console.log(computerchoice);
        if(id===computerchoice){
            rsltMsg.innerText = "Draw Game";
            resultMessage.style.backgroundColor = "yellow";
        }
        else if(id==="rock" && computerchoice==="paper"){
            console.log("computer won");
            rsltMsg.innerText = `Computer won, computer's choice is: ${computerchoice}`;
            resultMessage.style.backgroundColor = "red";
            cScore++;
            computerscore.innerText = cScore;
        }
        else if(id==="rock" && computerchoice==="scissor"){
            console.log("player won");
            rsltMsg.innerText = `Player won, computer's choice is: ${computerchoice}`;  
            resultMessage.style.backgroundColor = "green";
            pScore++;
            playerscore.innerText = pScore;
        }
        else if(id==="paper" && computerchoice==="rock"){
            console.log("player won");
            rsltMsg.innerText = `Player won, computer's choice is: ${computerchoice}`;
            resultMessage.style.backgroundColor = "green";
            pScore++;
            playerscore.innerText = pScore;
        }
        else if(id==="paper" && computerchoice==="scissor"){
            console.log("computer won");
            rsltMsg.innerText = `Computer won, computer's choice is: ${computerchoice}`;
            resultMessage.style.backgroundColor = "red";
            cScore++;
            computerscore.innerText = cScore;
        }
        else if(id==="scissor" && computerchoice==="rock"){
            console.log("computer won");
            rsltMsg.innerText = `Computer won, computer's choice is: ${computerchoice}`;
            resultMessage.style.backgroundColor = "red";
            cScore++;
            computerscore.innerText = cScore;
        }
        else if(id==="scissor" && computerchoice==="paper"){
            console.log("player won");
            rsltMsg.innerText = `Player won, computer's choice is: ${computerchoice}`;
            resultMessage.style.backgroundColor = "green";
            pScore++;
            playerscore.innerText = pScore;
        }
    })
}