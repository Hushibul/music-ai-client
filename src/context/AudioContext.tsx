//== Libraries
import { createContext, useRef, useState } from "react";

export const AudioContext = createContext<any>(null);

const AudioProvider = ({ children }: any) => {
  const [musicData, setMusicData] = useState<object>({});
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioPlayer = useRef<HTMLAudioElement>(new Audio());
  const containerRef = useRef<any>();
  const waveSurferRef = useRef<any>();

  const values = {
    isPlaying,
    setIsPlaying,
    isVisible,
    setIsVisible,
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
    musicData,
    setMusicData,
    containerRef,
    waveSurferRef,
    audioPlayer,
  };

  return (
    <AudioContext.Provider value={values}>{children}</AudioContext.Provider>
  );
};

export default AudioProvider;
