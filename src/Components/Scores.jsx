import React from "react";

export default function Scores({correct, incorrect, remaining}) {
  return (
  <section className={'scores'}>
    <div>Correct: {correct}</div>
    <div>Incorrect: {incorrect}</div>
    <div>Remaining: {remaining}</div>
  </section>
  );
};
