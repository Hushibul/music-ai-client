import Styles from "./Hero.module.scss";
import singerBg from "../../assets/images/others/singerBg.png";
import musicIcon from "../../assets/images/icons/musics.svg";
import downloadIcon from "../../assets/images/icons/downloads.svg";
import peopleIcon from "../../assets/images/icons/peoples.svg";

const Hero = () => {
  return (
    <div className={Styles.hero}>
      <div className={Styles.hero__content}>
        <h1 className="title">Music for Creators</h1>

        <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-4">
          <div className="d-flex gap-3 align-items-center">
            <img src={musicIcon} alt="Music Icon" />
            <p className="mt-3">2K</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <img src={downloadIcon} alt="Music Icon" />
            <p className="mt-3">50K</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <img src={peopleIcon} alt="Music Icon" />
            <p className="mt-3">30K</p>
          </div>
        </div>

        <p>
          No copyright claims. Your favorite beatmakers. Unlimited Download.
        </p>
      </div>
      <img className={Styles.hero__singerBg} src={singerBg} alt="singer Bg" />
    </div>
  );
};

export default Hero;
