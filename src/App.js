import React from 'react';
import './App.css';
import SettingsIcon from "./Components/SettingsIcon";
import {BrowserRouter as Router, Route} from "react-router-dom";
import TheGame from "./Components/TheGame";

function App() {
  return (
    <div className="App">
      <header>Eli's Math Game</header>
      <Router>
        <Route path={'/'} exact render={TheGame}/>
        <Route path={'/settings'} render={() => <div>settings!</div>}/>
        <SettingsIcon/>
      </Router>
    </div>
  );
}

export default App;
