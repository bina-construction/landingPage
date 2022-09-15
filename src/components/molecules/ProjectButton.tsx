import React from "react";

import "./projectButton.scss";
import { CardButton, Img } from "../atoms/";

interface Props {
  onClick: () => void;
  img: string;
  text: string;
  htmlId?: string;
}

const ProjectButton: React.FC<Props> = ({
  onClick,
  img,
  text,
  htmlId = "",
}) => {
  return (
    <CardButton onClick={() => onClick()} className="project-card-button">
      <Img img={img} className="button-img" htmlId={`${htmlId}-img`} />
      <p id={`${htmlId}-title`}>{text}</p>
    </CardButton>
  );
};

export default ProjectButton;
