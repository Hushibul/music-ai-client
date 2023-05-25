import { useContext } from "react";
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
  id: string;
  itemCoverUrl: string;
  itemMiniThumbUrl: string;
  date: string;
  language: string;
  duration: string;
  artist: string;
  favorite: boolean;
  itemTitle: string;
  itemUrl: string;
  activeIndex: number;
  handleActiveTrack: (itemIndex: number) => void;
  togglePlayPause: () => void;
};

const MusicCard = (props: IMusicCard) => {
  const {
    index,
    itemMiniThumbUrl,
    duration,
    artist,
    itemTitle,
    activeIndex,
    handleActiveTrack,
    togglePlayPause,
  } = props;

  const { isPlaying } = useContext(AudioContext);

  return (
    <div
      className={`${Styles.musicCard} ${
        activeIndex === index && Styles.activeTrack
      } d-flex align-items-center justify-content-between`}
      onClick={() => handleActiveTrack(index)}
    >
      <div className="d-flex align-items-center">
        <div className={Styles.musicIcon}>
          <img className="img-fluid" src={itemMiniThumbUrl} alt={itemTitle} />

          {/* Controll Play Pause  */}
          <button onClick={togglePlayPause}>
            <img
              className={Styles.playButton}
              src={
                activeIndex === index && isPlaying ? PauseButton : PlayButton
              }
              alt="Play/Pause Button"
            />
          </button>
        </div>

        <div className={`${Styles.musicCard__desc}`}>
          <h3 className="text-normal fw-bold text-dark">{itemTitle}</h3>
          <p className="text-medium">{artist}</p>
        </div>
      </div>

      <WaveForm />

      <div className={`d-none d-xl-block ${Styles.musicCard__duration}`}>
        <span>{duration}</span>
      </div>

      <div
        className={`${Styles.musicCard__buttonGroup} d-flex align-items-center`}
      >
        <button>
          <img src={FavoriteButton} alt="To add music to favorite list" />
        </button>
        <button>
          <img src={DownloadButton} alt="To dowonload this music" />
        </button>

        <button>
          <img src={AddButton} alt="Add to playlist" />
        </button>

        <button
          className={`d-none d-sm-flex align-items-center ${Styles.licence}`}
        >
          <img src={CardIcon} alt="Add to Cart" />
          Licence
        </button>
      </div>
    </div>
  );
};

export default MusicCard;
