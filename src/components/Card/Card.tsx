import { FC } from "react";
import "./card.scss";

interface CardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  children?: React.ReactNode;
}

const Card: FC<CardProps> = ({ image, title, description, date, children }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={image} alt={description} />
        <div className="info">
          <h2>{title}</h2>
          <h3>{description}</h3>
          <h4>{date}</h4>
        </div>
      </div>
      <div className="bottom">{children}</div>
    </div>
  );
};

export default Card;
