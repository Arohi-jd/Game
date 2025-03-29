import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import paperIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import rockIcon from "../assets/icon-rock.svg";

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  const getIcon = (choice) => {
    switch(choice) {
      case "paper": return paperIcon;
      case "scissors": return scissorsIcon;
      case "rock": return rockIcon;
      default: return "";
    }
  };

  return (
    <div className="game">
      <div className="player">
        <h3>You Picked</h3>
        <button className={`btn ${myChoice} animate`}>
          <img src={getIcon(myChoice)} alt={myChoice} className="choice-icon" />
          <span className="choice-text">{myChoice.charAt(0).toUpperCase() + myChoice.slice(1)}</span>
        </button>
      </div>
      {playerWin && (
        <div className="result">
          <h2 className="animate">You {playerWin === "draw" ? "Draw" : playerWin === "win" ? "Win" : "Lose"}</h2>
          <Link to="/" className="play-again animate">
            Play Again
          </Link>
        </div>
      )}
      <div className="computer">
        <h3>The House Picked</h3>
        {counter === 0 ? (
          <button className={`btn ${house} animate`}>
            <img src={getIcon(house)} alt={house} className="choice-icon" />
            <span className="choice-text">{house.charAt(0).toUpperCase() + house.slice(1)}</span>
          </button>
        ) : (
          <div className="counter animate">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game; 