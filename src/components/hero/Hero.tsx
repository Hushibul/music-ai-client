import Styles from "./Hero.module.scss";
import SingerImage from "../../assets/images/others/singerBg.png";

import MusicIcon from "../../assets/images/icons/musics.svg";
import DownloadIcon from "../../assets/images/icons/downloads.svg";
import PeopleIcon from "../../assets/images/icons/peoples.svg";

const Hero = () => {
  return (
    <div className={`${Styles.hero}`}>
      <div className={`${Styles.hero__content}`}>
        <h1 className="title text-center text-lg-start">Music for Creators</h1>

        <div className="d-flex gap-4 align-items-center justify-content-center justify-content-lg-start">
          <div className="d-flex gap-3 align-items-center">
            <img src={MusicIcon} alt="Music Icon" />
            <p className="mt-3">2K</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <img src={DownloadIcon} alt="Download Icon" />
            <p className="mt-3">50K</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <img src={PeopleIcon} alt="Peoples Icon" />
            <p className="mt-3">30K</p>
          </div>
        </div>

        <p>
          No copyright claims. Your favorite beatmakers. Unlimited Download.
        </p>
      </div>

      <img
        src={SingerImage}
        alt="singersBG"
        className={Styles.hero__singerBg}
      />
    </div>
  );
};

export default Hero;
