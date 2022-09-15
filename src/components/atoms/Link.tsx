import React from "react";

import "./link.scss";

interface Props {
  value?: string;
  href: string;
  className?: string;
  link?: string;
  htmlId?: string;
  colorStyle?: string;
}

const Link: React.FC<Props> = ({
  value,
  href,
  className = "",
  htmlId = "",
  colorStyle,
}) => {
  return (
    <a
      href={href}
      id={htmlId}
      className={`atom-link ${className}`}
      style={colorStyle ? { color: colorStyle } : {}}
    >
      {value}
    </a>
  );
};

export default Link;
