import React, { useEffect, useState } from "react";

// import { ProjectOrganism } from "../organisms/";

import "./projectContainer.scss";
interface Props {
  home: () => void;
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const ProjectContainer: React.FC<Props> = ({ home }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <iframe
        id="JotFormIFrame-222712338151044"
        title="Formulaire"
        onLoad={() => {
          window.parent.scrollTo(0, 0);
        }}
        onSubmit={() => {
          console.log("dededde");
        }}
        allowFullScreen={true}
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/222712338151044"
        frameBorder={0}
        style={{
          width: windowSize.innerWidth,
          height: windowSize.innerHeight,
          minWidth: "100%",
          border: "none",
        }}
        scrolling="yes"
      />
    </>
  );
  // return (
  //   <ProjectOrganism goHome={home} onSubmit={(data) => submitData(data)} />
  // );
};
// 222711934685057
export default ProjectContainer;
