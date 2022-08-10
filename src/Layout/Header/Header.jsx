import React, { useState } from "react";

import logo from "../../Assets/logo-text.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import openSea from "../../Assets/opensea.png";
import etherScan from "../../Assets/etherscan.png";

import "./Header.css";

const Header = () => {
  const [hamOpen, setHamOpen] = useState(false);

  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__left">
          <img src={logo} alt="BUDDHALO" />
        </div>

        <div className="header__hammenuControls">
          <FontAwesomeIcon
            icon={faBars}
            className={`header__hammenuBtn ${hamOpen ? "" : "show-block"}`}
            onClick={() => setHamOpen((prev) => !prev)}
          />
          <FontAwesomeIcon
            icon={faClose}
            className={`header__hammenuBtn ${hamOpen ? "show-block" : ""}`}
            onClick={() => setHamOpen((prev) => !prev)}
          />
        </div>

        <div className={`header__right ${hamOpen ? "hammenu-show" : ""}`}>
          <div className="header__links">
            <a
              href="#"
              className="header__link"
              onClick={() => setHamOpen(false)}
            >
              Link 1
            </a>

            <a
              href="#"
              className="header__link"
              onClick={() => setHamOpen(false)}
            >
              Link 2
            </a>

            <a
              href="#"
              className="header__link"
              onClick={() => setHamOpen(false)}
            >
              Link 3
            </a>
          </div>

          <div className="header__socials">
            <FontAwesomeIcon icon={faDiscord} className="header__social" />

            <FontAwesomeIcon icon={faTwitter} className="header__social" />

            <img src={etherScan} alt="ether scan" className="header__social" />
            <img src={openSea} alt="open sea" className="header__social" />
          </div>

          <button className="header__btn">Lorem</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
