import React, { useEffect } from "react";

import { HomeContainer } from "../containers/";
import { useLocation } from "react-router-dom";

const HomeScreen: React.FC = () => {
  let location = useLocation();
  useEffect(() => {
    if (!!location.hash) {
      const hash = location.hash.split("#").reverse()[0];
      if (
        [
          "accompaniment-fs",
          "accompaniment-sg",
          "home-skills",
          "home-project",
          "about",
        ].includes(hash)
      ) {
        document.getElementById(hash)!.scrollIntoView({ behavior: "smooth" });
      } else if (location.hash.includes("contact")) {
        document
          .getElementById("contact")!
          .scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return <HomeContainer />;
};

export default HomeScreen;
