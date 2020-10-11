"use strict"

// Add squares on click
window.addEventListener("load", 
    function(){
        document.getElementsByClassName('btn')[0].onclick = function () { 
            const board = document.getElementById("board").children;
            // console.log(board);
            layoutBoard(board);
            gameboard(board);
            addHover(board);

        }
    });




function layoutBoard(board) {

    for (let x = 0; x < board.length; x++) {
        board[x].className = 'square';
        board[x].textContent = "";
        // console.log(board[x]);

    }

}

function gameboard(board){

    // let nullBoard = [ "","","","","","","","","" ];

    // console.log(nullBoard)

    let player = true;
    for (let x = 0; x < board.length; x++){
        board[x].addEventListener("click", 
            function(){

                let element = this;

                if (player){

                    addX(element);
                    player = !player;
                    let msg = document.getElementById("status").textContent 
                        = "It's Os Turn";
                }
                else {
                    addO(element);
                    player = !player;
                    let msg = document.getElementById("status").textContent
                        = "It's Xs Turn";
                };
            // console.log("clicked");
            })

    } 
} 

function addX(mark){

    mark.classList.add("X");
    mark.textContent = "X";

}

function addO(mark){

    mark.classList.add("O");
    mark.textContent = "O";

}

function addHover(board){
    for (let x = 0; x < board.length; x++){
        board[x].addEventListener("mouseover", function(){
            board[x].classList.add("hover")});
            
            board[x].addEventListener("mouseout", function(){
                board[x].classList.remove("hover")});
    }
}

// function placemark(nullboard, letter, x){
//     switch (x) {
//         case 0:
//             nullboard[0] = letter;
//             break;
//         case 1:
//             nullboard[1] = letter;
//             break;
//         case 2:
//             nullboard[2] = letter;
//             break;
//         case 3:
//             nullboard[3] = letter;
//             break;
//         case 4:
//             nullboard[4] = letter;
//             break;
//         case 5:
//             nullboard[5] = letter;
//             break;
//         case 6:
//             nullboard[6] = letter;
//             break;
//         case 7:
//             nullboard[7] = letter;
//             break;
//         case 8:
//             nullboard[8] = letter;
//             break;

//     }
// }





