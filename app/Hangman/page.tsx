"use client";

import React, { useEffect, useState } from "react";
import { hangManWords } from "@/assets/words/Elementary";
import HangmanDrawing from "./HangmanDrawing/page";
import HangmanWord from "./HangmanWord/page";
import KeyBoard from "./KeyBoard/page";
import { Button } from "@/components/ui/button";

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return hangManWords[Math.floor(Math.random() * hangManWords.length)];
  });
  const [restart, setRestart] = useState(false); // State to trigger restart
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
    if (restart) {
      setWordToGuess(
        hangManWords[Math.floor(Math.random() * hangManWords.length)]
      );
      setGuessedLetters([]);
      setRestart(false);
    }
  }, [restart]);

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
  }, [guessedLetters]);
  const handleRestart = () => {
    setRestart(true); // Set restart state to trigger game restart
  };
  return (
    <div className="flex flex-col justify-start	items-center	w-full 	 gap-10	h-[100dvh]">
      <div
        className={`flex flex-col rounded-3xl  text-xl  m-5 justify-center items-center max-w-[800px] bg-blue-200 w-[25rem] p-2 ${
          !isLoser && !isWinner ? "invisible" : ""
        }`}
      >
        <h1 className="text-green-700 text-2xl font-bold ">
          {isWinner && "YOU WON "}
        </h1>
        <h1 className="text-red-700 text-2xl font-bold  ">
          {isLoser && "DON`T LOSE YOUR HOPE"}
        </h1>
        <Button
          onClick={handleRestart}
          className="px-4 py-2 bg-[#C1D3FE] text-black rounded-3xl hover:bg-[#e2eafc] focus:outline-none text-2xl  "
        >
          Restart Game
        </Button>
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
