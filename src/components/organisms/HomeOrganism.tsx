import React from "react";

import {
  NavBar,
  Header,
  Contact,
  Footer,
  Sponsor,
  Quote,
  About,
  Project,
  Skills,
  AccompanimentFs,
  AccompanimentSg,
} from "../section";

interface Props {
  onSubmit: (data: { name: string; phone: string }) => void;
}

const HomeOrganism: React.FC<Props> = ({ onSubmit }) => {
  return (
    <>
      <NavBar />

      <Header />

      <AccompanimentFs />

      <AccompanimentSg />

      <Skills />

      <Project />

      <About />

      <Sponsor />

      <Quote />

      <Contact onSubmit={(data) => onSubmit(data)} />

      <Footer />
    </>
  );
};

export default HomeOrganism;
