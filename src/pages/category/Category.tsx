//== Import Libraries
import {useContext, useState, useRef, Fragment, useEffect} from "react";
import {useLocation} from "react-router-dom";

//== Import Components
import MusicHeading from "../../components/heading/MusicHeading";
import MusicCard from "../../components/Cards/MusicCard";
import {catPlaylist} from "../../constant/catPlaylist";
import {AudioContext} from "../../context/AudioContext";
import AudioPlayer from "../../components/player/AudioPlayer";

//== Styles
import Styles from "./Category.module.scss";

const Category = () => {
    const {state} = useLocation();
    const {
        setIsVisible,
        setMusicData,
        isPlaying,
        setIsPlaying,
        setDuration,
        setCurrentTime,
        musicData,
    } = useContext(AudioContext);

    const [activeIndex, setActiveIndex] = useState<number | string>('');
    const audioPlayer = useRef<HTMLAudioElement>();
    const [catWrap, setCatWrap] = useState<boolean>(true);

    const togglePlayPause = (): void => {
        setIsPlaying(!isPlaying);
    };

    const handleActiveIndex = (itemData: any, cardIndex: any) => {
        setActiveIndex(cardIndex);
        setMusicData(itemData);
        setCatWrap(false);
        setIsVisible(true);
    }

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
        }
    }, [isPlaying, activeIndex]);

    return (
        <>
            {catWrap ? (
                <MusicHeading title={state?.title} image={state?.catBg}/>
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
            />
        </>
    );
};

export default Category;
