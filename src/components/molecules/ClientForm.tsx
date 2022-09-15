import React from "react";

import "./clientForm.scss";
import { clientInfo, clientInfoKey } from "../../types/Data";
import { Input } from "../atoms";

interface Props {
  client: "personal" | "professional";
  update: (key: clientInfoKey, value: string | number) => void;
  value: clientInfo;
}

const ClientForm: React.FC<Props> = ({ client, update, value }) => {
  return (
    <div className="client-form-container">
      <div className="container">
        {client === "professional" && (
          <Input
            type="text"
            label="Votre entreprise (raison sociale)"
            onChange={(value) => update("corporation", value)}
            value={value.corporation}
          />
        )}
        {client === "personal" ? (
          <Input
            type="text"
            label="Nom"
            onChange={(value) => update("name", value)}
            value={value.name}
          />
        ) : (
          <Input
            type="text"
            label="Nom du dirigeant"
            onChange={(value) => update("name", value)}
            value={value.name}
          />
        )}
        <Input
          type="email"
          label="Adresse mail"
          onChange={(value) => update("mail", value)}
          value={value.mail}
        />
        <Input
          type="text"
          label="Code postal"
          onChange={(value) => update("postal", parseInt(value))}
          value={value.postal ? String(value.postal) : ""}
        />
        <Input
          type="tel"
          label="Téléphone"
          onChange={(value) => update("phone", value)}
          value={value.phone}
        />
      </div>
    </div>
  );
};

export default ClientForm;
