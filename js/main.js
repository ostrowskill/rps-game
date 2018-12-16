// score

let userScore = 0;
let itScore = 0;

// DOM elems

// scoreboard
const userScore_span = document.querySelector('.user-score');
const itScore_span = document.querySelector('.it-score');
const msgOutput = document.querySelector('.msg-output');
const verdict_p = document.querySelector('.verdict');

// pics
const rockBtn = document.querySelector('#r');
const paperBtn = document.querySelector('#p');
const scissorsBtn = document.querySelector('#s');

// random picker
function randomPick() {
    const itPick = ['r', 'p', 's'];
    const rndNum = Math.floor(Math.random() * itPick.length);
    return itPick[rndNum];
}

// translation

function translate(arg) {
    if (arg === 'r') return 'rock'
    if (arg === 'p') return 'paper'
    return 'scissors'
}

// cases
function win(userChoice, itChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    msgOutput.innerHTML = `you've picked ${translate(userChoice)} and it got ${translate(itChoice)}`;
    verdict_p.classList.add('pop');
    verdict_p.innerHTML = 'WIN!'
    setTimeout( _ => {
        verdict_p.classList.remove('pop');
    }, 400)
    // dodac jakis WOW YOU WON czy cos
}
function lose(userChoice, itChoice) {
    itScore++;
    itScore_span.innerHTML = itScore;
    msgOutput.innerHTML = `you've picked ${translate(userChoice)} and it got ${translate(itChoice)}`;
    verdict_p.innerHTML = 'LOSE!'
    // dodac jakis WOW YOU WON czy cos
}
function draw(userChoice, itChoice) {
    msgOutput.innerHTML = `it's a draaaaw`;
    verdict_p.innerHTML = 'DRAW!'
}

// game
function game(userChoice) {
    const itChoice = randomPick();
    switch (userChoice + itChoice) {
        // wins cases
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, itChoice);
            break;
        // lose cases
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, itChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, itChoice);
            break
    }
}


function main() {

    rockBtn.addEventListener('click', () => {
        game('r');
    });
    paperBtn.addEventListener('click', () => {
        game('p');
    });
    scissorsBtn.addEventListener('click', () => {
        game('s');
    });
}

main();