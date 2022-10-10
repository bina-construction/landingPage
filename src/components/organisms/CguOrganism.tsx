import React from "react";
import Markdown from "react-markdown";
import cguJson from "../../data/cgu.json";
import { BinaLogo } from "../atoms";
import { Footer } from "../section";
import "./cguOrganism.scss";

interface Props {}

const CguOrganism: React.FC<Props> = () => {
  return (
    <>
      <nav id="cgu-nav" className="cgu-nav-default-color">
        <div className="bina-logo">
          <a href="/">
            <BinaLogo onClick={() => {}} size="md" />
          </a>
        </div>
      </nav>
      <div className="cgu-main">
        <Markdown>{cguJson.cgu}</Markdown>
      </div>
      <Footer withoutLink />
    </>
  );
};

export default CguOrganism;
