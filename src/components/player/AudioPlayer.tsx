import Horsemusic from "../../assets/musics/horseAudio.mp3";
import Styles from "./AudioPlayer.module.scss";

const AudioPlayer = () => {
  return (
    <div className={Styles.audioPlayer}>
      <audio src={Horsemusic}></audio>
    </div>
  );
};

export default AudioPlayer;
