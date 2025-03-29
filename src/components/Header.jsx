import React from "react";

const Header = ({ score }) => {
  return (
    <div className="header">
      <h1>ROCK PAPER SCISSORS</h1>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  );
};

export default Header; 