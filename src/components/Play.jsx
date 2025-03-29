import React from "react";
import { Link } from "react-router-dom";
import paperIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import rockIcon from "../assets/icon-rock.svg";

const Play = ({ setMyChoice }) => {
  return (
    <div className="play">
      <h1 className="title">CHOOSE</h1>
      <div className="choices">
        <Link to="/game">
          <button 
            className="btn paper"
            onClick={() => setMyChoice("paper")}
          >
            <img src={paperIcon} alt="Paper" className="choice-icon" />
            <span className="choice-text">Paper</span>
          </button>
        </Link>
        <Link to="/game">
          <button 
            className="btn scissors"
            onClick={() => setMyChoice("scissors")}
          >
            <img src={scissorsIcon} alt="Scissors" className="choice-icon" />
            <span className="choice-text">Scissors</span>
          </button>
        </Link>
        <Link to="/game">
          <button 
            className="btn rock"
            onClick={() => setMyChoice("rock")}
          >
            <img src={rockIcon} alt="Rock" className="choice-icon" />
            <span className="choice-text">Rock</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Play; 