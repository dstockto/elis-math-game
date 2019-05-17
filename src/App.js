import React from 'react';
import './App.css';
import Scores from "./Components/Scores";
import ScoreGraphs from "./Components/ScoreGraphs";
import Game from "./Components/Game";
import Settings from "./Components/Settings";

function App() {
  return (
    <div className="App">
      <header>Eli's Math Game</header>
      <section className={'game-content'}>
        <Game />
        <Scores
          correct={77}
          incorrect={88}
          remaining={22}
        />
        <ScoreGraphs/>
      </section>
      <Settings/>
    </div>
  );
}

export default App;
