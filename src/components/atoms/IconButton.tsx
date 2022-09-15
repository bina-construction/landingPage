import React from "react";

import "./iconButton.scss";
import { Img } from "./";

interface style {
  border?: string;
  background?: string;
}

interface Props {
  img: string;
  onClick: () => void;
  style?: style;
}

const IconButton: React.FC<Props> = ({
  img,
  onClick,
  style = { border: "", background: "" },
}) => {
  return (
    <div
      className="icon-button-container"
      onClick={onClick}
      style={{
        border: `3px solid ${
          style.border !== "" ? style.border : "transparent"
        }`,
        backgroundColor: `${
          style.background !== "" ? style.background : "transparent"
        }`,
      }}
    >
      <Img img={img} className="icon-button-img" />
    </div>
  );
};

export default IconButton;
