import react from "react";

import { HomeOrganism } from "../organisms/";

const HomeContainer: React.FC = () => {
  const submitData: (data: { name: string; phone: string }) => void = (
    data
  ) => {
    console.log(data);
  };

  return <HomeOrganism onSubmit={(data) => submitData(data)} />;
};

export default HomeContainer;
