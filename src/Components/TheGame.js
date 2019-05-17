import React from "react";
import Game from "./Game";
import Scores from "./Scores";
import ScoreGraphs from "./ScoreGraphs";

export default function TheGame() {
  return <section className={'game-content'}>
    <Game/>
    <Scores
      correct={77}
      incorrect={88}
      remaining={22}
    />
    <ScoreGraphs/>
  </section>;
};
