"use client";

import React, { useEffect, useState } from "react";
import { elementaryWords } from "../../assets/words/Elementary";
import { elementaryWordsTurkishMeanings } from "../../assets/words/Elementary";

const combinedData = [...elementaryWords, ...elementaryWordsTurkishMeanings];

const Page = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [chosen, setChosen] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);

  useEffect(() => {
    const checkForMatch = () => {
      const [first, second] = chosen;
      if (cards[first] === cards[second]) {
        setSolved([...solved, ...chosen]);
      }
      setChosen([]);
    };

    if (chosen.length === 2) {
      checkForMatch();
    }
  }, [cards, chosen, solved]);

  const handleClick = (index: number) => {
    setChosen([...chosen, index]);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-10">
      <div className="grid grid-cols-4 gap-5 cursor-pointer">
        {combinedData.map((card, index) => (
          <div
            className={`flex justify-center items-center w-[355px] h-[250px] transform gap-5 rounded-2xl text-2xl ${
              solved.includes(index)
                ? "bg-green-500"
                : chosen.includes(index)
                ? "bg-red-500"
                : "bg-white"
            }`}
            key={card.id}
            onClick={() => handleClick(index)}
          >
            {card.word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
