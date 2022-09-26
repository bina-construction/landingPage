import React, { useState } from "react";

import "./surface.scss";
import infoJson from "../../data/dataProject.json";
import { Img, IconButton, ProgressBar, BinaLogo } from "../atoms/";
import { NumberProjectCard } from "../molecules/";
import { mesure } from "../../types/Data";

interface Props {
  back: () => void;
  home: () => void;
  onSubmit: (surface: mesure) => void;
}

const Surface: React.FC<Props> = ({ back, home, onSubmit }) => {
  const [mesure, setMesure] = useState<mesure>({});

  return (
    <section id="surface">
      <div className="left">
        <div className="top">
          <div className="arrow">
            <IconButton img="/images/arrow.svg" onClick={back} />
          </div>
          <BinaLogo onClick={home} />
        </div>
        <div className="mid">
          <div className="sub-top">
            <h3 className="container-title" id="project-screen4-title1">
              {infoJson.screen4.title1}
            </h3>
            <NumberProjectCard
              img="key.svg"
              text="Surface"
              metter={true}
              value={mesure.surfaceTotal ? String(mesure.surfaceTotal) : "0"}
              update={(number) =>
                setMesure({ ...mesure, surfaceTotal: parseInt(number) })
              }
            />
          </div>
          <div className="sub-bottom">
            <h3 className="container-title" id="project-screen4-title2">
              {infoJson.screen4.title2}
            </h3>
            <div className="container">
              <NumberProjectCard
                img="/images/key.svg"
                text="Chambre"
                value={mesure.room?.bedroom ? String(mesure.room.bedroom) : "0"}
                update={(number) =>
                  setMesure({
                    ...mesure,
                    room: { ...mesure.room, bedroom: parseInt(number) },
                  })
                }
              />
              <NumberProjectCard
                img="/images/key.svg"
                text="Cuisine"
                value={mesure.room?.kitchen ? String(mesure.room.kitchen) : "0"}
                update={(number) =>
                  setMesure({
                    ...mesure,
                    room: { ...mesure.room, kitchen: parseInt(number) },
                  })
                }
              />
              <NumberProjectCard
                img="/images/key.svg"
                text="Salon"
                value={
                  mesure.room?.livingRoom ? String(mesure.room.livingRoom) : "0"
                }
                update={(number) =>
                  setMesure({
                    ...mesure,
                    room: { ...mesure.room, livingRoom: parseInt(number) },
                  })
                }
              />
              <NumberProjectCard
                img="/images/key.svg"
                text="Salle de bain"
                value={
                  mesure.room?.bathroom ? String(mesure.room.bathroom) : "0"
                }
                update={(number) =>
                  setMesure({
                    ...mesure,
                    room: { ...mesure.room, bathroom: parseInt(number) },
                  })
                }
              />
              <NumberProjectCard
                img="/images/key.svg"
                text="Autre"
                value={mesure.room?.other ? String(mesure.room.other) : "0"}
                update={(number) =>
                  setMesure({
                    ...mesure,
                    room: { ...mesure.room, other: parseInt(number) },
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <IconButton
            img="/images/arrow.svg"
            onClick={() => onSubmit(mesure)}
            style={{ background: "#63B2AB" }}
          />
          <ProgressBar step={4} />
        </div>
      </div>
      <Img
        img={infoJson.screen4.background}
        className="right"
        size="cover"
        htmlId="project-screen4-bg"
      />
    </section>
  );
};

export default Surface;
