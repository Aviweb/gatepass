import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../../static/main.css";

export const Footer = () => {
  return (
    <div id="main-footer">
      <div className="footer-content">
        <p>Copyright &copy; 2023, All Rights Reserved</p>
        <div className="social ">
          <a
            href="https://twitter.com/NITJofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.facebook.com/NITJofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/nitjofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/school/dr-b-r-ambedkar-national-institute-of-technology-jalandhar-official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/GDSC-NITJ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};
