"use client";

import React from "react";
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

type KeyBoardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const KeyBoard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyBoardProps) => {
  return (
    <div className="grid grid-cols-12	gap-5 ">
      {KEYS.map((key) => {
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
