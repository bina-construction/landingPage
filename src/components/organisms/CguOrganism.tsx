import React from "react";
import Markdown from "react-markdown";
import cguJson from "../../data/cgu.json";

interface Props {}

const CguOrganism: React.FC<Props> = () => {
  return <Markdown>{cguJson.cgu}</Markdown>;
};

export default CguOrganism;
