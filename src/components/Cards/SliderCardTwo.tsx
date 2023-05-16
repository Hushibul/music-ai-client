import Styles from "./SliderCard.module.scss";

interface ICard {
  image: string;
  title: string;
  artist: string;
}

const SliderCardTwo = ({ image, title, artist }: ICard) => {
  return (
    <div className={`${Styles.sliderCardTwo} p-0`}>
      <div className={Styles.sliderCardTwo__image}>
        <img className="img-fluid shadow-lg" src={image} alt={title} />
      </div>
      <h4 className="subtitle ms-2 mt-2 mb-1 text-start pt-1">{title}</h4>
      <span className="text-small d-block ms-2 text-start mb-3">{artist}</span>
    </div>
  );
};

export default SliderCardTwo;
