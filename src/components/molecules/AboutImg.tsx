import React from "react";

import "./aboutImg.scss";
import { ImgTemplate } from "../atoms";

interface Props {
  name: string;
  img: string;
  htmlId: string;
}

const AboutImg: React.FC<Props> = ({ name, img, htmlId }) => {
  return (
    <ImgTemplate
      img={img}
      className="about-img-container"
      htmlId={`${htmlId}-img`}
      size="cover"
    >
      <h3 id={`${htmlId}-name`} className="about-img-name">
        {name.split(" ")[0]}
        <span className="about-img-last-name">{name.split(" ")[1]}</span>
      </h3>
    </ImgTemplate>
  );
};

export default AboutImg;
