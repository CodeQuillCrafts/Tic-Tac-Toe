const twoplayers = document.querySelector('.twoplayers');
const twoplayersboxes = document.querySelectorAll('.twoplayers .box');
const computer = document.querySelector('.computer');
const computerboxes = document.querySelectorAll('.computer .box');
const result = document.querySelector("section.result p.result");
let turn = "X";
let moves = 0;

twoplayersboxes.forEach(box => box.addEventListener('click', handlePlayerMove));
computerboxes.forEach(box => box.addEventListener('click', handleComputerMove));

function handlePlayerMove() {
    if (result.textContent) return;
    if (this.textContent === "") {
        this.textContent = turn;
        if (wins(twoplayersboxes, turn)) {
            result.textContent = `${turn} wins`;
        }
        turn = (turn === "X") ? "O" : "X";
        moves++;
        checkDraw();
    }
}

function handleComputerMove() {
    if (result.textContent) return;
    if (this.textContent === "") {
        this.textContent = turn;
        if (wins(computerboxes, turn)) {
            result.textContent = `${turn} wins`;
        }
        turn = (turn === "X") ? "O" : "X";
        moves++;
        checkDraw();
        if (!result.textContent) {
            setTimeout(() => {
                computerMove();
            }, 1500);
        }
    }
}

function computerMove() {
    let emptyBoxes = Array.from(computerboxes).filter(box => box.textContent === "");
    if (emptyBoxes.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
        emptyBoxes[randomIndex].textContent = turn;
        if (wins(computerboxes, turn)) {
            result.textContent = `${turn} wins`;
        }
        turn = (turn === "X") ? "O" : "X";
        moves++;
        checkDraw();
    }
}

function checkDraw() {
    if (moves === 9 && !result.textContent) {
        result.textContent = "Draw";
    }
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