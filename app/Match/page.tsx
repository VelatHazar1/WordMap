"use client";

import React, { useEffect, useState } from "react";
import { elementaryWords } from "../../assets/words/Elementary";
import { elementaryWordsTurkishMeanings } from "../../assets/words/Elementary";
import { log } from "console";
import GameCard from "./GameCard/page";

const combinedData = [...elementaryWords, ...elementaryWordsTurkishMeanings];

type cardTypes = {
  id: number;
  word: string;
  meaning: string;
};

const Page = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [chosen, setChosen] = useState<cardTypes | null>();
  const [isSolved, setIsSolved] = useState<cardTypes[]>([]);
  const [isWrong, setIsWrong] = useState<cardTypes[] | null>([]);
  const [gameWon, setGameWon] = useState(false); // New state to track game win

  const handleRestart = () => {
    // Reset all game states to restart the game
    // Reset all game states to restart the game
    setChosen(null);
    setIsSolved([]);
    setIsWrong(null);
    setGameWon(false); // Reset game win state
  };
  useEffect(() => {
    if (isSolved.length === combinedData.length) {
      setGameWon(true);
    }
  }, [isSolved]);

  const handleClick = (card: cardTypes) => {
    console.log(card);

    if (chosen && chosen !== card) {
      console.log("secondCard :", card);

      if (
        (elementaryWordsTurkishMeanings.includes(card) &&
          elementaryWordsTurkishMeanings.includes(chosen!)) ||
        (elementaryWords.includes(card) && elementaryWords.includes(chosen!))
      ) {
        setIsWrong([card, chosen!]);
        return;
      }
      if (chosen?.meaning === card.word) {
        setIsSolved([...isSolved, card, chosen]);
        setChosen(null);
      }
      setChosen(null);
      setIsWrong([card, chosen!]);

      // if (elementaryWords.includes(card)) {
      //   if (chosen?.meaning === card.word) {
      //     setIsSolved([...isSolved, card, chosen]);
      //     setChosen(null);
      //   }
      //   setChosen(null);
      //   setIsWrong([card, chosen!]);
      // }
    } else {
      setChosen(card);
    }
    console.log(chosen, isSolved, isWrong);

    setTimeout(() => {
      setIsWrong(null);
    }, 1000);
  };

  // useEffect(() => {
  //   const checkForMatch = () => {
  //     const [first, second] = chosen;
  //     if (cards[first] === cards[second]) {
  //       setSolved([...solved, ...chosen]);
  //     }
  //     setChosen([]);
  //   };

  //   if (chosen.length === 2) {
  //     checkForMatch();
  //   }
  // }, [cards, chosen, solved]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-10">
      <div className="grid grid-cols-4 gap-5 cursor-pointer">
        {combinedData.map((card) => (
          <div
            className={`flex justify-center items-center w-[355px] h-[250px] transform gap-5 rounded-2xl text-2xl ${
              isSolved.includes(card)
                ? "bg-green-300 "
                : chosen === card
                ? "border-2 border-black  bg-white "
                : isWrong?.includes(card)
                ? "animate-shake bg-red-300 "
                : "bg-white "
            }`}
            key={card.id}
            onClick={() => handleClick(card)}
          >
            {card.word}
          </div>
        ))}
      </div>
      {gameWon && <GameCard onRestart={handleRestart} />}
    </div>
  );
};

export default Page;
