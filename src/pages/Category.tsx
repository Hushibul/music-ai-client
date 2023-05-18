import MusicHeading from "../components/heading/MusicHeading";

import MusicArtist from "../assets/images/others/artistFour.png";
import AudioPlayer from "../components/player/AudioPlayer";
import MusicCard from "../components/cards/MusicCard";

import HorseAudio from "../assets/musics/horseAudio.mp3";

const Category = () => {
  return (
    <>
      <MusicHeading
        title="Besound Space"
        image={MusicArtist}
        date="25 Nov, 2022"
        duration="2 min 05 sec"
        language="Hindi"
        artist="Artist: Denis Pavlov, Pavlov Denis"
      />

      {/* <AudioPlayer /> */}

      <MusicCard
        title="Besound Space"
        image={MusicArtist}
        duration="2:05"
        artist="Artist: Denis Pavlov, Pavlov Denis"
        music={HorseAudio}
      />
    </>
  );
};

export default Category;
