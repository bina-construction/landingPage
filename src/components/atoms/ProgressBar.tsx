import React from "react";

import "./progressBar.scss";

interface Props {
  step: number;
}

const ProgressBar: React.FC<Props> = ({ step = 1 }) => {
  return (
    <div className="progress-container">
      <div className="progress-container-left">
        <div
          className="atom-progress-bar"
          style={{ width: `${(step / 5) * 180}px` }}
        ></div>
      </div>
      <div className="progress-container-right">
        <h4>{step}/5</h4>
      </div>
    </div>
  );
};

export default ProgressBar;
