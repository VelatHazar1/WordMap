"use client";

import React from "react";
const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "5px solid black",
      position: "absolute",
      top: "50px",
      right: "-24px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "5px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "70px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "-65px",
      rotate: "30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "70px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "1px",
      rotate: "-30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "90px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "195px",
      right: "-85px",
      rotate: "45deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "90px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "195px",
      right: "2px",
      rotate: "-45deg",
      transformOrigin: "right bottom",
    }}
  />
);
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="flex flex-col justify-start items-start   relative ">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="w-[5px] h-[50px] bg-black top-0  right-0 absolute"></div>
      <div className="w-[200px] h-[5px] bg-black ml-[120px]"></div>
      <div className="h-[400px] w-[5px] bg-black ml-[120px]"></div>
      <div className="h-[5px] w-[250px]	bg-black"></div>
    </div>
  );
};

export default HangmanDrawing;
