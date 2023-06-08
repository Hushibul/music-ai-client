//=== Libraries
import { useEffect, useRef, useState } from "react";
import wavesurfer from "wavesurfer.js";

//=== Components
import useAudio from "../../hooks/useAudio";

const WaveForm = ({ audio, isPlaying, index, activeIndex }: any) => {
  const [waveSurferObj, setWaveSurferObj] = useState<any>();
  const waveSurferRef = useRef<any>();

  const { setDuration, setCurrentTime, volume } = useAudio();

  useEffect(() => {
    if (waveSurferRef.current && !waveSurferObj) {
      setWaveSurferObj(
        wavesurfer.create({
          container: waveSurferRef?.current,
          autoCenter: true,
          waveColor: "#707070",
          interact: true,
          progressColor: "#7DCADD",
          barWidth: 2,
          barRadius: 3,
          barGap: 1,
          normalize: true,
          partialRender: true,
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
    let mount: boolean = true;
    if (mount) {
      if (waveSurferObj) {
        if (isPlaying && index === activeIndex) {
          waveSurferObj.play();
        } else {
          waveSurferObj.pause();
        }
      }
    }
    return (): void => {
      mount = false;
    };
  }, [isPlaying, activeIndex]);

  useEffect(() => {
    if (waveSurferObj) {
      waveSurferObj.on("ready", () => {
        waveSurferRef.current = waveSurferObj;
        setDuration(waveSurferObj.getDuration());
      });
      waveSurferObj.on("audioprocess", () => {
        setCurrentTime(waveSurferObj.getCurrentTime());
      });

      return () => {
        waveSurferObj.destroy();
        console.log("Destroy Worked!");
      };
    }
  }, [waveSurferObj]);

  useEffect(() => {
    if (waveSurferObj) {
      waveSurferObj.setVolume(volume);
    }
  }, [volume, waveSurferObj]);

  // useEffect(() => {
  //   if (waveSurferObj) {
  //     waveSurferObj.seekTo(currentTime / duration);
  //   }
  // }, [currentTime]);

  return <div ref={waveSurferRef} />;
};

export default WaveForm;
