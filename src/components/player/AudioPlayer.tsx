import ReactAudioPlayer from "react-audio-player";
import horseAudio from "../../assets/musics/horseAudio.mp3";
const AudioPlayer = () => {
  return (
    <div>
      {/* <ReactAudioPlayer
        src={horseAudio}
        autoPlay
        className="w-100 text-primary position-fixed bottom-0 left-0"
        style={{ background: "green" }}
        controls={true}
        onPlay={() => console.log("Playing")}
      /> */}
    </div>
  );
};

export default AudioPlayer;
