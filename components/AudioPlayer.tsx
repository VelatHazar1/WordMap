"use client";

import React, { useRef } from "react";
import { useState } from "react";
import { Speech } from "lucide-react";

type AudioPlayerProps = {
  audioPath: string;
};

const AudioPlayer = ({ audioPath }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudio = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    <div>
      <audio src={audioPath} ref={audioRef} />
      <button onClick={handleAudio}>
        <Speech />
      </button>
    </div>
  );
};

export default AudioPlayer;
