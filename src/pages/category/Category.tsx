//===  Libraries
import { useState } from "react";
import { useLocation } from "react-router-dom";

//=== Components
import MusicCard from "../../components/cards/MusicCard";
import MusicHeading from "../../components/heading/MusicHeading";
import { catPlaylist } from "../../constant/catPlaylist";
import useAudio from "../../hooks/useAudio";

//=== Styles
import AudioPlayer from "../../components/player/AudioPlayer";
import Styles from "./Category.module.scss";

const Category = () => {
  const { state } = useLocation();

  const { setIsVisible, setMusicData, isPlaying, setIsPlaying, musicData } =
    useAudio();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [audio, setAudio] = useState<any | null>(null);
  const [catWrap, setCatWrap] = useState<boolean>(true);

  const togglePlayPause = (): void => {
    setIsPlaying(!isPlaying);
  };

  const handleActiveIndex = (
    itemData: any,
    cardIndex: any,
    audio: any
  ): void => {
    // waveSurferObj.playPause();
    setAudio(audio);
    setIsPlaying(!isPlaying);
    setActiveIndex(cardIndex);
    setMusicData(itemData);
    setCatWrap(false);
    setIsVisible(true);
  };

  const nextSong = (): void => {
    let prevState: number;
    if (activeIndex < catPlaylist.length - 1) {
      prevState = activeIndex + 1;
      setActiveIndex(prevState);
      // setMusicData(catPlaylist[prevState]);
    } else {
      prevState = 0;
      setActiveIndex(prevState);
      // setMusicData(catPlaylist[prevState]);
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
            handleActiveIndex={() =>
              handleActiveIndex(item, index, item.itemUrl)
            }
          />
        ))}
      </div>

      <AudioPlayer
        audio={audio}
        togglePlayPause={togglePlayPause}
        nextSong={nextSong}
        prevSong={prevSong}
      />
    </>
  );
};

export default Category;
