import { useContext, useRef, useState } from "react";
import WaveForm from "../player/WaveForm";
import { AudioContext } from "../../context/AudioContext";

//== Styles
import Styles from "./MusicCard.module.scss";

//== Icons
import PlayButton from "../../assets/images/icons/play.svg";
import PauseButton from "../../assets/images/icons/pause.svg";
import FavoriteButton from "../../assets/images/icons/favoriteGray.svg";
import DownloadButton from "../../assets/images/icons/downloadGray.svg";
import AddButton from "../../assets/images/icons/plusGray.svg";
import CardIcon from "../../assets/images/icons/cartMusic.svg";

type IMusicCard = {
  index: number;
  title: string;
  artist: string;
  image: string;
  music: string;
  activeIndex: number;
  duration: string;
  handleActiveTrack: (itemIndex: number) => void;
};

const MusicCard = (props: IMusicCard) => {
  const {
    index,
    title,
    artist,
    image,
    music,
    duration,
    activeIndex,
    handleActiveTrack,
  } = props;
  const { isPlaying, setIsPlaying, setMusicData, setIsVisible } =
    useContext(AudioContext);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    setMusicData({ title, image, artist, music });
    setIsVisible(true);
  };

  return (
    <div
      className={`${Styles.musicCard} ${
        activeIndex === index && Styles.activeTrack
      } d-flex align-items-center justify-content-between`}
      onClick={() => handleActiveTrack(index)}
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

      <div className={`${Styles.musicCard__desc}`}>
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
          Licence
        </button>
      </div>
    </div>
  );
};

export default MusicCard;
