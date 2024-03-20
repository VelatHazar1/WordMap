"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function getRandomKeys(arr: Array<string>, count: number) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

type KeyBoardProps = {
  wordToGuess: string;
  addGuessedLetter: (letter: string) => void;
};

const KeyBoard = ({ wordToGuess, addGuessedLetter }: KeyBoardProps) => {
  const [shownKeys, setShownKeys] = useState<string[]>([]);
  const calculateKeys = () => {
    const wordToGuessKeysSeparated = wordToGuess
      .split("")
      .sort(() => 0.5 - Math.random());
    console.log(wordToGuessKeysSeparated);

    const randomKeys = getRandomKeys(KEYS, 8);
    console.log(randomKeys);

    setShownKeys([...wordToGuessKeysSeparated, ...randomKeys]);
  };
  useEffect(() => {
    console.log(wordToGuess);

    calculateKeys();
    console.log(shownKeys);
  }, [wordToGuess]);

  return (
    <div className="grid grid-cols-12	gap-5 ">
      {shownKeys.map((key) => {
        return (
          <Button
            onClick={() => {
              addGuessedLetter(key);
            }}
            key={key}
            className="bg-[#00C4EF] hover:bg-white hover:text-black text-white	w-[53px] h-[50px] text-xl
            uppercase rounded-2xl		 "
          >
            {key}
          </Button>
        );
      })}
    </div>
  );
};

export default KeyBoard;
