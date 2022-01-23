const random = () => {
    const val = Math.floor(Math.random().toFixed(1) * 3)
    switch (val) {
        case 0:
            return "stone"
        case 1:
            return "paper"
        case 2:
            return "scissor"
        default:
            return "paper"
    }
}

const stone = document.getElementById('stone');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const result = document.querySelector('div.result')
const user = document.querySelector("#user")
const comp = document.querySelector("#computer")
// let listen = '';

let userScore =0;
let computerScore =0;

const compareGame = (userOption) => {
    console.log(userOption);
    const computerOption = random();
    if(computerOption===userOption){
        return "It's a Draw";
    }
    // else if(userOption==="stone"&& computerOption==="paper"){
    //     result.innerHTML = "A paper won over you";
    // }
    // else if(userOption==="paper"&& computerOption==="stone"){
    //     result.innerHTML = "You Won";
    // }
    // else if(userOption==="stone"&& computerOption==="scissor"){
    //     result.innerHTML = "You Won!";
    // }
    // else if(userOption==="scissor"&& computerOption==="stone"){
    //     result.innerHTML = "You lost by a Rock!";
    // }
    // else if(userOption==="scissor"&& computerOption==="paper"){
    //     result.innerHTML = "You won";
    // }
    // else if(userOption==="paper"&& computerOption==="scissor"){
    //     result.innerHTML = "You lost!";
    // }
    switch(userOption){
        case "stone":
            switch(computerOption){
                case "paper":
                    computerScore++;
                    return "A paper won over you";
                case "scissor":
                    userScore++;
                    return "Stone beats scissors so you won";
            }
        case "paper":
            switch(computerOption){
                case "stone":
                    userScore++;
                    return "A paper covers rock so you won";
                case "scissor":
                    computerScore++;
                    return "Scissors cut you so bad so you lost";
                }
        case "scissor":
            switch(computerOption){
                case "paper":
                    userScore++;
                    return "A paper is cut by a scissor so you won";
                case "stone":
                    computerScore++;
                    return "Stone beats scissors so you lost";
            }
    }
}
const refreshBoard= ()=>{
    user.innerHTML = userScore;
    comp.innerHTML = computerScore;
}
stone.addEventListener('click',()=>{
    
    result.innerHTML = compareGame('stone');
    refreshBoard();
})
paper.addEventListener('click',()=>{
    result.innerHTML =compareGame('paper');
    refreshBoard();
})
scissor.addEventListener('click',()=>{
    result.innerHTML = compareGame('scissor');
    refreshBoard();
})
