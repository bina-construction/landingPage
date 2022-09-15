import React from "react";

import "./accompanimentSg.scss";
import infoJson from "../../data/data.json";
import { TextBanner, Img } from "../atoms";

const AccompanimentSg: React.FC = () => {
  return (
    <section id="accompaniment-sg">
      <div className="left">
        <TextBanner
          text={infoJson.accompaniment.left.title}
          htmlId="home-accompaniment-left-title"
          size="lg"
          color={{ color: "#3A4F4E", background: "#F0E7D6" }}
        />
        <div className="item-container">
          {infoJson.accompaniment.left.item.map((elm, index) => (
            <TextBanner
              text={elm.title}
              htmlId="home-accompaniment-left-item"
              indexId={String(index)}
              icon={elm.icon}
              iconPosition="left"
              size="md"
              color={{ background: "#3A4F4E", color: "#F0E7D6" }}
              key={`home-accompaniment-${elm}-${index}`}
            />
          ))}
        </div>
      </div>

      <div className="mid">
        <Img
          img={infoJson.accompaniment.img}
          className="img"
          htmlId="home-accompaniment-img"
        />
      </div>

      <div className="right">
        <TextBanner
          text={infoJson.accompaniment.right.title}
          htmlId="home-accompaniment-right-title"
          size="lg"
          color={{ color: "#3A4F4E", background: "#F0E7D6" }}
        />
        <div className="item-container">
          {infoJson.accompaniment.right.item.map((elm, index) => (
            <TextBanner
              text={elm.title}
              htmlId="home-accompaniment-right-item"
              indexId={String(index)}
              icon={elm.icon}
              iconPosition="right"
              size="md"
              color={{ background: "#F3F3F3", color: "#3A504E" }}
              key={`home-accompaniment-${elm}-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccompanimentSg;
