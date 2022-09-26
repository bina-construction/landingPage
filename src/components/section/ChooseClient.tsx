import React from "react";

import "./chooseClient.scss";
import infoJson from "../../data/dataProject.json";
import { Img, ProgressBar, BinaLogo, IconButton } from "../atoms/";
import { ProjectButton } from "../molecules/";

interface Props {
  onClick: (client: "personal" | "professional") => void;
  home: () => void;
}

const ChooseClient: React.FC<Props> = ({ onClick, home }) => {
  return (
    <section id="choose">
      <div className="left-container">
        <div className="top">
          <IconButton img="/images/close.webp" onClick={home} />
          <BinaLogo onClick={home} />
        </div>
        <h3 id="project-screen1-title">{infoJson.screen1.title}</h3>
        <div className="button-container">
          <ProjectButton
            onClick={() => onClick("professional")}
            img={infoJson.screen1.card1.icon}
            text={infoJson.screen1.card1.text}
            htmlId="project-screen1-card1"
          />
          <ProjectButton
            onClick={() => onClick("personal")}
            img={infoJson.screen1.card2.icon}
            text={infoJson.screen1.card2.text}
            htmlId="project-screen1-card2"
          />
        </div>
        <ProgressBar step={1} />
      </div>
      <Img
        img={infoJson.screen1.background}
        className="right-img"
        htmlId="project-screen1-bg"
        size="cover"
      />
    </section>
  );
};

export default ChooseClient;
