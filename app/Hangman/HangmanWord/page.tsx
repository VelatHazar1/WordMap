"use client";

import React from "react";
type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};
const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
  return (
    <div className="flex gap-14 text-8xl font-semi-bold	uppercase	font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-[5px] border-black	">
          <span
            className={`${
              guessedLetters.includes(letter) ? "visible" : "invisible"
            }   `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
