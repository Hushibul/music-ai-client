import MusicHeading from "../components/heading/MusicHeading";

import MusicArtist from "../assets/images/others/artistFour.png";
import MusicCard from "../components/cards/MusicCard";

import { MusicPlayers } from "../assets/constants/constants";
import { Fragment } from "react";

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

      {MusicPlayers.map((item, index) => (
        <Fragment key={item.id}>
          <MusicCard
            index={index}
            title={item.title}
            image={item.imgage}
            artist={item.artist}
            music={item.music}
          />
        </Fragment>
      ))}
    </>
  );
};

export default Category;
