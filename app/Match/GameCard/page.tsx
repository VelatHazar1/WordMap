import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import React from "react";
import { Fragment } from "react";

type RestartProps = {
  onRestart: () => void;
};

const Restart = ({ onRestart }: RestartProps) => {
  return (
    <Fragment>
      <Card className="fixed inset-0 z-50 flex justify-center   items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm  ">
        <CardContent className="bg-white p-20 rounded-3xl shadow-lg flex justify-center items-center flex-col  gap-5 ">
          <CardDescription className="text-2xl mb-4">
            Congratulations! You have matched all the cards!
          </CardDescription>
          <Button
            onClick={onRestart}
            className="px-4 py-2 bg-[#C1D3FE] text-black rounded hover:bg-[#e2eafc] focus:outline-none text-2xl  "
          >
            Restart Game
          </Button>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default Restart;
