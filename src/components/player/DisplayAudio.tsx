import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import horseAudio from "../../assets/musics/horseAudio.mp3";

import waveImage from "../../assets/images/others/wave.png";
import favoriteIcon from "../../assets/images/icons/favoriteGray.svg";
import donwloadIcon from "../../assets/images/icons/downloadGray.svg";
import addIcon from "../../assets/images/icons/plusGray.svg";
import cartIcon from "../../assets/images/icons/cartMusic.svg";

import Classes from "./Player.module.scss";

interface IAudio {
  image: string;
  title: string;
  duration: string;
  artist: string;
}

const DisplayAudio = ({ image, title, duration, artist }: IAudio) => {
  return (
    <div
      className={`select-audio ${Classes.displayaudio} bg-light d-flex align-items-center gap-5 mb-3`}
    >
      <img
        className={Classes.displayaudio__artistImage}
        src={image}
        alt={title}
      />

      <div className={Classes.displayaudio__audioDetails}>
        <p className="text-medium m-0 fw-bold text-truncate">{title}</p>
        <p className="text-small m-0">{artist}</p>
      </div>

      <img className="d-none d-xl-block" src={waveImage} alt="Wave" />

      <p className="px-3 d-none d-md-block py-2 rounded-3 bg-secondary text-light mt-3">
        {duration}
      </p>

      <div className="d-none d-md-flex gap-2 align-items-center">
        <img
          className="cursor-pointer"
          src={favoriteIcon}
          alt="Favorite Icon"
        />
        <img
          className="cursor-pointer"
          src={donwloadIcon}
          alt="Download Icon"
        />
        <img className="cursor-pointer" src={addIcon} alt="Add Icon" />

        <button className="bg-secondary text-small text-light border-0 rounded-3 py-1 px-2">
          Licence
          <img src={cartIcon} alt="cartIcon" />
        </button>
      </div>
      {/* <AudioPlayer autoPlay src={horseAudio} /> */}
    </div>
  );
};

export default DisplayAudio;
