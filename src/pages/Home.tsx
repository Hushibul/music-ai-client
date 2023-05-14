import { Musics, exploreMusic } from "../assets/constants/constants";
import Hero from "../components/hero/Hero";
import MusicSlider from "../components/slider/MusicSlider";

const Home = () => {
  const shuffled = Musics.reduce(
    ([a, b]) => (
      b.push(...a.splice((Math.random() * a.length) | 0, 1)), [a, b]
    ),
    [[...Musics], []]
  )[1];
  return (
    <div>
      <Hero />

      <MusicSlider
        spSmall={2}
        spMedium={3}
        spLarge={4}
        title="Explore Music"
        list={exploreMusic}
        type={1}
      />
      <MusicSlider
        spSmall={2}
        spMedium={3}
        spLarge={4}
        title="Cinema"
        list={Musics}
        type={2}
      />
      <MusicSlider
        spSmall={2}
        spMedium={3}
        spLarge={4}
        title="Ambient"
        list={shuffled}
        type={2}
      />
    </div>
  );
};

export default Home;
