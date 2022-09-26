import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

import "./navBar.scss";
import useWindowDimensions from "../../utils/windowSizeHook";
import { IconButton, Button, Link, BinaLogo } from "../atoms";
import infoJson from "../../data/data.json";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const [isColumn, setIsColumn] = useState<Boolean>(false);
  const [isDefault, setIsDefault] = useState<Boolean>(true);
  const navElm = useRef(null);
  const { width } = useWindowDimensions();

  function scrollToHeader() {
    const elm = document.querySelector("#header");
    elm?.scrollIntoView();
  }

  function scrollToContact() {
    const elm = document.querySelector("#contact");
    elm?.scrollIntoView();
  }

  const onClose: () => void = () => {
    const elm: any = navElm.current;
    elm.className = `right show slide-out ${
      isDefault ? "show-default-color" : "show-variant-color"
    }`;
    setTimeout(() => setIsColumn(!isColumn), 700);
  };

  function changeColor() {
    if (window.scrollY >= 900) {
      setIsDefault(false);
    } else {
      setIsDefault(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => changeColor());

    return window.removeEventListener("scroll", () => changeColor());
  }, []);

  return (
    <nav
      id="home-nav"
      className={`${
        isDefault ? "home-nav-default-color" : "home-nav-variant-color"
      }`}
    >
      <div className={`bina-logo ${isDefault && "bina-logo-filter"}`}>
        <BinaLogo onClick={scrollToHeader} size="md" />
      </div>

      <div
        className={`right ${
          isColumn &&
          `show slide-in ${
            isDefault ? "show-default-color" : "show-variant-color"
          }`
        }`}
        ref={navElm}
      >
        <div
          className={`navigation ${
            isDefault ? "navigation-default-color" : "navigation-variant-color"
          }`}
        >
          {infoJson.NavBar.Links.map((elm, index) => (
            <Link
              htmlId={`navbar${index}`}
              key={`link-${elm.title}`}
              href={elm.href}
              value={elm.title}
              colorStyle={isDefault ? "#F0E7D6" : "black"}
            />
          ))}
        </div>

        <div className={`link ${isDefault && "link-default-color"}`}>
          <Button
            value={infoJson.NavBar.Boutton}
            onClick={() => navigate("/project")}
            className={
              isDefault
                ? "nav-button-default-color"
                : "nav-button-variant-color"
            }
            htmlId="navbar-button"
          />
          <IconButton
            img="/images/letter.webp"
            onClick={() => scrollToContact()}
            style={{ border: isDefault ? "#F0E7D6" : "black" }}
          />
        </div>
      </div>

      {width <= 1200 && !isColumn && (
        <div
          className={`icon ${
            isDefault ? "icon-default-color" : "icon-variant-color"
          }`}
        >
          <IconButton
            img="/images/menu.webp"
            onClick={() => setIsColumn(!isColumn)}
          />
        </div>
      )}

      {width <= 1200 && isColumn && (
        <div
          className={`icon ${
            isDefault ? "icon-default-color" : "icon-variant-color"
          }`}
        >
          <IconButton img="/images/close.webp" onClick={onClose} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
