const startBtn = document.querySelector('#start');
const landingScreen = document.querySelector('.landingScreen');
const container = document.querySelector('.container');
const box = document.querySelectorAll(".box");
const endScreen = document.querySelector(".endScreen")
const replayBtn = document.querySelector("#replay");

// Start Button
if (startBtn) {
    startBtn.addEventListener('click', () => {
        container.style.opacity = "1";
        container.style.visibility = "visible";
        landingScreen.style.display = "none";
    });
};

// Replay button
if (replayBtn) {
    replayBtn.addEventListener('click', () => {
        box.forEach(e => {
            e.innerText = "";
        });
        endScreen.style.visibility = "hidden";
        container.style.visibility = "visible";
        container.style.opacity = "1";
        turn = player1;
    });
};

// ChangeTurns
const player1 = "X";
const player2 = "O";
let turn = player1;
const changeTurns = () => {
    return turn = (turn === player1) ? player2 : player1;
};


// Game Logic
box.forEach(boxes => {
    boxes.addEventListener('click', () => {
        if (boxes.innerText === "") {
            boxes.innerText = turn;
            checkWin();
            changeTurns();
        };
    });
});

// Checks win
const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(win => {


        if (box[win[0]].innerText === box[win[1]].innerText && box[win[1]].innerText === box[win[2]].innerText && box[win[0]].innerText !== "") {

            endScreen.style.opacity = "1";
            endScreen.style.visibility = "visible";
            container.style.visibility = "hidden";
            document.querySelector(".gif-container").style.display = "block";
            document.getElementById("winner").innerText = `${turn} Won`;
            return true;


        } else {
            checkDraw();
        };

    });

};


// Check Draw
const checkDraw = () => {

    for (boxes of box) {
        if (boxes.innerText === "") {
            return false;
        };
    };

    endScreen.style.opacity = "1";
    endScreen.style.visibility = "visible";
    container.style.visibility = "hidden";
    document.querySelector(".gif-container").style.display = "none";
    document.getElementById("winner").innerText = `Match Drawn`;
    return true;

};





