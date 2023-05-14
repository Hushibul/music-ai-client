import Styles from "./SliderCard.module.scss";

interface ICard {
  image: string;
  title: string;
  artist: string;
}

const SliderCardTwo = ({ image, title, artist }: ICard) => {
  return (
    <div className={`${Styles.sliderCardTwo} p-0`}>
      <img className="img-fluid shadow-sm" src={image} alt={title} />
      <h4 className="subtitle ms-2 my-1 text-start pt-1">{title}</h4>
      <span className="text-small d-block ms-2 text-start mb-3">{artist}</span>
    </div>
  );
};

export default SliderCardTwo;
