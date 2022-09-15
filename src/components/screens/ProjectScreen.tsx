import React from "react";
import { useNavigate } from "react-router";

import { ProjectContainer } from "../containers/";

const ProjectScreen: React.FC = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate("/home");
  }

  return <ProjectContainer home={goHome} />;
};

export default ProjectScreen;
