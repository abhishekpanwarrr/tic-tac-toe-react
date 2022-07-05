import React from "react";
import "./index.css";
import Box from "../box";

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => (
        <Box
          key={idx}
          value={value}
          onClick={() => value === null && onClick(idx)}
        />
      ))}
    </div>
  );
};

export default Board;
