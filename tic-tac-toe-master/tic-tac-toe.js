"use strict"

// Add squares on click
window.addEventListener("load", function(){
    document.getElementsByClassName('btn')[0].onclick = function () { 
        let board = document.getElementById("board").children;
        // console.log(board);
        let y = addSquares(board);
    }
});


/**
 * 
 * @param {object} board The div holdind all the divs that represent 
 * squares
 */
function addSquares(board) {
    for (var x = 0; x < board.length; x++) {
        board[x].className = 'square';
        // console.log(board[x]);
    }
}

