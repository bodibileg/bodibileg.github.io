import { FC } from "react";
import "./styles.scss";

interface LinkProps {
  to: string;
  text: string;
}

const Link: FC<LinkProps> = ({ to, text }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className="link">
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-arrow-up-right"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </a>
  );
};

export default Link;
