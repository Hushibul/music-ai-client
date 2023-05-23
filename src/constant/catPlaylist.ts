import musicOneCover from "../assets/images/others/musicOne.png";
import musicTwoMiniThumb from "../assets/images/others/musicTwo.png";
import musicThreeMiniThumb from "../assets/images/others/musicThree.png";
import PlayMusicOne from "../assets/musics/One.mp3";
import PlayMusicTwo from "../assets/musics/Two.mp3";
import PlayMusicThree from "../assets/musics/Three.mp3";

type catPlaylist = {
    id: string,
    itemCoverUrl: string,
    itemMiniThumbUrl: string,
    date: string,
    language: string,
    duration: string,
    artist: string,
    favorite: boolean,
    itemTitle: string,
    itemUrl: string
}

export const catPlaylist: catPlaylist[] = [
    {
        id: "1",
        itemCoverUrl: `${musicOneCover}`,
        date: "2023-05-22",
        language: "English",
        duration: "3:45",
        artist: "John Smith",
        favorite: true,
        itemTitle: "Song Title 1",
        itemUrl: `${PlayMusicOne}`,
        itemMiniThumbUrl: `${musicTwoMiniThumb}`
    },
    {
        id: "2",
        itemCoverUrl: `${musicOneCover}`,
        date: "2023-05-21",
        language: "Spanish",
        duration: "4:20",
        artist: "Maria Lopez",
        favorite: false,
        itemTitle: "Song Title 2",
        itemUrl: `${PlayMusicTwo}`,
        itemMiniThumbUrl: `${musicThreeMiniThumb}`
    },
    {
        id: "3",
        itemCoverUrl: `${musicOneCover}`,
        date: "2023-05-20",
        language: "French",
        duration: "2:55",
        artist: "Julien Dubois",
        favorite: true,
        itemTitle: "Song Title 3",
        itemUrl: `${PlayMusicThree}`,
        itemMiniThumbUrl: `${musicTwoMiniThumb}`
    },
    {
        id: "4",
        itemCoverUrl: `${musicOneCover}`,
        date: "2023-05-22",
        language: "English",
        duration: "3:45",
        artist: "John Smith",
        favorite: true,
        itemTitle: "Song Title 1",
        itemUrl: `${PlayMusicOne}`,
        itemMiniThumbUrl: `${musicTwoMiniThumb}`
    },
    {
        id: "5",
        itemCoverUrl: `${musicOneCover}`,
        date: "2023-05-21",
        language: "Spanish",
        duration: "4:20",
        artist: "Maria Lopez",
        favorite: false,
        itemTitle: "Song Title 2",
        itemUrl: `${PlayMusicTwo}`,
        itemMiniThumbUrl: `${musicThreeMiniThumb}`
    },
    {
        id: "6",
        itemCoverUrl: `${musicOneCover}`,
        date: "2023-05-20",
        language: "French",
        duration: "2:55",
        artist: "Julien Dubois",
        favorite: true,
        itemTitle: "Song Title 3",
        itemUrl: `${PlayMusicThree}`,
        itemMiniThumbUrl: `${musicTwoMiniThumb}`
    }
];