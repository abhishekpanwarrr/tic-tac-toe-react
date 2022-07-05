import React, { useState } from "react";
import Board from "./components/board";
const App = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({
    xScore: 0,
    oScore: 0,
  });
  console.log("🚀 ~ file: App.js ~ line 20 ~ App ~ scores", scores);
  console.log("🚀 ~ file: App.js ~ line 6 ~ App ~ xPlaying", xPlaying);
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setBoard(updatedBoard);
    setXPlaying((player) => !player);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(
          "🚀 ~ file: App.js ~ line 33 ~ checkWinner ~ board[x]",
          board[x]
        );
        return board[x];
      }
    }
  };

  return (
    <>
      <Board board={board} onClick={handleBoxClick} />
    </>
  );
};

export default App;
