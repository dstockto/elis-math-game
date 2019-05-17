import React from 'react';
import './App.css';
import SettingsIcon from "./Components/SettingsIcon";
import {BrowserRouter as Router, Route} from "react-router-dom";
import TheGame from "./Components/TheGame";
import Settings from "./Components/Settings";

function App() {
  return (
    <div className="App">
      <header>Eli's Math Game</header>
      <Router>
        <Route path={'/'} exact render={TheGame}/>
        <Route path={'/settings'} render={Settings}/>
        <Route path={'/'} render={SettingsIcon} />
      </Router>
    </div>
  );
}

export default App;
