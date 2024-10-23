import { FC } from "react";
import Card from "./Card";
import Link from "../Link/Link";

interface ExperienceCardProps {
  image: string;
  position: string;
  company: string;
  date: string;
  bulletPoints: {
    text: string;
    link?: {
      text: string;
      to: string;
    };
  }[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  image,
  position,
  company,
  date,
  bulletPoints,
}) => {
  return (
    <Card image={image} title={position} description={company} date={date}>
      <ul>
        {bulletPoints.map((bulletPoint, idx) => (
          <>
            <li key={idx}>{bulletPoint.text}</li>
            {bulletPoint.link && (
              <Link to={bulletPoint.link.to} text={bulletPoint.link.text} />
            )}
          </>
        ))}
      </ul>
    </Card>
  );
};

export default ExperienceCard;
