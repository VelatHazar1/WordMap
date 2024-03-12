"use client";
import { Button } from "@/components/ui/button";
import { CopySlash } from "lucide-react";
import { Joystick } from "lucide-react";
import { BookHeadphones } from "lucide-react";
import { ReplaceAll } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Album } from "lucide-react";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const main = () => {
  return (
    <div className="flex flex-col justify-center	items-center	w-full h-screen	 gap-10	">
      <div className="flex gap-5">
        <Button className="bg-white py-10 w-56	 rounded-2xl hover:bg-white">
          <div className="flex items-center justify-start gap-5">
            <CopySlash />
            <h1>Match</h1>
          </div>
        </Button>
        <Button className="bg-white py-10 w-56 rounded-2xl hover:bg-white">
          <div className="flex items-center justify-start gap-5 ">
            <Joystick />
            <h1>Hangman</h1>
          </div>
        </Button>
        <Button className="bg-white py-10 w-56 rounded-2xl hover:bg-white">
          {" "}
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
              <div className="p-1">
                <Card>
                  <CardContent className="flex   items-center justify-center p-6 bg-white rounded-2xl ">
                    <span className="text-4xl  font-semibold   py-28">
                      Breathe
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex   items-center justify-center p-6   bg-white rounded-2xl ">
                    <span className="text-4xl font-semibold    py-28">
                      Gentle
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex   items-center justify-center p-6  bg-white rounded-2xl ">
                    <span className="text-4xl font-semibold   py-28">
                      Determined
                    </span>
                  </CardContent>
                </Card>
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
