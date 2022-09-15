import React from "react";
import { Data } from "../../types/Data";

import { ProjectOrganism } from "../organisms/";

interface Props {
  home: () => void;
}

const ProjectContainer: React.FC<Props> = ({ home }) => {
  const submitData: (data: Data) => void = (data) => {
    console.log(data);
  };

  return (
    <ProjectOrganism goHome={home} onSubmit={(data) => submitData(data)} />
  );
};

export default ProjectContainer;

/*

Context syntax
{
    step: string,
    client: "personal" | "corporation",
    clientInfo: {
        corporation?: string,
        name: string,
        mail: sting,
        phone: string (=> "+33 6")
    },
    service: "renovation complète" | "investisement locatif" | "rafraîchir et moderniser",
    mesure: {
        surfaceTotal: number,
        room: {
            bedroom: number,
            kitchen: number,
            livingRoom: number,
            bathroom: number,
            other: number
        }
    },
    files: file[]
}


*/
