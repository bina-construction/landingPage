import React from "react";

import "./numberProjectCard.scss";
import { Img, Input } from "../atoms";

interface Props {
  img: string;
  text: string;
  htmlId?: string;
  metter?: boolean;
  value: string;
  update: (r: string) => void;
}

const NumberProjectCard: React.FC<Props> = ({
  img,
  text,
  metter = false,
  value,
  update,
  htmlId = "",
}) => {
  return (
    <div
      className="project-number-card"
      style={metter ? { padding: "1rem 0" } : { padding: "1.5rem 0" }}
    >
      <p className="title" id={`${htmlId}-title`}>
        {text}
      </p>
      <Img img={img} className="button-img" htmlId={`${htmlId}-img`} />
      <div className="input-container">
        <Input
          onChange={(value) => update(value)}
          type="number"
          value={value}
        />
      </div>
      {metter && <p>m²</p>}
    </div>
  );
};

export default NumberProjectCard;
