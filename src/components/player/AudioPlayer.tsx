//=== Libararies
import { useState } from "react";

//=== Styles
import Styles from "./AudioPlayer.module.scss";

//=== Components
import useAudio from "../../hooks/useAudio";

//=== Icons
import CartIcon from "../../assets/images/icons/cart.svg";
import CrossButton from "../../assets/images/icons/cross.svg";
import FavoriteButton from "../../assets/images/icons/favorite.svg";
import NextButton from "../../assets/images/icons/next.svg";
import PrevButton from "../../assets/images/icons/prev.svg";
import MenuIcon from "../../assets/images/icons/smallMenu.svg";

//=== Third Party Icons
import {
  PauseCircle,
  PlayCircle,
  VolumeDown,
  VolumeMute,
  VolumeUp,
} from "react-bootstrap-icons";
import WaveForm from "./WaveForm";

type IMusicPlayer = {
  togglePlayPause: () => void;
  nextSong: () => void;
  prevSong: () => void;
  audio: any;
};

const AudioPlayer = ({
  togglePlayPause,
  nextSong,
  prevSong,
  audio,
}: IMusicPlayer) => {
  //Global State
  const {
    isPlaying,
    setIsPlaying,
    isVisible,
    setIsVisible,
    duration,
    currentTime,
    volume,
    setVolume,
    setCurrentTime,
    musicData,
  } = useAudio();

  //Local States
  const [mute, setMute] = useState<boolean>(false);

  const calculateTime = (secs: number): string => {
    const minutes: number = Math.floor(secs / 60);
    const returnedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds: number = Math.floor(secs % 60);
    const returnedSeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  //Handling Volue with Progress Bar
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  //Handling Music Progress with Progress Bar
  const handleProgress = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newCurrentTime = parseFloat(e.target.value);
    setCurrentTime(newCurrentTime);
  };

  // useEffect(() => {
  //   if (waveSurferObj) {
  //     const seekTime = currentTime / duration;

  //     if (seekTime >= 0 && seekTime <= 1) {
  //       waveSurferObj.seekTo(seekTime);
  //     }

  //     waveSurferObj.on("finish", () => {
  //       nextSong();
  //     });
  //   }
  // }, [currentTime, waveSurferObj]);

  // useEffect(() => {
  //   if (currentTime === duration && audio !== null) {
  //     nextSong();
  //     console.log(currentTime);

  //     console.log(duration);
  //     console.log("working");
  //   }
  // }, [audio, currentTime, duration]);

  //Handling Mute
  const handleMute = (): void => {
    setMute(!mute);

    if (mute === true) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  const exitPlayer = (): void => {
    setIsPlaying(false);
    setIsVisible(false);
  };

  const getTrackProgress = (): object => {
    return { backgroundSize: `${(currentTime * 100) / duration}% 100%` };
  };

  const getVolumeProgress = (): object => {
    return { backgroundSize: `${volume * 100}% 100%` };
  };

  return (
    <div className={`${Styles.audioPlayer} ${isVisible ? "d-flex" : "d-none"}`}>
      {/* Music Content  */}
      <div className="d-flex align-items-center">
        <img
          className={Styles.audioPlayer__artistImage}
          src={musicData.itemMiniThumbUrl}
          alt="Artist Image"
        />

        <div className={Styles.audioPlayer__desc}>
          <h4>{musicData.itemTitle}</h4>
          <p>By {musicData.artist}</p>
        </div>
      </div>

      <div className="d-flex w-100">
        {/* Controll Player  */}
        <div
          className={`d-flex gap-2 align-items-center ${Styles.audioPlayer__controls}`}
        >
          <button className="d-none d-md-block" onClick={prevSong}>
            <img src={PrevButton} alt="To go to Previous song" />
          </button>

          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <PauseCircle size={30} color="white" />
            ) : (
              <PlayCircle size={30} color="white" />
            )}
          </button>

          <button onClick={nextSong}>
            <img src={NextButton} alt="To go to Next song" />
          </button>
        </div>

        {/* Song Progress  */}
        <div
          className={`${Styles.audioPlayer__progressBar} d-flex align-items-center`}
        >
          <p className="d-none d-lg-block">{calculateTime(currentTime)}</p>

          <div className={Styles.audioPlayer__progressBar_waveform}>
            <WaveForm audio={audio} isPlaying={isPlaying} />
          </div>
          {/* <input
            className={"customSliderRange"}
            style={getTrackProgress()}
            max={duration}
            value={currentTime}
            step={0.01}
            onChange={(e) => handleProgress(e)}
            type="range"
          /> */}

          <p className="d-none d-lg-block">
            {calculateTime(duration - currentTime)}
          </p>
        </div>

        {/* Volume Controll  */}
        <div
          className={`${Styles.audioPlayer__volumeControll} d-none d-lg-flex align-items-center`}
        >
          <button onClick={handleMute}>
            {volume === 0 ? (
              <VolumeMute size={30} color="white" />
            ) : volume > 0 && volume <= 0.75 ? (
              <VolumeDown size={30} color="white" />
            ) : (
              <VolumeUp size={30} color="white" />
            )}
          </button>

          <input
            className={"customSliderRange"}
            style={getVolumeProgress()}
            min={0}
            max={1}
            value={volume}
            onChange={(e) => handleVolume(e)}
            step={0.1}
            type="range"
          />
        </div>
      </div>

      <div className={`d-flex align-items-center gap-1 gap-md-2 gap-xl-3`}>
        <button className="d-none d-lg-block">
          <img src={FavoriteButton} alt="Add to Favorite" />
        </button>
        <button className="d-none d-lg-block">
          <img src={MenuIcon} alt="Rest of the items" />
        </button>
        <button>
          <img src={CartIcon} alt="Add to Cart" />
        </button>
        <button onClick={exitPlayer}>
          <img
            className="mx-md-3 cursor-pointer"
            src={CrossButton}
            alt="Exit Player"
          />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
