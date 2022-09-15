import React, { useState } from "react";

import "./contact.scss";
import infoJson from "../../data/data.json";
import { verifForm, generateToast } from "../../utils/verifForm";
import { ImgTemplate, Input, Button } from "../atoms";

interface translate {
  name: string;
  phone: string;
  [key: string]: string;
}

interface Props {
  onSubmit: (data: { name: string; phone: string }) => void;
}

const Contact: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");

  const translate: translate = {
    name: "Nom Prénom",
    phone: "Téléphone",
  };

  function verif() {
    if (verifForm({ name, phone: tel }).success !== true) {
      const { error } = verifForm({ name, phone: tel });
      if (error.length >= 2) {
        generateToast("Plusieurs champs sont incorrect.");
      } else {
        generateToast(`Le champs "${translate[error[0]]}" est incorrect.`);
      }
    } else {
      onSubmit({ name: name, phone: tel });
      setName("");
      setTel("");
      generateToast("Le formulaire à bien été envoyé", "success");
    }
  }

  return (
    <section id="contact">
      <ImgTemplate
        img="contact.webp"
        className="background"
        htmlId="contact-background"
        size="cover"
      >
        <div className="main-container">
          <h3 id="contact-title">{infoJson.Contact.title}</h3>
          <p id="contact-subtitle">{infoJson.Contact.subtitle}</p>

          <div className="form-container">
            <div className="field-container">
              <Input
                type="text"
                onChange={(value) => setName(value)}
                placeholder="Nom Prénom"
                icon="user.webp"
                value={name}
              />
              <Input
                type="tel"
                onChange={(value) => setTel(value)}
                placeholder="Tél"
                icon="phone.webp"
                value={tel}
              />
            </div>
            <Button
              value="Envoyer"
              className="contact-button"
              onClick={() => verif()}
            />
          </div>
        </div>
      </ImgTemplate>
    </section>
  );
};

export default Contact;
