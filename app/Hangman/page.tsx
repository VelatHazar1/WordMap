"use client";

import React, { useEffect, useState } from "react";
import { hangManWords } from "@/assets/words/Elementary";
import HangmanDrawing from "./HangmanDrawing/page";
import HangmanWord from "./HangmanWord/page";
import KeyBoard from "./KeyBoard/page";

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return hangManWords[Math.floor(Math.random() * hangManWords.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault(); //
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  return (
    <div className="flex flex-col justify-start	items-center	w-full h-screen	 gap-10	">
      <div className="flex flex-col gap-2 text-xl  m-5 items-center max-w-[800px]">
        <h1>{isWinner && "YOU WON - Refresh to Try Other Words"}</h1>
        <h1>{isLoser && "DON`T LOSE YOUR HOPE JUST REFRESH"}</h1>
      </div>
      <HangmanDrawing
        numberOfGuesses={incorrectLetters.length}
      ></HangmanDrawing>
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      ></HangmanWord>
      <KeyBoard
        wordToGuess={wordToGuess}
        addGuessedLetter={addGuessedLetter}
      ></KeyBoard>
    </div>
  );
};

export default Hangman;
