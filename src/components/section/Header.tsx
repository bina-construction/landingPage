import React from "react";

import "./header.scss";
import infoJson from "../../data/data.json";
import { ImgTemplate } from "../atoms";

const Header: React.FC = () => {
  return (
    <header>
      <ImgTemplate
        className="header"
        htmlId="header"
        img="header.webp"
        size="cover"
      >
        <div className="header-title-container">
          <h1 id="header-title1">{infoJson.Header.title.line1}</h1>
          <h1 id="header-title2">{infoJson.Header.title.line2}</h1>
        </div>
      </ImgTemplate>
    </header>
  );
};

export default Header;
