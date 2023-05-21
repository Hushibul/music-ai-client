import Styles from "./MusicCard.module.scss";
import PlayButton from "../../assets/images/icons/play.svg";
import PauseButton from "../../assets/images/icons/pause.svg";
import FavoriteButton from "../../assets/images/icons/favoriteGray.svg";
import DownloadButton from "../../assets/images/icons/downloadGray.svg";
import AddButton from "../../assets/images/icons/plusGray.svg";
import CardIcon from "../../assets/images/icons/cartMusic.svg";

import { useRef, useState } from "react";
import WaveForm from "../player/WaveForm";

interface IMusicCard {
  title: string;
  artist: string;
  duration: string;
  image: string;
  music: any;
}

const MusicCard = ({ title, artist, duration, image, music }: IMusicCard) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioPlayer = useRef<HTMLAudioElement | null>(new Audio());

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      if (audioPlayer.current !== null) audioPlayer.current.play();
    } else {
      if (audioPlayer.current !== null) audioPlayer.current.pause();
    }
  };

  return (
    <div
      className={`${Styles.musicCard} d-flex align-items-center justify-content-between`}
    >
      <div className={Styles.musicCard__musicIcon}>
        <img className="img-fluid" src={image} alt={title} />

        <img
          onClick={togglePlayPause}
          className={Styles.musicCard__musicIcon_playButton}
          src={isPlaying ? PauseButton : PlayButton}
          alt="Play/Pause Button"
        />
      </div>

      <div className={`${Styles.musicCard__desc} `}>
        <h3 className="text-normal fw-bold text-dark">{title}</h3>
        <p className="text-medium">{artist}</p>
      </div>

      <WaveForm />

      <div className={`d-none d-xl-block ${Styles.musicCard__duration}`}>
        <span>{duration}</span>
      </div>

      <div
        className={`${Styles.musicCard__buttonGroup} d-flex align-items-center`}
      >
        <img src={FavoriteButton} alt="To add music to favorite list" />
        <img src={DownloadButton} alt="To dowonload this music" />
        <img src={AddButton} alt="Add to playlist" />

        <button className="d-none d-sm-flex align-items-center">
          <img src={CardIcon} alt="Add to Cart" />
          Li cence
        </button>
      </div>

      <audio ref={audioPlayer} src={music}></audio>
    </div>
  );
};

export default MusicCard;
