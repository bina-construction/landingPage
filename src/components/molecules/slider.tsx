import React, { useRef } from "react";

import "./slider.scss";
import { Img } from "../atoms/";
import useWindowDimensions from "../../utils/windowSizeHook";

interface Props {
  images: string[];
}

const Slider: React.FC<Props> = ({ images }) => {
  const slider = useRef<HTMLDivElement>(null);

  const { width } = useWindowDimensions();

  function scrollSlider(direction: string) {
    let step = 0;

    if (width <= 480) {
      step = 250;
    } else if (width >= 480 && width <= 768) {
      step = 460;
    } else {
      step = 650;
    }

    if (direction === "left") {
      slider.current!.scrollLeft -= step;
    } else {
      slider.current!.scrollLeft += step;
    }
  }

  return (
    <div className="slider-container">
      <h1 onClick={() => scrollSlider("left")}>&#60;</h1>
      <div className="slider" ref={slider} id="test">
        {images.map((elm, index) => (
          <Img
            img={elm}
            className="img"
            key={`slide-${elm}-${index}`}
            htmlId={`sponsor-img${elm}`}
          />
        ))}
      </div>
      <h1 onClick={() => scrollSlider("right")}>&gt;</h1>
    </div>
  );
};

export default Slider;
