//=== Libraries
import { useEffect } from "react";
import wavesurfer from "wavesurfer.js";

//=== Components
import useAudio from "../../hooks/useAudio";

const WaveForm = ({ audio }: any) => {
  const {
    waveSurferRef,
    waveSurferObj,
    setWaveSurferObj,
    setDuration,
    setCurrentTime,
  } = useAudio();

  useEffect(() => {
    if (waveSurferRef.current && !waveSurferObj) {
      setWaveSurferObj(
        wavesurfer.create({
          container: "#waveform",
          autoCenter: true,
          cursorColor: "violet",
          waveColor: "blue",
          progressColor: "red",
          barWidth: 2,
          barHeight: 2,
          barGap: 2,
          height: 40,
          cursorWidth: 0,
          responsive: true,
        })
      );
    }
  }, [waveSurferRef, waveSurferObj]);

  useEffect(() => {
    if (audio && waveSurferObj) {
      waveSurferObj.load(audio);
    }
  }, [audio, waveSurferObj]);

  useEffect(() => {
    if (waveSurferObj) {
      waveSurferObj.on("ready", () => {
        setDuration(waveSurferObj.getDuration());
      });
      waveSurferObj.on("audioprocess", () => {
        setCurrentTime(waveSurferObj.getCurrentTime());
      });
    }
  }, [waveSurferObj]);

  return <div ref={waveSurferRef} id="waveform" />;
};

export default WaveForm;
