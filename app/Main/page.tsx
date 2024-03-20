"use client";
import { Button } from "@/components/ui/button";
import { CopySlash } from "lucide-react";
import { Joystick } from "lucide-react";
import { BookHeadphones } from "lucide-react";
import { ReplaceAll } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Album } from "lucide-react";
import { Speech } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";

import Link from "next/link";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./page.css";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const main = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <div className="flex flex-col justify-center	items-center	w-full h-screen	 gap-10	">
      <div className="flex gap-5">
        <Button className="bg-white py-10 w-56	 rounded-2xl hover:bg-white">
          <Link href="/Match" className="mr-5">
            <div className="flex items-center justify-start gap-5">
              <CopySlash />
              <h1>Match</h1>
            </div>
          </Link>
        </Button>

        <Button className="bg-white py-10 w-56 rounded-2xl hover:bg-white">
          <Link href="/Hangman">
            <div className="flex items-center justify-start gap-5 ">
              <Joystick />
              <h1>Hangman</h1>
            </div>
          </Link>
        </Button>
        <Button className="bg-white py-10 w-56 rounded-2xl hover:bg-white">
          <div className="flex items-center justify-start gap-5 ">
            <BookHeadphones />
            <h1> SoundScript</h1>
          </div>
        </Button>
      </div>
      <div className="flex gap-5">
        <Button className="bg-white py-10 w-56	 rounded-2xl hover:bg-white">
          <div className="flex items-center justify-start gap-5">
            <ReplaceAll />
            <h1> Word Craft</h1>
          </div>
        </Button>
        <Button className="bg-white py-10 w-56 rounded-2xl hover:bg-white">
          <div className="flex items-center justify-start gap-5 ">
            <LayoutDashboard />
            <h1> Word Search</h1>
          </div>
        </Button>
        <Button className="bg-white py-10 w-56 rounded-2xl hover:bg-white">
          {" "}
          <div className="flex items-center justify-start gap-5 ">
            <Album />
            <h1> Test Yourself</h1>
          </div>
        </Button>
      </div>
      <div>
        <Carousel className="min-w-[45rem]	 ">
          <CarouselContent className="max-w-[46rem]">
            <CarouselItem className="w-[17rem]">
              <div onClick={handleFlip} className="flip-card p-1 h-[20rem]">
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 360 }}
                  transition={{ duration: 0.2, animationDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating(false)}
                >
                  <Card className="flip-card-front w-[45rem] ">
                    <CardContent className="flex items-center justify-center flex-col p-6 bg-white rounded-2xl h-[19rem] ">
                      <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
                        <div
                          className="flex  pr-3	 	justify-end	  h-[40%] w-[100%]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <AudioPlayer audioPath="/voices/breathe.mp3" />
                        </div>

                        <span className="text-4xl font-semibold h-[60%] ">
                          Breathe
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flip-card-back w-[45rem]">
                    <CardContent className="flex items-center justify-center p-6 bg-white rounded-2xl h-[19rem]">
                      <span className="text-4xl font-semibold  ">
                        Nefes Almak
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-[17rem]">
              <div onClick={handleFlip} className="flip-card p-1 h-[20rem]">
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 360 }}
                  transition={{ duration: 0.2, animationDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating(false)}
                >
                  <Card className="flip-card-front w-[45rem] ">
                    <CardContent className="flex items-center justify-center flex-col p-6 bg-white rounded-2xl h-[19rem] ">
                      <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
                        <div
                          className="flex  pr-3	 	justify-end	  h-[40%] w-[100%]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <AudioPlayer audioPath="/voices/gentle.mp3" />
                        </div>

                        <span className="text-4xl font-semibold h-[60%] ">
                          Gentle
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flip-card-back w-[45rem]">
                    <CardContent className="flex items-center justify-center p-6 bg-white rounded-2xl h-[19rem]">
                      <span className="text-4xl font-semibold  ">Nazik</span>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-[17rem]">
              <div onClick={handleFlip} className="flip-card p-1 h-[20rem]">
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 360 }}
                  transition={{ duration: 0.2, animationDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating(false)}
                >
                  <Card className="flip-card-front w-[45rem] ">
                    <CardContent className="flex items-center justify-center flex-col p-6 bg-white rounded-2xl h-[19rem] ">
                      <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
                        <div
                          className="flex  pr-3	 	justify-end	  h-[40%] w-[100%]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <AudioPlayer audioPath="/voices/determined.mp3" />
                        </div>

                        <span className="text-4xl font-semibold h-[60%] ">
                          Determined
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flip-card-back w-[45rem]">
                    <CardContent className="flex items-center justify-center p-6 bg-white rounded-2xl h-[19rem]">
                      <span className="text-4xl font-semibold  ">Kararlı</span>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default main;
