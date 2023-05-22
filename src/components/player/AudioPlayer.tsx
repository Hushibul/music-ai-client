import PlayMusic from "../../assets/musics/Four.mp3";

import Styles from "./AudioPlayer.module.scss";

import ArtistImage from "../../assets/images/others/artistFour.png";
import PauseButton from "../../assets/images/icons/playerPause.svg";
import PlayButton from "../../assets/images/icons/playAudio.svg";
import PrevButton from "../../assets/images/icons/prev.svg";
import NextButton from "../../assets/images/icons/next.svg";
import VolumeButton from "../../assets/images/icons/volume.svg";
import FavoriteButton from "../../assets/images/icons/favorite.svg";
import MenuIcon from "../../assets/images/icons/smallMenu.svg";
import CartIcon from "../../assets/images/icons/cart.svg";
import CrossButton from "../../assets/images/icons/cross.svg";

import { useRef, useEffect, useContext } from "react";
import { AudioContext } from "../../context/AudioContext";

const AudioPlayer = () => {
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

  const audioPlayer = useRef<HTMLAudioElement>(new Audio());
  const progressBar = useRef<any>(null);

  const MAX = 10;

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      if (audioPlayer.current !== null) audioPlayer.current.play();
    } else {
      if (audioPlayer.current !== null) audioPlayer.current.pause();
    }
  };

  // useEffect(() => {
  //   whilePlaying();
  // }, [audioPlayer.current.currentTime]);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changePlayerCurrentTime = () => {
    if (progressBar?.current?.value !== null) {
      setCurrentTime(progressBar.current.value);
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
  };

  const handleVolume = (e: any) => {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioPlayer.current.volume = volume;
  };

  return (
    <div className={`${Styles.audioPlayer} ${isVisible ? "d-flex" : "d-none"}`}>
      <img
        className={Styles.audioPlayer__artistImage}
        src={musicData.image}
        alt="Artist Image"
      />

      <div className={Styles.audioPlayer__desc}>
        <h4 className="">{musicData.title}</h4>
        <p>By {musicData.artist}</p>
      </div>

      <div className={"d-flex gap-3 align-items-center"}>
        <img
          className="cursor-pointer"
          src={PrevButton}
          alt="To go to Previous song"
        />
        <img
          className="cursor-pointer"
          onClick={togglePlayPause}
          src={isPlaying ? PauseButton : PlayButton}
          alt="To play the PlayButton from song"
        />
        <img
          className="cursor-pointer"
          src={NextButton}
          alt="To go to Next song"
        />
      </div>

      <div
        className={`${Styles.audioPlayer__progressBar} d-none d-sm-flex align-items-center`}
      >
        <p>{calculateTime(currentTime)}</p>
        <input
          max={duration}
          value={currentTime}
          onChange={changeRange}
          ref={progressBar}
          type="range"
        />
        <p>{calculateTime(duration)}</p>
      </div>

      <div
        className={`${Styles.audioPlayer__volumeControll} d-none d-md-flex align-items-center`}
      >
        <img src={VolumeButton} alt="Mute / Unmute" />
        <input
          min={0}
          max={MAX}
          onChange={(e) => handleVolume(e)}
          type="range"
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <img
          className="d-none d-md-block"
          src={FavoriteButton}
          alt="Add to Favorite"
        />
        <img src={MenuIcon} alt="Rest of the items" />
        <img className="d-none d-md-block" src={CartIcon} alt="Add to Cart" />
      </div>

      <img
        onClick={() => setIsVisible(false)}
        className="mx-3 cursor-pointer"
        src={CrossButton}
        alt="Exit Player"
      />

      <audio
        ref={audioPlayer}
        preload="metadata"
        onLoadedMetadata={() => setDuration(audioPlayer.current.duration)}
        src={musicData.music}
      ></audio>
    </div>
  );
};

export default AudioPlayer;
