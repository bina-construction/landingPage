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
        backgroundImage: `url(${
          img && img.startsWith("/images/") ? require(img) : img
        })`,
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

// backgroundImage: `url(${
//   img && img.startsWith("/src/assets/images/") ? require(img) : img
// })`,

// backgroundImage: `url(${
//   img && img.startsWith("/src/assets/images/")
//     ? require(img.split("/src/")[1])
//     : img
// })`,

// backgroundImage: `url(${img && require("assets/images/header.webp")})`,
