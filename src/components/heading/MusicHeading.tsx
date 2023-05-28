import { useContext } from "react";
import FavoriteIcon from "../../assets/images/icons/favorites.svg";
import MenuIcon from "../../assets/images/icons/threeMenu.svg";
import { AudioContext } from "../../context/AudioContext";
import Styles from "./MusicHeading.module.scss";

type IMusic = {
  title: string;
  date?: string;
  language?: string;
  duration?: string;
  artist?: string;
  image: string;
  infoControls?: boolean;
};

const MusicHeading = (props: IMusic) => {
  const { setIsPlaying, setIsVisible } = useContext(AudioContext);
  const { title, date, language, duration, artist, image, infoControls } =
    props;

  const playMusic = () => {
    setIsPlaying(true);
    setIsVisible(true);
  };
  return (
    <div
      className={`${Styles.musicHeading} d-flex flex-column flex-sm-row mb-3 gap-3`}
    >
      <img
        className={Styles.musicHeading__artistImage}
        src={image}
        alt={title}
      />

      <div className={`${Styles.musicHeading__desc} align-self-sm-end`}>
        <h2 className={Styles.musicHeading__desc_title}>{title}</h2>

        {infoControls && (
          <>
            <p className="text-medium">
              {date} | {language} | {duration}
            </p>

            <p className="text-small">{artist}</p>
            <div className={`d-flex gap-3`}>
              <button onClick={playMusic} className="button-red">
                Play Music
              </button>

              <img src={FavoriteIcon} alt="Add Music to favorite list" />
              <img src={MenuIcon} alt="Menu Icon" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MusicHeading;
