import Classes from "./MusicHero.module.scss";
import favoriteIcon from "../../assets/images/icons/favorites.svg";
import threeMenu from "../../assets/images/icons/threeMenu.svg";

interface IMusicHero {
  image: string;
  title: string;
  date: string;
  language: string;
  duration: string;
  artist: string;
}

const MusicHero = ({
  image,
  title,
  date,
  language,
  duration,
  artist,
}: IMusicHero) => {
  return (
    <div
      className={`${Classes.musichero} d-flex flex-column flex-md-row gap-md-4`}
    >
      <img src={image} alt={title} />
      <div className={Classes.musichero__content}>
        <h2 className="text-dark fw-bolder">{title}</h2>
        <p className="ms-1 text-secondary">
          {date} | {language} | {duration}
        </p>
        <p className="text-small">Artist: {artist}</p>
        <div className="d-flex align-items-center gap-4">
          <button className="bg-danger px-3 py-2 border-0 rounded-3 text-light">
            Play Now
          </button>
          <img className="cursor-pointer" src={favoriteIcon} alt="Favorites" />
          <img
            className="cursor-pointer"
            src={threeMenu}
            alt="Rest of the Menu"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicHero;
