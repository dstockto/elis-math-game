import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Eli's Math Game</header>
      <section className={'game'}>
        <div className={'problem'}>345 + 291 = <input type={'text'} size={5}/></div>
        <div className={'problem'}>222 + 555 = 777 <span role={'img'} aria-label={"Correct"}>😎</span></div>
        <div className={'problem'}>435 + 123 = 36 <span role={'img'} aria-label={"Incorrect"}>🤬</span></div>
      </section>
      <section className={'scores'}>
        <div>Correct: 1</div>
        <div>Incorrect: 1</div>
        <div>Remaining: 48</div>
      </section>
      <section className={'graphs'}>
        Graphs coming soon!
      </section>
    </div>
  );
}

export default App;
