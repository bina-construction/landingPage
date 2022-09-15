import React from "react";

import "./skills.scss";
import { Img } from "./";

interface Props {
  title: string;
  img: string;
  htmlIdImg?: string;
  htmlIdText?: string;
}

const Skills: React.FC<Props> = ({ title, img, htmlIdImg, htmlIdText }) => {
  return (
    <div className="skills-item">
      <Img img={img} className="img" htmlId={htmlIdImg} size="contain" />
      <h4 id={htmlIdText}>{title}</h4>
    </div>
  );
};

export default Skills;
