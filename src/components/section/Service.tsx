import react from "react";

import "./service.scss";
import infoJson from "../../data/dataProject.json";
import { services } from "../../types/Data";
import { Img, ProgressBar, IconButton, BinaLogo } from "../atoms";
import { ProjectButton } from "../molecules";

interface Props {
  back: () => void;
  onClick: (service: services) => void;
  home: () => void;
}

export const Service: React.FC<Props> = ({ back, onClick, home }) => {
  return (
    <section id="service">
      <div className="left">
        <div className="top">
          <div className="arrow">
            <IconButton img="arrow.svg" onClick={back} />
          </div>
          <BinaLogo onClick={home} />
        </div>
        <h3 id="project-screen3-title">{infoJson.screen3.title}</h3>
        <div className="card-button-container">
          <ProjectButton
            onClick={() => onClick("Hôtellerie / Restauration")}
            img={infoJson.screen3.card1.icon}
            text={infoJson.screen3.card1.text}
            htmlId="project-screen3-card1"
          />
          <ProjectButton
            onClick={() => onClick("Retail")}
            img={infoJson.screen3.card2.icon}
            text={infoJson.screen3.card2.text}
            htmlId="project-screen3-card2"
          />
          <ProjectButton
            onClick={() => onClick("Autre Projet")}
            img={infoJson.screen3.card3.icon}
            text={infoJson.screen3.card3.text}
            htmlId="project-screen3-card3"
          />
        </div>
        <div className="bottom">
          <ProgressBar step={3} />
        </div>
      </div>
      <Img
        img={infoJson.screen3.background}
        className="right"
        size="cover"
        htmlId="project-screen3-bg"
      />
    </section>
  );
};

export default Service;
