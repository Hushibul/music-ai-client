import { useContext, useState, useRef } from "react";
import MusicHeading from "../../components/heading/MusicHeading";
import MusicCard from "../../components/cards/MusicCard";

//== Styles
import Styles from "./Category.module.scss";

//== Icons
import { catPlaylist } from "../../constant/catPlaylist";
import { AudioContext } from "../../context/AudioContext";
import { useLocation } from "react-router-dom";
import AudioPlayer from "../../components/player/AudioPlayer";

const Category = () => {
  const { state } = useLocation();
  const {
    setIsVisible,
    setMusicData,
    isPlaying,
    setIsPlaying,
    setDuration,
    setCurrentTime,
    musicData,
  } = useContext(AudioContext);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleActiveTrack = (itemIndex: number): void => {
    setActiveIndex(itemIndex);
  };

  const audioPlayer = useRef<HTMLAudioElement>(new Audio());

  const [catWrap, setCatWrap] = useState<boolean>(true);

  const togglePlayPause = (itemData: any): void => {
    setMusicData(itemData);
    setCatWrap(false);
    setIsVisible(true);

    if (musicData !== itemData) {
      setIsPlaying(true);
      audioPlayer.current.play();
      console.log("IF Executed!");
      console.log(musicData);
    } else {
      const prevValue = isPlaying;

      setIsPlaying(!prevValue);
      if (!prevValue) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
      console.log("Else Executed!");
      console.log(musicData);
    }
  };

  const toggleAudio = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <>
      {catWrap ? (
        <MusicHeading title={state?.title} image={state?.catBg} />
      ) : (
        <MusicHeading
          title={musicData?.itemTitle}
          image={musicData.itemCoverUrl}
          date={musicData?.date}
          duration={musicData?.duration}
          language={musicData?.language}
          artist={musicData?.artist}
          infoControls={true}
        />
      )}

      <div className={Styles.categoryPlaylistWrap}>
        {catPlaylist.map((item, index) => (
          <MusicCard
            key={item?.id}
            {...item}
            index={index}
            activeIndex={activeIndex}
            handleActiveTrack={handleActiveTrack}
            togglePlayPause={() => togglePlayPause(item)}
          />
        ))}
      </div>

      <AudioPlayer audioPlayer={audioPlayer} togglePlayPause={toggleAudio} />

      <audio
        ref={audioPlayer}
        preload="metadata"
        onLoadedMetadata={() => setDuration(audioPlayer.current.duration)}
        onTimeUpdate={(e: any): void => {
          setCurrentTime(e.target.currentTime);
        }}
        src={musicData.itemUrl}
      />
    </>
  );
};

export default Category;
