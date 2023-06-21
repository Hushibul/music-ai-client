//== Libaries
import { useContext } from "react";

//== Components
import { AudioContext } from "../context/AudioContext";

const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error(`useAudio must be used within a AudioProvider`);
  }
  return context;
};

export default useAudio;
