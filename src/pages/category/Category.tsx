import {useContext, useState} from "react";
import MusicHeading from "../../components/heading/MusicHeading";
import MusicCard from "../../components/Cards/MusicCard";

//== Styles
import styles from './Category.module.scss';

//== Icons
import MusicArtist from "../../assets/images/others/artistFour.png";
import {catPlaylist} from '../../constant/catPlaylist';
import {AudioContext} from '../../context/AudioContext';

const Category = () => {
    const {setIsVisible, setMusicData, isPlaying, setIsPlaying, musicData} = useContext(AudioContext);
    const [activeIndex, setActiveIndex] = useState<any>(0);
    const handleActiveTrack = (itemIndex: number) => {
        setActiveIndex(itemIndex);
    };

    const togglePlayPause = (itemIndex:number, itemData:any) => {
        setMusicData(itemData);
        console.log(itemIndex, itemData);
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        // setMusicData({title, image, artist, music});
        setIsVisible(true);
    };

    return (
        <>
            <MusicHeading
                title={musicData?.itemTitle}
                image={musicData.itemCoverUrl}
                date={musicData?.date}
                duration={musicData?.duration}
                language={musicData?.language}
                artist={musicData?.artist}
            />

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
