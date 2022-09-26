import React from "react";

import "./img.scss";

interface Props {
  img: string;
  className?: string;
  children: React.ReactNode;
  htmlId: string;
  size?: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onClick?: () => void;
}

const ImgTemplate: React.FC<Props> = ({
  img,
  className,
  children,
  htmlId,
  size = "100%",
  onMouseOver,
  onMouseOut,
  onClick,
}) => {
  return (
    <div
      className={`${className} atom-img-template`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: `${size}`,
      }}
      id={htmlId}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ImgTemplate;
