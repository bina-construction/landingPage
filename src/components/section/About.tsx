import React from "react";

import infoJson from "../../data/data.json";
import "./about.scss";
import useWindowDimensions from "../../utils/windowSizeHook";
import { AboutImg } from "../molecules";
import { Title } from "../atoms";

const About: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <section id="about">
      <Title
        value={
          width >= 580 ? infoJson.about.title.main : infoJson.about.title.reduce
        }
        htmlId="about-title"
      />

      <div className="bina-text">
        <h4 id="about-bina-text">{infoJson.about["text-bina"]}</h4>
      </div>

      <div className="about-main-container">
        <div className="left">
          <p id="about-text">{infoJson.about.text}</p>
        </div>
        <div className="right">
          <AboutImg
            name={infoJson.about.card1.name}
            img={infoJson.about.card1.img}
            htmlId="about-card1"
          />
          <AboutImg
            name={infoJson.about.card2.name}
            img={infoJson.about.card2.img}
            htmlId="about-card2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
