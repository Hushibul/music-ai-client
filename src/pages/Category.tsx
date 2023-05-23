import MusicHeading from "../components/heading/MusicHeading";

import MusicArtist from "../assets/images/others/artistFour.png";
import MusicCard from "../components/cards/MusicCard";

import { MusicPlayers } from "../assets/constants/constants";
import { Fragment, useState } from "react";

const Category = () => {
  const [activeIndex, setActiveIndex] = useState<any>(0);
  const handleActiveTrack = (itemIndex: number) => {
    setActiveIndex(itemIndex);
  };

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

      <div style={{ backgroundColor: "f2f2f2" }} className="p-4 rounded-3">
        {MusicPlayers.map((item, index) => (
          <Fragment key={item.id}>
            <MusicCard
              index={index}
              title={item.title}
              image={item.imgage}
              artist={item.artist}
              music={item.music}
              activeIndex={activeIndex}
              duration={item.duration}
              handleActiveTrack={handleActiveTrack}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Category;
