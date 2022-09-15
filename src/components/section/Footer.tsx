import React from "react";

import "./footer.scss";
import infoJson from "../../data/data.json";
import { Link, Img, BinaLogo } from "../atoms";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="top">
        <div className="left">
          {infoJson.Footer.social.map((elm, index) => (
            <div className="item" key={`social${index}`}>
              <Link
                href={elm.link}
                htmlId={`social${index}`}
                value={elm.title}
              />
              <Img img={elm.icon} className="img" htmlId="social-icon" />
            </div>
          ))}
        </div>
        <div className="mid">
          <BinaLogo />
          <h3 id="footer-contact-mail">{infoJson.Footer.mail}</h3>
        </div>
        <div className="right">
          {infoJson.Footer.additionalLink.map((elm, index) => (
            <Link
              href={elm.link}
              htmlId={`add-link${index}`}
              value={elm.title}
              key={`additional-link-${elm}-${index}`}
            />
          ))}
        </div>
      </div>

      <div className="bottom">
        <p id="copyright">{infoJson.Footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
