import Classes from "./SliderCard.module.scss";

interface ICard {
  image: string;
  title: string;
  artist: string;
}

const SliderTwoCard = ({ image, title, artist }: ICard) => {
  return (
    <div className={`${Classes.sliderCardTwo} rounded-lg`}>
      <img src={image} alt={title} />
      <h4 className="subtitle ms-2 my-1 text-start">{title}</h4>
      <span className="text-small d-block ms-2 text-start mb-3">{artist}</span>
    </div>
  );
};

export default SliderTwoCard;
