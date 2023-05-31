import { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveForm = ({ audio, containerRef, waveSurferRef }: any) => {
  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      barWidth: 2,
      barHeight: 3,
      barGap: 2,
      waveColor: "#707070",
      progressColor: "#7DCADD",
      cursorColor: "#7DCADD",
      cursorWidth: 0,
      height: 40,
      fillParent: true,
      interact: true,
      responsive: true,
    });
    waveSurfer.load(audio);

    waveSurfer.on("ready", () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  // console.log(waveSurferRef.current.getCurrentTime());
  // console.log(waveSurferRef.current.getVolume());

  return <div ref={containerRef} />;
};

export default WaveForm;
