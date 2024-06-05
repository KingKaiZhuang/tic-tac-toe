import React from "react"; // 引入 React 庫
import Square from "./Square"; // 引入 Square 組件
import "../css/tictactoe.css"; // 引入樣式表

export default function Board({ xIsNext, squares, onPlay }) {
  // 定義 Board 組件，接收 xIsNext, squares, onPlay 作為 props

  // 點擊方格時的處理函數
  const handleClick = (i) => {
    // 如果已經有贏家或者該方格已經被點擊過，則不執行任何操作
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // 複製當前的 squares 狀態
    const nextSquares = squares.slice();
    console.log("Square", i); // 輸出點擊的方格索引
    // 根據 xIsNext 決定標記 "X" 或 "O"
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // 調用 onPlay 函數，更新 squares 狀態
    onPlay(nextSquares);
  };

  // 計算贏家函數
  const calculateWinner = (squares) => {
    // 所有可能的贏家組合
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // 檢查每一組合是否有三個相同的標記
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // 返回贏家 "X" 或 "O"
      }
    }
    return null; // 沒有贏家返回 null
  };

  // 設置狀態文字，顯示下一個玩家
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  // 返回渲染的組件
  return (
    <>
      <div className="status">{status}</div> {/* 狀態文字 */}
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />{" "}
        {/* 第一排方格 */}
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />{" "}
        {/* 第二排方格 */}
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />{" "}
        {/* 第三排方格 */}
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
