"use client";

import { useState } from "react";
import { AlignRight } from "lucide-react";

import { Button } from "@/components/ui/button";
const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#C1D3FE] min-h-screen ${
          !open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <AlignRight
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <Button
            variant="outline"
            className="bg-white text-black rounded-2xl	border-inherit	"
          >
            {!open ? "Elementary" : "A1"}
          </Button>
          <Button
            variant="outline"
            className="bg-white text-black rounded-2xl	border-inherit	"
          >
            {!open ? "Pre-Intermediate" : "A2"}
          </Button>
          <Button
            variant="outline"
            className="bg-white text-black rounded-2xl	border-inherit	"
          >
            {!open ? "Intermediate" : "B1"}
          </Button>
          <Button
            variant="outline"
            className="bg-white text-black rounded-2xl	border-inherit	"
          >
            {!open ? "Upper-Intermediate" : "B2"}
          </Button>
          <Button
            variant="outline"
            className="bg-white text-black rounded-2xl	border-inherit	"
          >
            {!open ? "Advanced" : "C1"}
          </Button>
          <Button
            variant="outline"
            className="bg-white text-black rounded-2xl	border-inherit	"
          >
            {!open ? "Proficiency" : "C2"}
          </Button>
          <Button
            variant="outline"
            className="bg-white text-black rounded-2xl	border-inherit"
            style={{
              transition:
                "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
              opacity: open ? 0 : 1,
              transform: open ? "scale(0)" : "scale(1)",
            }}
          >
            Create Your Own
          </Button>
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold"></div>
    </section>
  );
};

export default Home;
