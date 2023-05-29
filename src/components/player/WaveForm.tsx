import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

//===Styles
import Styles from "./WaveForm.module.scss";

//===Musics

const WaveForm = ({ audio }: any) => {
  const containerRef = useRef<any>();
  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      barWidth: 2,
      barHeight: 3,
      progressColor: "#7DCADD",
      barGap: 2,
      responsive: true,
      cursorColor: "#7DCADD",
      cursorWidth: 3,
    });
    waveSurfer.load(audio);
    waveSurfer.setHeight(40);

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);
  return <div ref={containerRef} className={Styles.waveform} />;
};

export default WaveForm;
