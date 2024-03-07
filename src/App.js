import Square from "./components/Square";
import { useState } from "react";

function Board() {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  let lines = calculateWinner(square);
  let status;
  if (lines) {
    status = "Winner: " + square[lines[0]];
  }
  else {
    if (isSquareFull(square)) {
      status = "Draw";
    } else {
      status = "Next: " + (xIsNext ? "X" : "O");
    }
  }

  let winner = calculateWinner(square);

  function isSquareFull(square) {
    for (var i = 0; i < square.length; i++) {
      if (square[i] === null)
        return false;
    }

    return true;
  }

  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (var i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c])
        return lines[i];
    }

    return null;
  }

  function handleClick(i) {
    if (square[i] || calculateWinner(square))
      return;
    const nextSquare = square.slice();
    if (xIsNext === true) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquare(nextSquare);
    setXisNext(!xIsNext);
  }

  return (
    <div className="board-container">
      <h1 className="status">{status}</h1>
      <div className="board">
        <div className="board-row">
          <Square onSquareClick={() => handleClick(0)} value={square[0]}  isWinner={winner && winner.includes(0)} />
          <Square onSquareClick={() => handleClick(1)} value={square[1]}  isWinner={winner && winner.includes(1)} />
          <Square onSquareClick={() => handleClick(2)} value={square[2]}  isWinner={winner && winner.includes(2)} />
        </div>

        <div className="board-row">
          <Square onSquareClick={() => handleClick(3)} value={square[3]} isWinner={winner && winner.includes(3)} />
          <Square onSquareClick={() => handleClick(4)} value={square[4]}  isWinner={winner && winner.includes(4)} />
          <Square onSquareClick={() => handleClick(5)} value={square[5]}  isWinner={winner && winner.includes(5)} />
        </div>

        <div className="board-row">
          <Square onSquareClick={() => handleClick(6)} value={square[6]}  isWinner={winner && winner.includes(6)} />
          <Square onSquareClick={() => handleClick(7)} value={square[7]}  isWinner={winner && winner.includes(7)} />
          <Square onSquareClick={() => handleClick(8)} value={square[8]}  isWinner={winner && winner.includes(8)} />
        </div>
      </div>
      <footer class="footer">Copyright &copy; Dabeer Khan</footer>
    </div>
    
  )
}


export default Board;
