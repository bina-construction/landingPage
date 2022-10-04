import React from "react";

import infoJson from "../../data/data.json";
import "./skills.scss";
import { Title, Img } from "../atoms";
import { Skill } from "../molecules";
import "./accompanimentFs.scss";

const Skills: React.FC = () => {
  return (
    <section id="home-skills">
      <Title value={infoJson.skills.title} htmlId="home-skills-title" />
      <div className="top">
        <Img
          img={infoJson.skills.gif}
          htmlId="home-skills-gif"
          className="gif"
          size="contain"
        />
      </div>
      <div className="mid">
        <h5 id="home-skills-text" className="text">
          {infoJson.skills.text}
        </h5>
      </div>
      <div className="bottom">
        {infoJson.skills.skill.map((elm, index) => (
          // <Skill
          //   icon={elm.icon}
          //   text={elm.title}
          //   index={String(index + 1)}
          //   htmlId={`home-skills-skill`}
          //   key={`home-skills-skill-component-${index}`}
          // />
          <div
            className="item-container"
            key={`accompaniment-fs-item-container-${index}`}
          >
            <div className="icon-container">
              <Img
                className="icon"
                img={elm.icon}
                htmlId={`home-accompaniment-top-img${index}`}
                size="contain"
              />
            </div>
            <p id={`home-accompaniment-top-title${index}`}>{elm.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
