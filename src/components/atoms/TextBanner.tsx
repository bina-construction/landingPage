import React from "react";

import "./textBanner.scss";
import { Img } from "./";

interface Props {
  text: string;
  htmlId: string;
  color: { color: string; background: string };
  indexId?: string;
  size?: "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
}

const TextBanner: React.FC<Props> = ({
  text,
  htmlId,
  color,
  indexId,
  size = "md",
  icon,
  iconPosition,
}) => {
  return (
    <div
      className={`atom-text-banner ${
        size === "md"
          ? "atom-text-banner-medium-size"
          : "atom-text-banner-large-size"
      } ${
        iconPosition
          ? iconPosition === "left"
            ? "atom-text-banner-row"
            : "atom-text-banner-row-reverse"
          : "atom-text-banner-center"
      }`}
      style={{ backgroundColor: color.background }}
    >
      {icon && (
        <Img
          className="icon"
          htmlId={`${htmlId}-icon${indexId ? indexId : ""}`}
          img={icon}
        />
      )}
      <h3
        id={`${htmlId}-text${indexId ? indexId : ""}`}
        style={{ color: color.color }}
      >
        {text}
      </h3>
    </div>
  );
};

export default TextBanner;
