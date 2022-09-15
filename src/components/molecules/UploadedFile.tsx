import React from "react";

import "./uploadedFile.scss";
import { Img, IconButton } from "../atoms";

interface Props {
  fileName: string;
  onRemove: () => void;
}

const UploadedFile: React.FC<Props> = ({ fileName, onRemove }) => {
  return (
    <div className="atom-uploaded-file">
      <Img img="check.webp" className="check-img" />
      <p>{fileName}</p>
      <div className="close-container">
        <IconButton img="close.webp" onClick={onRemove} />
      </div>
    </div>
  );
};

export default UploadedFile;
