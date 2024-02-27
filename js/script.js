const twoplayers = document.querySelector('.twoplayers');
const twoplayersboxes = document.querySelectorAll('.twoplayers .box');
const computer = document.querySelector('.computer');
const computerboxes = document.querySelectorAll('.computer .box');
const result = document.querySelector("section.result p.result");
let turn = "X";
let moves = 0;

twoplayersboxes.forEach(element => {
    element.addEventListener('click', () => {
        if (result.textContent)
            return;
        if (element.textContent === "") {
            if (turn === 'X') {
                element.textContent = "X";
                if (wins(twoplayersboxes, 'X')) {
                    result.textContent = "X wins";
                }
                turn = "O";
            } else {
                element.textContent = "O";
                if (wins(twoplayersboxes, 'O')) {
                    result.textContent = "O wins";
                }
                turn = "X";
            }
            moves++;
            if (moves === 9 && !result.textContent) {
                result.textContent = "Draw";
            }
        }
    });
});

computerboxes.forEach(element => {
    element.addEventListener('click', () => {
        if (result.textContent)
            return;
        if (element.textContent === "") {
            if (turn === 'X') {
                element.textContent = "X";
                if (wins(computerboxes, 'X')) {
                    result.textContent = "X wins";
                }
                computerMove();
            }
            moves++;
            if (moves === 9 && !result.textContent) {
                result.textContent = "Draw";
            }
        }
    });
});

function computerMove() {
    if (moves == 9)
        return;
    moves++;
    let getRandomMove = random();
    if (computerboxes[getRandomMove].textContent === '') {
        computerboxes[getRandomMove].textContent = "O";
        if (wins(computerboxes, 'O')) {
            result.textContent = "O wins";
        }
    } else {
        computerMove();
    }
}

function random() {
    return Math.floor(Math.random() * 9)
}

function wins(level, p) {
    if (
        (level[0].textContent === p && level[3].textContent === p && level[6].textContent === p) ||
        (level[1].textContent === p && level[4].textContent === p && level[7].textContent === p) ||
        (level[2].textContent === p && level[5].textContent === p && level[8].textContent === p) ||
        (level[0].textContent === p && level[1].textContent === p && level[2].textContent === p) ||
        (level[3].textContent === p && level[4].textContent === p && level[5].textContent === p) ||
        (level[6].textContent === p && level[7].textContent === p && level[8].textContent === p) ||
        (level[0].textContent === p && level[4].textContent === p && level[8].textContent === p) ||
        (level[2].textContent === p && level[4].textContent === p && level[6].textContent === p)
    ) {
        return true;
    }
    return false;
}