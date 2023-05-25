import { useContext, useRef, useState } from "react";

//=== Styles
import Styles from "./AudioPlayer.module.scss";

//===Icons
// import PauseButton from "../../assets/images/icons/playerPause.svg";
// import PlayButton from "../../assets/images/icons/playAudio.svg";
import PrevButton from "../../assets/images/icons/prev.svg";
import NextButton from "../../assets/images/icons/next.svg";
// import VolumeButton from "../../assets/images/icons/volume.svg";
import FavoriteButton from "../../assets/images/icons/favorite.svg";
import MenuIcon from "../../assets/images/icons/smallMenu.svg";
import CartIcon from "../../assets/images/icons/cart.svg";
import CrossButton from "../../assets/images/icons/cross.svg";

import {
  PlayCircle,
  PauseCircle,
  VolumeMute,
  VolumeUp,
  VolumeDown,
} from "react-bootstrap-icons";

import { AudioContext } from "../../context/AudioContext";

const AudioPlayer = ({ audioPlayer, togglePlayPause }: any) => {
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

  //   const audioPlayer = useRef<HTMLAudioElement>(new Audio());
  const progressBar = useRef<any | null>(null);

  const [volume, setVolume] = useState<number>(0.5);
  const [mute, setMute] = useState<boolean>(true);

  // const togglePlayPause = () => {
  //   const prevValue = isPlaying;
  //   setIsPlaying(!prevValue);
  //   if (!prevValue) {
  //     audioPlayer.current.play();
  //   } else {
  //     audioPlayer.current.pause();
  //   }
  // };

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
      <img
        className={Styles.audioPlayer__artistImage}
        src={musicData.itemMiniThumbUrl}
        alt="Artist Image"
      />

      <div className={Styles.audioPlayer__desc}>
        <h4>{musicData.itemTitle}</h4>
        <p>By {musicData.artist}</p>
      </div>

      {/* Controll Player  */}
      <div className={"d-flex gap-2 align-items-center"}>
        <button>
          <img
            className="cursor-pointer"
            src={PrevButton}
            alt="To go to Previous song"
          />
        </button>

        <button onClick={togglePlayPause}>
          {/* <img
            src={isPlaying ? PauseButton : PlayButton}
            alt="To play the PlayButton from song"
          /> */}

          {isPlaying ? (
            <PauseCircle size={30} color="white" />
          ) : (
            <PlayCircle size={30} color="white" />
          )}
        </button>

        <button>
          <img src={NextButton} alt="To go to Next song" />
        </button>
      </div>

      {/* Song Progress  */}
      <div
        className={`${Styles.audioPlayer__progressBar} d-none d-sm-flex align-items-center`}
      >
        <p>{calculateTime(currentTime)}</p>
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
        <p>{calculateTime(duration - currentTime)}</p>
      </div>

      {/* Volume Controll  */}
      <div
        className={`${Styles.audioPlayer__volumeControll} d-none d-md-flex align-items-center`}
      >
        <button onClick={muteVolume}>
          {/* <img src={VolumeButton} alt="Mute / Unmute" /> */}
          {volume === 0 ? (
            <VolumeMute size={30} color="white" />
          ) : volume >= 0 && volume <= 0.75 ? (
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

      <div className="d-flex align-items-center gap-2">
        <button>
          <img
            className="d-none d-md-block"
            src={FavoriteButton}
            alt="Add to Favorite"
          />
        </button>
        <button>
          <img src={MenuIcon} alt="Rest of the items" />
        </button>
        <button>
          <img className="d-none d-md-block" src={CartIcon} alt="Add to Cart" />
        </button>
      </div>

      <button>
        <img
          onClick={() => setIsVisible(false)}
          className="mx-3 cursor-pointer"
          src={CrossButton}
          alt="Exit Player"
        />
      </button>

      {/* <audio
        ref={audioPlayer}
        preload="metadata"
        onLoadedMetadata={() => setDuration(audioPlayer.current.duration)}
        onTimeUpdate={(e: any): void => {
          setCurrentTime(e.target.currentTime);
        }}
        src={musicData.itemUrl}
      /> */}
    </div>
  );
};

export default AudioPlayer;
