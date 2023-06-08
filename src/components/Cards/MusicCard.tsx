//=== Libraries

//=== Components
import useAudio from "../../hooks/useAudio";
import WaveForm from "../player/WaveForm";

//=== Styles
import Styles from "./MusicCard.module.scss";

//=== Icons
import CardIcon from "../../assets/images/icons/cartMusic.svg";
import DownloadButton from "../../assets/images/icons/downloadGray.svg";
import FavoriteButton from "../../assets/images/icons/favoriteGray.svg";
import PauseButton from "../../assets/images/icons/pause.svg";
import PlayButton from "../../assets/images/icons/play.svg";
import AddButton from "../../assets/images/icons/plusGray.svg";

type IMusicCard = {
  index: number;
  id: string;
  itemCoverUrl: string;
  itemMiniThumbUrl: string;
  date: string;
  language: string;
  artist: string;
  favorite: boolean;
  duration: string;
  itemTitle: string;
  itemUrl: string;
  activeIndex: number | string;
  handleActiveIndex: () => void;
};

const MusicCard = (props: IMusicCard) => {
  const {
    index,
    itemMiniThumbUrl,
    artist,
    itemTitle,
    activeIndex,
    duration,
    itemUrl,
    handleActiveIndex,
  } = props;

  const { isPlaying, setIsPlaying } = useAudio();

  const togglePlayPause = () => {
    const prevState = !isPlaying;
    setIsPlaying(prevState);
    handleActiveIndex();
  };

  return (
    <div
      className={`${Styles.musicCard} ${
        activeIndex === index && Styles.activeTrack
      } d-flex align-items-center justify-content-between`}
    >
      <div className="d-flex align-items-center">
        <div className={Styles.musicIcon}>
          <img className="img-fluid" src={itemMiniThumbUrl} alt={itemTitle} />
          <button onClick={togglePlayPause}>
            <img
              className={Styles.playButton}
              src={
                isPlaying && index === activeIndex ? PauseButton : PlayButton
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

      <div className={`${Styles.waveform} d-none d-xl-block`}>
        {/* <div ref={waveSurferRef} /> */}
        <WaveForm
          audio={itemUrl}
          activeIndex={activeIndex}
          index={index}
          isPlaying={isPlaying}
        />
      </div>

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

        <button className="d-none d-md-block">
          <img src={AddButton} alt="Add to playlist" />
        </button>

        <button
          className={`d-none d-md-flex align-items-center ${Styles.licence}`}
        >
          <img src={CardIcon} alt="Add to Cart" />
          Licence
        </button>
      </div>
    </div>
  );
};

export default MusicCard;
