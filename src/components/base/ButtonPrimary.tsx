interface IButton {
  color: string;
  title: string;
  textColor?: string;
}

const ButtonPrimary = ({ color, title, textColor }: IButton) => {
  return (
    <button className={`button-primary bg-${color} text-${textColor}`}>
      {title}
    </button>
  );
};

export default ButtonPrimary;
