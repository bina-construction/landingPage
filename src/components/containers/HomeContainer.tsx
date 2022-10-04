import react from "react";
import sendEmailFromEmailJS from "../../api/sendEmail";

import { HomeOrganism } from "../organisms/";

const HomeContainer: React.FC = () => {
  const submitData: (data: { name: string; phone: string }) => void = async (
    data
  ) => {
    // console.log(data);

    await sendEmailFromEmailJS(data, "us");
    await sendEmailFromEmailJS(data, "user");
  };

  return <HomeOrganism onSubmit={(data) => submitData(data)} />;
};

export default HomeContainer;
