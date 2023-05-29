//== Import Libraries
import { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

//== Import Components
import MusicCard from "../../components/cards/MusicCard";
import MusicHeading from "../../components/heading/MusicHeading";
import AudioPlayer from "../../components/player/AudioPlayer";
import { catPlaylist } from "../../constant/catPlaylist";
import { AudioContext } from "../../context/AudioContext";

//== Styles
import Styles from "./Category.module.scss";

const Category = () => {
  const { state } = useLocation();
  const { setIsVisible, setMusicData, isPlaying, setIsPlaying, musicData } =
    useContext(AudioContext);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const audioPlayer = useRef<HTMLAudioElement>(new Audio());
  const [catWrap, setCatWrap] = useState<boolean>(true);

  const togglePlayPause = (): void => {
    setIsPlaying(!isPlaying);
  };

  const handleActiveIndex = (itemData: any, cardIndex: any) => {
    setActiveIndex(cardIndex);
    setMusicData(itemData);
    setCatWrap(false);
    setIsVisible(true);
  };

  const nextSong = () => {
    let prevValue: number;
    if (activeIndex < catPlaylist.length - 1) {
      prevValue = activeIndex + 1;
      setActiveIndex(prevValue);
      setMusicData(catPlaylist[prevValue]);
    } else {
      prevValue = 0;
      setActiveIndex(prevValue);
      setMusicData(catPlaylist[prevValue]);
    }
  };

  const prevSong = () => {
    let prevValue: number;
    if (activeIndex > 0) {
      prevValue = activeIndex - 1;
      setActiveIndex(prevValue);
      setMusicData(catPlaylist[prevValue]);
    } else {
      prevValue = catPlaylist.length - 1;
      setActiveIndex(prevValue);
      setMusicData(catPlaylist[prevValue]);
    }
  };

  useEffect(() => {
    let mount: boolean = true;
    if (mount) {
      if (isPlaying) {
        audioPlayer?.current?.play();
      } else {
        audioPlayer?.current?.pause();
      }
    }
    return (): void => {
      mount = false;
    };
  }, [isPlaying, activeIndex]);

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
        {catPlaylist.map((item, index: number) => (
          <MusicCard
            key={item?.id}
            {...item}
            index={index}
            activeIndex={activeIndex}
            handleActiveIndex={() => handleActiveIndex(item, index)}
          />
        ))}
      </div>

      <AudioPlayer
        audioPlayer={audioPlayer}
        togglePlayPause={togglePlayPause}
        nextSong={nextSong}
        prevSong={prevSong}
      />

      {/* <WaveForm /> */}
    </>
  );
};

export default Category;
