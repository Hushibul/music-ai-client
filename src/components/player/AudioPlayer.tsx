import { useContext, useRef, useState } from "react";

//=== Styles
import Styles from "./AudioPlayer.module.scss";

//===Icons
// import PauseButton from "../../assets/images/icons/playerPause.svg";
// import PlayButton from "../../assets/images/icons/playAudio.svg";
import NextButton from "../../assets/images/icons/next.svg";
import PrevButton from "../../assets/images/icons/prev.svg";
// import VolumeButton from "../../assets/images/icons/volume.svg";
import CartIcon from "../../assets/images/icons/cart.svg";
import CrossButton from "../../assets/images/icons/cross.svg";
import FavoriteButton from "../../assets/images/icons/favorite.svg";
import MenuIcon from "../../assets/images/icons/smallMenu.svg";

import {
  PauseCircle,
  PlayCircle,
  VolumeDown,
  VolumeMute,
  VolumeUp,
} from "react-bootstrap-icons";

import { AudioContext } from "../../context/AudioContext";

type IMusicPlayer = {
  audioPlayer: any;
  togglePlayPause: () => void;
  nextSong: () => void;
  prevSong: () => void;
};

const AudioPlayer = ({
  audioPlayer,
  togglePlayPause,
  nextSong,
  prevSong,
}: IMusicPlayer) => {
  const {
    isPlaying,
    setIsPlaying,
    isVisible,
    setIsVisible,
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
    musicData,
  } = useContext(AudioContext);

  const progressBar = useRef<any | null>(null);

  const [volume, setVolume] = useState<number>(0.5);
  const [mute, setMute] = useState<boolean>(true);

  const calculateTime = (secs: number): string => {
    const minutes: number = Math.floor(secs / 60);
    const returnedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds: number = Math.floor(secs % 60);
    const returnedSeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changePlayerCurrentTime = (): void => {
    if (progressBar?.current?.value !== null) {
      setCurrentTime(progressBar.current.value);
    }
  };

  const changeRange = (): void => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const exitPlayer = (): void => {
    setIsPlaying(false);
    setIsVisible(false);
    audioPlayer.current.currentTime = 0;
  };

  //== Volume Controls
  const MAX: number = 10;
  const handleVolume = (e: any) => {
    const { value } = e.target;
    audioPlayer.current.volume = Number(value) / MAX;
    setVolume(audioPlayer.current.volume);
  };

  const muteVolume = () => {
    const prevValue = mute;
    setMute(!mute);
    if (!prevValue) {
      audioPlayer.current.volume = 0;
      setVolume(0);
    } else {
      audioPlayer.current.volume = 1;
      setVolume(1);
    }
  };

  const getTrackProgress = () => {
    return { backgroundSize: `${(currentTime * 100) / duration}% 100%` };
  };

  const getVolumeProgress = () => {
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
          <input
            className={"customSliderRange"}
            style={getTrackProgress()}
            max={duration}
            value={currentTime}
            step={0.01}
            onChange={changeRange}
            ref={progressBar}
            type="range"
          />
          <p className="d-none d-lg-block">
            {calculateTime(duration - currentTime)}
          </p>
        </div>

        {/* Volume Controll  */}
        <div
          className={`${Styles.audioPlayer__volumeControll} d-none d-lg-flex align-items-center`}
        >
          <button onClick={muteVolume}>
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
            max={MAX}
            step={0.1}
            value={volume * 10}
            onChange={(e: any) => handleVolume(e)}
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
      <audio
        ref={audioPlayer}
        preload="metadata"
        onLoadedMetadata={() => setDuration(audioPlayer.current.duration)}
        onTimeUpdate={(e: any): void => {
          setCurrentTime(e.target.currentTime);
        }}
        onEnded={nextSong}
        src={musicData.itemUrl}
      />
    </div>
  );
};

export default AudioPlayer;
