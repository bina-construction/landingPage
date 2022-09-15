import React from "react";

import infoJson from "../../data/data.json";
import "./project.scss";
import { Title } from "../atoms";
import { ProjectGallery } from "../molecules";

const Project: React.FC = () => {
  return (
    <section id="home-project">
      <Title value={infoJson.project.title} htmlId="project-gallery-title" />
      <div className="gallery-container">
        <ProjectGallery
          bg={infoJson.project.projectType1.background}
          title={infoJson.project.projectType1.title}
          text={infoJson.project.projectType1.text}
          img={infoJson.project.projectType1.img.map((elm) => elm.item)}
          htmlId="project-gallery1"
        />
        <ProjectGallery
          bg={infoJson.project.projectType2.background}
          title={infoJson.project.projectType2.title}
          text={infoJson.project.projectType2.text}
          img={infoJson.project.projectType2.img.map((elm) => elm.item)}
          htmlId="project-gallery2"
        />
        <ProjectGallery
          bg={infoJson.project.projectType3.background}
          title={infoJson.project.projectType3.title}
          text={infoJson.project.projectType3.text}
          img={infoJson.project.projectType3.img.map((elm) => elm.item)}
          htmlId="project-gallery3"
        />
        <ProjectGallery
          bg={infoJson.project.projectType4.background}
          title={infoJson.project.projectType4.title}
          text={infoJson.project.projectType4.text}
          img={infoJson.project.projectType4.img.map((elm) => elm.item)}
          htmlId="project-gallery4"
        />
      </div>
    </section>
  );
};

export default Project;
