import react from "react";
import sendEmailFromEmailJS from "../../api/sendEmail";

import { HomeOrganism } from "../organisms/";

const HomeContainer: React.FC = () => {
  const submitData: (data: { name: string; phone: string }) => void = async (
    data
  ) => {
    await sendEmailFromEmailJS(data, "us");
  };

  return <HomeOrganism onSubmit={(data) => submitData(data)} />;
};

export default HomeContainer;
