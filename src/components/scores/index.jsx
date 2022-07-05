import React from "react";
import "./index.css";
const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreBoard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        Player X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>
        Player O - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
