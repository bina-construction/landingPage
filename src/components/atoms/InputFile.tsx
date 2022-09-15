import React from "react";

import "./inputFile.scss";

interface Props {
  text: string;
  htmlId: string;
  onChange: (files: FileList) => void;
}

const InputFile: React.FC<Props> = ({ text, htmlId, onChange }) => {
  return (
    <div className="atom-input-file">
      <label htmlFor="input-file">
        <p id={htmlId}>{text}</p>
        <input
          type="file"
          name="file"
          id="input-file"
          multiple
          onChange={(e) => onChange(e.target.files!)}
        />
      </label>
    </div>
  );
};

export default InputFile;
