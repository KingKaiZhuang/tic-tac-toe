import React from "react";
import Board from "./Board";
import { useState } from "react";
import "../css/tictactoe.css";

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `回到第${move}步`;
    } else {
      description = "回到開始";
    }
    return (
      <>
        <li key={move}>
          <button onClick={() => jumpTo(move)}> {description}</button>
        </li>
      </>
    );
  });

  return (
    <>
      <div className="game">
        <div className="board-item">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <h4>遊戲歷程</h4>
          <p>{moves}</p>
        </div>
      </div>
    </>
  );
}
