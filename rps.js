function computerChoice () {
    let choice = ['Rock', 'Paper', 'Scissor']
    let randomChoice = parseInt(Math.random() * 3)
    return choice[randomChoice]
}

function play () {
    let computer = computerChoice()
    let userChoice = prompt('Hi, What do you want to choose : Rock, Paper or Scissor ?')
    if (userChoice === "") {
        alert('Dont be Boring ! Type something');
        let userChoice = prompt('Hi, What do you want to choose : Rock, Paper or Scissor ?')
        rpsLogic(userChoice, computer)
    } else {
        let v = userCheck(userChoice)
        if (v[0] === true ) {
            rpsLogic(userChoice, computer)
        } else if (v[0] === false) {
            userChoice = prompt(v[1])
            rpsLogic(userChoice, computer)
            // userCheck(userChoice)
        }
    }
}

function rpsLogic (userChoice, computer) {
    let u = userChoice.toLowerCase()
    let c = computer.toLowerCase()
    if (c === u) {
        document.getElementById("demo").innerHTML = "Oh ! Sorry, its a draw";
    } else if (c === 'rock' && u === 'paper') {
        document.getElementById("demo").innerHTML = "Congrats, You Won..,Computer lose..";
    } else if (c === 'paper' && u === 'scissor') {
        document.getElementById("demo").innerHTML = "Congrats, You Won..,Computer lose..";
    } else if (c === 'scissor' && u === 'rock') {
        document.getElementById("demo").innerHTML = "Congrats, You Won..,Computer lose..";
    } else if (u === 'rock' && c === 'paper') {
        document.getElementById("demo").innerHTML = "Oh ! Computer Won..,You lose..";
    } else if (u === 'paper' && c === 'scissor') {
        document.getElementById("demo").innerHTML = "Oh ! Computer Won..,You lose..";
    } else if (u === 'scissor' && c === 'rock') {
        document.getElementById("demo").innerHTML = "Oh ! Computer Won..,You lose..";
    }
}

function userCheck (userChoice) {
    let u = userChoice.toLowerCase()
    if (u[0] === 'r' && u !== 'rock') {
        return [false, 'Did you mean Rock ?']
       // alert('Did you mean Rock ?.please enter Rock');
    } else if (u[0] === 'p' && u !== 'paper') {
        return [false, 'Did you mean Paper ?']
        // alert('Did you mean Paper ?.please enter Paper');
    } else if (u[0] === 's' && u !== 'scissor') {
        return [false, 'Did you mean Scissor ?']
        // alert('Did you mean Scissor ?.please enter Scissors');
    } else if(u !== 'rock' && u !== 'paper' && u !== 'scissors') {
        return [false,'I dont know .. What you mean'];
    }else {
        return [true, '']
        // alert('I dont know .what you mean');
    }
}

function refresh() {
    location.reload();
}

// let cmpchoice = Math.random();
// if(cmpchoice < 0.34) {
// 	cmpchoice = "rock";
// }
// else if(cmpchoice <= 0.67){
// 	cmpchoice = "paper";
// }
// else {
// cmpchoice = "scissors";
// }   
// function myfun() {
//     let choice = prompt("do you choose rock ,paper or scissors?");
//     if(cmpchoice ==  choice ) {
//          alert("tie");
//          document.getElementById("demo").innerHTML = "tie....";
//     }
//     else if(cmpchoice == "rock" && choice == "paper") {
//         document.getElementById("demo").innerHTML = "user win...computer choose: paper";
//     }
//     else if(cmpchoice == "paper" && choice == "scissors") {
//         document.getElementById("demo").innerHTML = "user win...computer choose: scissors";
//     }
//     else if(cmpchoice == "scissors" && choice == "rock") {
//         document.getElementById("demo").innerHTML = "user win... computer choose: rock";
//     }
//     else if(cmpchoice == "paper" && choice == "rock") {
//         document.getElementById("demo").innerHTML = "computer win...user choose:rock";
//     }
//     else if(cmpchoice == "scissors" && choice == "paper") {
//         document.getElementById("demo").innerHTML = "computer win...user choose:paper";
//     }
//     else if(cmpchoice == "rock" && choice == "scissors") {
//         document.getElementById("demo").innerHTML = "computer win...user choose:scissors";
//     }
    
// }
// function rps() {
//     if()
// }