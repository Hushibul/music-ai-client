import {useContext, useState} from "react";
import MusicHeading from "../../components/heading/MusicHeading";
import MusicCard from "../../components/Cards/MusicCard";

//== Styles
import styles from './Category.module.scss';

//== Icons
import {catPlaylist} from '../../constant/catPlaylist';
import {AudioContext} from '../../context/AudioContext';
import {useLocation} from 'react-router-dom';

const Category = () => {
    const {state} = useLocation();
    const {setIsVisible, setMusicData, isPlaying, setIsPlaying, musicData} = useContext(AudioContext);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const handleActiveTrack = (itemIndex: number): void => {
        setActiveIndex(itemIndex);
    };

    const [catWrap, setCatWrap] = useState<boolean>(true);

    const togglePlayPause = (itemIndex: number, itemData: any): void => {
        setMusicData(itemData);
        setCatWrap(false);
        setIsPlaying(!isPlaying);
        setIsVisible(true);
    };

    return (
        <>
            {catWrap ? (
                <MusicHeading
                    title={state?.title}
                    image={state?.catBg}
                />
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


            {/* <AudioPlayer /> */}

            <div className={styles.categoryPlaylistWrap}>
                {catPlaylist.map((item, index) => (
                    <MusicCard
                        key={item?.id}
                        {...item}
                        index={index}
                        activeIndex={activeIndex}
                        handleActiveTrack={handleActiveTrack}
                        togglePlayPause={() => togglePlayPause(index, item)}
                    />
                ))}
            </div>
        </>
    );
};

export default Category;
