import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <Router>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route
            path="/game"
            element={
              <Game myChoice={myChoice} score={score} setScore={setScore} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
