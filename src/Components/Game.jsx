import React from "react";

export default function Game() {
  return (
    <section className={'game'}>
      <div className={'problem'}>345 + 291 = <input type={'text'} size={5}/></div>
      <div className={'problem'}>222 + 555 = 777 <span role={'img'} aria-label={"Correct"}>😎</span></div>
      <div className={'problem'}>435 + 123 = 36 <span role={'img'} aria-label={"Incorrect"}>🤬</span></div>
    </section>
  );
}
