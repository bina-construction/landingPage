import React, { useState } from "react";

import "./clientInfo.scss";
import infoJson from "../../data/dataProject.json";
import { clientInfo, clientInfoKey } from "../../types/Data";
import { verifForm, generateToast } from "../../utils/verifForm";
import { Img, ProgressBar, IconButton, BinaLogo } from "../atoms/";
import { ClientForm } from "../molecules/";

interface Props {
  onSubmit: (info: clientInfo) => void;
  back: () => void;
  clientType: "personal" | "professional";
  home: () => void;
  intialValue: clientInfo;
}

interface translate {
  corporation: string;
  name: string;
  mail: string;
  postal: string;
  phone: string;
  [key: string]: string;
}

const ClientInfo: React.FC<Props> = ({
  onSubmit,
  back,
  clientType,
  home,
  intialValue,
}) => {
  const [clientInfo, setClientInfo] = useState<clientInfo>(intialValue);

  const translate: translate = {
    corporation: "Votre entreprise",
    name: "Nom",
    mail: "Adresse mail",
    postal: "Code postal",
    phone: "Téléphone",
  };

  function verif() {
    //Basic fields (=> clientInfo is empty by default)
    const field: clientInfo = {
      name: clientInfo.name,
      mail: clientInfo.mail,
      postal: clientInfo.postal,
      phone: clientInfo.phone,
    };

    //Additionnal field
    if (clientType === "professional") {
      field.corporation = clientInfo.corporation;
    }

    //Test if form is valid
    if (verifForm(field).success === true) {
      //Submit result
      onSubmit(clientInfo);
      generateToast("Vos informations ont bien été enregistré", "success");
    } else {
      //Send Error
      const { error } = verifForm(field);
      if (error.length >= 2) {
        generateToast("Plusieurs champs sont incorrect.");
      } else {
        generateToast(`Le champs "${translate[error[0]]}" est incorrect.`);
      }
    }
  }

  return (
    <section id="clientInfo">
      <Img
        img={infoJson.screen2.background}
        className="left-img"
        size="cover"
        htmlId="project-screen2-bg"
      />
      <div className="right-container">
        <div className="top">
          <div className="back-button">
            <IconButton img="arrow.svg" onClick={back} />
          </div>
          <BinaLogo onClick={home} />
        </div>
        <h3 id="project-screen2-title">{infoJson.screen2.title}</h3>
        <ClientForm
          client={clientType}
          update={(key: clientInfoKey, value: string | number) =>
            setClientInfo({ ...clientInfo, [key]: value })
          }
          value={clientInfo}
        />
        <div className="bottom">
          <div className="bottom-submit-button">
            <IconButton
              img="arrow.svg"
              style={{ background: "#62b2ab" }}
              onClick={verif}
            />
          </div>
          <ProgressBar step={2} />
        </div>
      </div>
    </section>
  );
};

export default ClientInfo;
