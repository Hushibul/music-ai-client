//===  Libraries
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//=== Components
import MusicCard from "../../components/cards/MusicCard";
import MusicHeading from "../../components/heading/MusicHeading";
import AudioPlayer from "../../components/player/AudioPlayer";
import { catPlaylist } from "../../constant/catPlaylist";
import useAudio from "../../hooks/useAudio";

//=== Styles
import Styles from "./Category.module.scss";

const Category = () => {
  const { state } = useLocation();

  const {
    setIsVisible,
    setMusicData,
    isPlaying,
    setIsPlaying,
    musicData,
    currentTime,
    waveSurferObj,
  } = useAudio();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [catWrap, setCatWrap] = useState<boolean>(true);

  const togglePlayPause = (): void => {
    setIsPlaying(!isPlaying);
    waveSurferObj.playPause();
  };

  const handleActiveIndex = (itemData: any, cardIndex: any): void => {
    waveSurferObj.playPause();
    setIsPlaying(!isPlaying);
    setActiveIndex(cardIndex);
    setMusicData(itemData);
    setCatWrap(false);
    setIsVisible(true);
  };

  useEffect(() => {
    let mount: boolean = true;
    if (mount) {
      if (waveSurferObj) {
        if (isPlaying) {
          waveSurferObj.play();
        } else {
          waveSurferObj.pause();
        }
      }
    }
    return (): void => {
      mount = false;
    };
  }, [isPlaying, activeIndex, currentTime]);

  const nextSong = (): void => {
    let prevState: number;
    if (activeIndex < catPlaylist.length - 1) {
      prevState = activeIndex + 1;
      setActiveIndex(prevState);
      setMusicData(catPlaylist[prevState]);
    } else {
      prevState = 0;
      setActiveIndex(prevState);
      setMusicData(catPlaylist[prevState]);
    }
  };

  const prevSong = (): void => {
    let prevState: number;
    if (activeIndex > 0) {
      prevState = activeIndex - 1;
      setActiveIndex(prevState);
      setMusicData(catPlaylist[prevState]);
    } else {
      prevState = catPlaylist.length - 1;
      setActiveIndex(prevState);
      setMusicData(catPlaylist[prevState]);
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
        togglePlayPause={togglePlayPause}
        nextSong={nextSong}
        prevSong={prevSong}
      />
    </>
  );
};

export default Category;
