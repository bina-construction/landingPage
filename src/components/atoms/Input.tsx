import React from "react";

import "./input.scss";
import { Img } from "./";

interface Props {
  type: "text" | "tel" | "email" | "number";
  placeholder?: string;
  label?: string;
  icon?: string;
  value?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({
  type,
  placeholder = "",
  label,
  icon,
  onChange,
  value = "",
}) => {
  return (
    <div className={`atom-input-container ${icon && "icon-mode"}`}>
      {label && <label>{label} :</label>}
      {type === "number" && (
        <h3
          onClick={(e) => onChange(String(parseInt(value) + 1))}
          className="input-atom-arrow-mode-arrow"
        >
          ▲
        </h3>
      )}
      <input
        className={
          label
            ? "input-label-mode"
            : type === "number"
            ? "input-number-mode"
            : ""
        }
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {icon && <Img img={icon} className="atom-input-icon" />}
      {type === "number" && (
        <h3
          onClick={(e) => onChange(String(parseInt(value) - 1))}
          className="input-atom-arrow-mode-arrow"
        >
          ▼
        </h3>
      )}
    </div>
  );
};

export default Input;
