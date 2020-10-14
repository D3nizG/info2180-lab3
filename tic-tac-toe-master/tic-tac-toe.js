"use strict"
var nullBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
var winner = false;

// Add squares on click
window.addEventListener("load",
    function() {
        const board = document.getElementById("board").children;
        layoutBoard(board);
        gameboard(board);
        addHover(board);
        document.getElementsByClassName('btn')[0].onclick = function() {
            resetGameState(board);
            console.log(board);
        }
    });




function layoutBoard(board) {

    for (let x = 0; x < board.length; x++) {
        board[x].className = 'square';
        board[x].textContent = "";
        // console.log(board[x]);

    }
}


function playerChange(currentPlayer) {
    if (currentPlayer === 'X') {
        return 'O';
    } else {
        return 'X';
    }
}

function gameboard(board) {

    let player = playerChange('O')
    for (let x = 0; x < board.length; x++) {
        board[x].addEventListener("click",
            function() {
                console.log(nullBoard)
                let element = this;
                if (element.innerHTML === "" && winner === false) {
                    document.getElementById("status").textContent = `It's ${player}'s turn`;
                    if (player === 'X') {
                        addX(element);
                        placemark("X", x);
                        isWinner("X");
                        player = playerChange('X');
                    } else {
                        addO(element);
                        placemark("O", x);
                        isWinner("O");
                        player = playerChange('O');
                    };
                }
                // console.log("clicked");
            })

    }
}

function addX(square) {
    if (square.classList.contains('X') || square.classList.contains('O') === false) {
        square.classList.add("X");
        square.textContent = "X";
    }

}

function addO(square) {
    if (square.classList.contains('O') || square.classList.contains('X') === false) {
        square.classList.add("O");
        square.textContent = "O";
    }
}

function addHover(board) {
    for (let x = 0; x < board.length; x++) {
        board[x].addEventListener("mouseover", function() {
            board[x].classList.add("hover")
        });

        board[x].addEventListener("mouseout", function() {
            board[x].classList.remove("hover")
        });
    }
}

function placemark(letter, index) {
    switch (index) {
        case 0:
            nullBoard[0][0] = letter;
            break;
        case 1:
            nullBoard[0][1] = letter;
            break;
        case 2:
            nullBoard[0][2] = letter;
            break;
        case 3:
            nullBoard[1][0] = letter;
            break;
        case 4:
            nullBoard[1][1] = letter;
            break;
        case 5:
            nullBoard[1][2] = letter;
            break;
        case 6:
            nullBoard[2][0] = letter;
            break;
        case 7:
            nullBoard[2][1] = letter;
            break;
        case 8:
            nullBoard[2][2] = letter;
            break;

    }
}

const winningCombo = [
    //rows
    [
        [0][0],
        [0][1],
        [0][2]
    ],
    [
        [1][0],
        [1][1],
        [1][2]
    ],
    [
        [2][0],
        [2][1],
        [2][2]
    ],
    //cols
    [
        [0][0],
        [1][0],
        [2][0]
    ],
    [
        [0][1],
        [1][1],
        [2][1]
    ],
    [
        [0][2],
        [1][2],
        [2][2]
    ],
    //diagonals
    [
        [0][0],
        [1][1],
        [2][2]
    ],
    [
        [0][2],
        [1][1],
        [2][0]
    ],
];


const rowValidate = (letter) => {
    if (nullBoard[0][0] === letter && nullBoard[0][1] === letter && nullBoard[0][2] === letter) {
        return true;
    } else if (nullBoard[1][0] === letter && nullBoard[1][1] === letter && nullBoard[1][2] === letter) {
        return true;
    } else if (nullBoard[2][0] === letter && nullBoard[2][1] === letter && nullBoard[2][2] === letter) {
        return true;
    }
}

const columnValidate = (letter) => {
    if (nullBoard[0][0] === letter && nullBoard[1][0] === letter && nullBoard[2][0] === letter) {
        return true;
    } else if (nullBoard[0][1] === letter && nullBoard[1][1] === letter && nullBoard[2][1] === letter) {
        return true;
    } else if (nullBoard[0][2] === letter && nullBoard[1][2] === letter && nullBoard[2][2] === letter) {
        return true;
    }
}

const diagValidate = (letter) => {
    if (nullBoard[0][0] === letter && nullBoard[1][1] === letter && nullBoard[2][2] === letter) {
        return true;
    } else if (nullBoard[0][2] === letter && nullBoard[1][1] === letter && nullBoard[2][0] === letter) {
        return true;
    }
}

function isWinner(letter) {
    console.log(letter)
    if (rowValidate(letter)) {
        stateWinner(letter);
        winner = true;

    } else if (columnValidate(letter)) {
        stateWinner(letter);
        winner = true;

    } else if (diagValidate(letter)) {
        stateWinner(letter);
        winner = true;

    }
}

function stateWinner(letter) {
    document.getElementById("status").textContent = `Congratulations! ${letter} is the Winner!`;
    document.getElementById("status").classList.add("you-won");

    // let y = document.getElementById("status").textContent 
    // = `Congratulations! ${letter} is the Winner!`;    
}


function resetGameState(board) {
    document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O."
    nullBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    document.getElementById("status").classList.remove("you-won");
    layoutBoard(board);
    winner = false;
}