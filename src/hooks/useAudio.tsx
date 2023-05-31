//== Libaries
import { useContext } from "react";

//== Components
import { AudioContext } from "../context/AudioContext";

const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export default useAudio;
