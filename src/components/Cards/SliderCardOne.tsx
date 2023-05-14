import Styles from "./SliderCard.module.scss";

interface ICard {
  image: string;
  title: string;
}

const SliderCardOne = ({ image, title }: ICard) => {
  return (
    <div className={Styles.sliderCard}>
      <img src={image} alt={title} />

      <span className={`${Styles.sliderCard__title}`}>{title}</span>
    </div>
  );
};

export default SliderCardOne;
