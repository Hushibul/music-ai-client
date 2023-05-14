import Classes from "./SliderCard.module.scss";

interface ICard {
  image: string;
  title: string;
}

const SliderOneCard = ({ image, title }: ICard) => {
  return (
    <div className={Classes.sliderCard}>
      <img src={image} alt={title} />

      <span className={`${Classes.sliderCard__title}`}>{title}</span>
    </div>
  );
};

export default SliderOneCard;
