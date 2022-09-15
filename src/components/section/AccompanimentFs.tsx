import React from "react";

import "./accompanimentFs.scss";
import infoJson from "../../data/data.json";
import { Title, Img } from "../atoms";

const AccompanimentFs: React.FC = () => {
  return (
    <section id="accompaniment-fs">
      <Title
        value={infoJson.accompaniment.title}
        htmlId="home-accompaniment-title"
      />
      <div className="main-container">
        {infoJson.accompaniment.top.map((elm, index) => (
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

export default AccompanimentFs;
