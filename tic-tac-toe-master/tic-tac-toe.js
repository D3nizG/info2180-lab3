"use strict"

// Add squares on click
window.addEventListener("load", 
    function(){

        let nullBoard = [ [null, null, null], [null, null, null], [null, null, null] ];
        document.getElementsByClassName('btn')[0].onclick = function () { 

            const board = document.getElementById("board").children;
            layoutBoard(board);
            gameboard(nullBoard, board);
            addHover(board);
            resetGameState(nullBoard, board);

            // console.log(nullBoard);
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



function gameboard(nullBoard, board){

    let player = true;
    for (let x = 0; x < board.length; x++){
        board[x].addEventListener("click", 
            function(){
                // console.log(nullBoard)
                let element = this;

                if (player){

                    addX(element);
                    player = !player;
                    let msg = document.getElementById("status").textContent 
                        = "It's Os Turn";
                    placemark(nullBoard, "X", x);
                    isWinner(nullBoard, "X");
                }
                else {
                    addO(element);
                    player = !player;
                    let msg = document.getElementById("status").textContent
                        = "It's Xs Turn";
                    placemark(nullBoard, "O", x);
                    isWinner(nullBoard, "O");
                };
            // console.log("clicked");
            })

    } 
} 

function addX(square){
    if (square.classList.contains('X')  || square.classList.contains('O') === false){
    square.classList.add("X");
    square.textContent = "X";
    }
}

function addO(square){
    if (square.classList.contains('O') || square.classList.contains('X') === false){
        square.classList.add("O");
        square.textContent = "O";
        }
    }

function addHover(board){
    for (let x = 0; x < board.length; x++){
        board[x].addEventListener("mouseover", function(){
            board[x].classList.add("hover")});
            
            board[x].addEventListener("mouseout", function(){
                board[x].classList.remove("hover")});
    }
}

function placemark(nullboard, letter, index){
    switch (index) {
        case 0:
            nullboard[0][0] = letter;
            break;
        case 1:
            nullboard[0][1] = letter;
            break;
        case 2:
            nullboard[0][2] = letter;
            break;
        case 3:
            nullboard[1][0] = letter;
            break;
        case 4:
            nullboard[1][1] = letter;
            break;
        case 5:
            nullboard[1][2] = letter;
            break;
        case 6:
            nullboard[2][0] = letter;
            break;
        case 7:
            nullboard[2][1] = letter;
            break;
        case 8:
            nullboard[2][2] = letter;
            break;

    }
}

    const winningCombo = [
        //rows
        [ [0][0] ,[0][1] ,[0][2] ],
        [ [1][0] ,[1][1] ,[1][2] ],
        [ [2][0] ,[2][1] ,[2][2] ],
        //cols
        [ [0][0] ,[1][0] ,[2][0] ],
        [ [0][1] ,[1][1] ,[2][1] ],
        [ [0][2] ,[1][2] ,[2][2] ],
        //diagonals
        [ [0][0] ,[1][1] ,[2][2] ],
        [ [0][2] ,[1][1] ,[2][0] ],
    ];


const rowValidate = (nullBoard, letter) => {
    // console.log(nullBoard);
    if(nullBoard[0][0]===letter && nullBoard[0][1]===letter && nullBoard[0][2]===letter){
        return true;
    }
    else if (nullBoard[1][0]===letter && nullBoard[1][1]===letter && nullBoard[1][2]===letter){
        return true;
    }
    else if (nullBoard[2][0]===letter && nullBoard[2][1]===letter && nullBoard[2][2]===letter){
        return true;
    }
}

const columnValidate = (nullBoard, letter) => {
    if(nullBoard[0][0]===letter && nullBoard[1][0]===letter && nullBoard[2][0]===letter){
        return true;
    }
    else if (nullBoard[0][1]===letter && nullBoard[1][1]===letter && nullBoard[2][1]===letter){
        return true;
    }
    else if (nullBoard[0][2]===letter && nullBoard[1][2]===letter && nullBoard[2][2]===letter){
        return true;
    }
}

const diagValidate = (nullBoard, letter) => {
    if(nullBoard[0][0]===letter && nullBoard[1][1]===letter && nullBoard[2][2]===letter){
        return true;
    }
    else if (nullBoard[0][2]===letter && nullBoard[1][1]===letter && nullBoard[2][0]===letter){
        return true;
    }
}

function isWinner(nullBoard, letter){

    if (rowValidate(nullBoard, letter)){
        stateWinner(letter);

    }else if (columnValidate(nullBoard, letter)){
        stateWinner(letter);

    }else if (diagValidate(nullBoard, letter)){
        stateWinner(letter);
        
    }
}

function stateWinner(letter){
    document.getElementById("status").textContent 
                        = `Congratulations! ${letter} is the Winner!`;
    document.getElementById("status").classList.add("you-won");   

    // let y = document.getElementById("status").textContent 
                        // = `Congratulations! ${letter} is the Winner!`;
    // console.log(y)        
}


function resetGameState (nullBoard, board){
    document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O."
    nullBoard = [ [null, null, null], [null, null, null], [null, null, null] ];
    document.getElementById("status").classList.remove("you-won");           
    layoutBoard(board);

    console.log(nullBoard);
}
