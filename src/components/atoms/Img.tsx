import React from "react";

import "./img.scss";

interface Props {
  img: string;
  className?: string;
  htmlId?: string;
  size?: "fill" | "contain" | "cover";
}

const Img: React.FC<Props> = ({
  img,
  className = "",
  htmlId = "",
  size = "contain",
}) => {
  return (
    <img
      src={require(`../../assets/images/${img}`)}
      id={htmlId}
      className={`${className} atom-img`}
      alt={img}
      loading="lazy"
      style={{ objectFit: `${size}` }}
    />
  );
};

export default Img;

// <div
//   className={`${className} atom-img`}
//   id={htmlId}
//   style={{
//     backgroundImage: `url(${require(`../../assets/images/${img}`)})`,
//     backgroundSize: `${size}`,
//   }}
// ></div>
