import React, { useState } from "react";

import "./projectGallery.scss";
import { ImgTemplate, ZoomImg } from "../atoms";
import useWindowDimensions from "../../utils/windowSizeHook";

interface Props {
  bg: string;
  title: string;
  text: string;
  htmlId: string;
  img: string[];
}

const ProjectGallery: React.FC<Props> = ({ bg, title, text, htmlId, img }) => {
  const [hover, setHover] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  const imgArr: string[] = img;
  if (imgArr.length > 5) imgArr.length = 5;

  return (
    <ImgTemplate
      img={bg}
      className={`project-gallery-container ${
        hover
          ? "project-gallery-container-hover-mode"
          : "project-gallery-container-default-mode"
      }`}
      htmlId={`${htmlId}-bg`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => width <= 780 && setHover(!hover)}
      size="cover"
    >
      <h1
        className={`title ${
          hover ? "title-hover-mode hover-animation" : "title-default-mode"
        }`}
        id={`${htmlId}-title`}
      >
        {title}
      </h1>
      {hover && (
        <div className="bottom-container">
          <p id={`${htmlId}-text`} className="text">
            {text}
          </p>
          <div className="project-img-container">
            {imgArr.map((elm, index) => (
              <ZoomImg
                defaultStyle="project-img-item"
                size="cover"
                img={elm}
                htmlId={`${htmlId}-img-item-${index}`}
              />
            ))}
          </div>
        </div>
      )}
    </ImgTemplate>
  );
};

export default ProjectGallery;
