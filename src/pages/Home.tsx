//==Constant variables
import { Musics, exploreMusic } from "../assets/constants/constants";

//== Components
import AllCategory from "../components/category/AllCategory";
import Hero from "../components/hero/Hero";
import MusicSlider from "../components/slider/MusicSlider";

const Home = () => {
  const shuffledOne = Musics.reduce(
    ([a, b]) => (
      b.push(...a.splice((Math.random() * a.length) | 0, 1)), [a, b]
    ),
    [[...Musics], []]
  )[1];

  const shuffledTwo = Musics.reduce(
    ([a, b]) => (
      b.push(...a.splice((Math.random() * a.length) | 0, 1)), [a, b]
    ),
    [[...Musics], []]
  )[1];

  return (
    <>
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
        spSmall={3}
        spMedium={4}
        spLarge={6}
        title="Acoustic Music"
        list={Musics}
        type={2}
      />

      <MusicSlider
        spSmall={3}
        spMedium={4}
        spLarge={6}
        title="Cinematic"
        list={shuffledOne}
        type={2}
      />

      <MusicSlider
        spSmall={3}
        spMedium={4}
        spLarge={6}
        title="Ambient"
        list={shuffledTwo}
        type={2}
      />

      <MusicSlider
        spSmall={3}
        spMedium={4}
        spLarge={6}
        title="Acoustic Music"
        list={Musics}
        type={2}
      />

      <MusicSlider
        spSmall={3}
        spMedium={4}
        spLarge={6}
        title="Cinematic"
        list={shuffledOne}
        type={2}
      />

      <MusicSlider
        spSmall={3}
        spMedium={4}
        spLarge={6}
        title="Ambient"
        list={shuffledTwo}
        type={2}
      />

      <AllCategory />
    </>
  );
};

export default Home;
