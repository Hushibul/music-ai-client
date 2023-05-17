import Styles from "./MusicCard.module.scss";
import PlayButton from "../../assets/images/icons/play.svg";
import PauseButton from "../../assets/images/icons/pause.svg";
import WaveImage from "../../assets/images/others/wave.png";
import FavoriteButton from "../../assets/images/icons/favoriteGray.svg";
import DownloadButton from "../../assets/images/icons/downloadGray.svg";
import AddButton from "../../assets/images/icons/plusGray.svg";
import CardIcon from "../../assets/images/icons/cartMusic.svg";

import { useState } from "react";

interface IMusicCard {
  title: string;
  artist: string;
  duration: string;
  image: string;
}

const MusicCard = ({ title, artist, duration, image }: IMusicCard) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div
      className={`${Styles.musicCard} d-flex align-items-center justify-content-between`}
    >
      <div className={Styles.musicCard__musicIcon}>
        <img className="img-fluid" src={image} alt={title} />

        <img
          onClick={() => setIsPlaying(!isPlaying)}
          className={Styles.musicCard__musicIcon_playButton}
          src={isPlaying ? PauseButton : PlayButton}
          alt="Play/Pause Button"
        />
      </div>

      <div className={`${Styles.musicCard__desc} `}>
        <h3 className="text-normal fw-bold text-dark">{title}</h3>
        <p className="text-medium">{artist}</p>
      </div>

      <div className={`d-none d-xl-block ${Styles.musicCard__wave}`}>
        <img src={WaveImage} alt="Wave" />
      </div>

      <div className={`d-none d-xl-block ${Styles.musicCard__duration}`}>
        <span>{duration}</span>
      </div>

      <div
        className={`${Styles.musicCard__buttonGroup} d-flex align-items-center`}
      >
        <img src={FavoriteButton} alt="To add music to favorite list" />
        <img src={DownloadButton} alt="To dowonload this music" />
        <img src={AddButton} alt="Add to playlist" />

        <button>
          <img src={CardIcon} alt="Add to Cart" />
          Lincence
        </button>
      </div>
    </div>
  );
};

export default MusicCard;
