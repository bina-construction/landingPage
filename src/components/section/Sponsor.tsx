import React from "react";

import "./sponsor.scss";
import infoJson from "../../data/data.json";
import { Img, Title } from "../atoms/";
import { Slider } from "../molecules";
import useWindowDimensions from "../../utils/windowSizeHook";

const Sponsor: React.FC = () => {
  const { width } = useWindowDimensions();

  function isSliderShow() {
    if (infoJson.sponsor.img.length > 4 || width <= 560) return true;
  }

  return (
    <section id="sponsor">
      <Title value={infoJson.sponsor.title} htmlId="sponsor-title" />

      {isSliderShow() ? (
        <Slider
          images={infoJson.sponsor.img.map(
            ({ title }: { title: string }) => title
          )}
        />
      ) : (
        <div className="slider-off">
          {infoJson.sponsor.img.map((elm, index) => (
            <Img
              img={elm.title}
              className="img"
              key={`slide-${elm}-${index}`}
              size="contain"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Sponsor;
