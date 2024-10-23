import { FC } from "react";
import "./pill.scss";

interface PillProps {
  text: string;
  color: string;
  backgroundColor: string;
}

const Pill: FC<PillProps> = ({ text, color, backgroundColor }) => {
  return (
    <span className="pill" style={{ color, backgroundColor }}>
      {text}
    </span>
  );
};

export default Pill;
