import React, { useState } from "react";

import logo from "../../Assets/logo-text.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import openSea from "../../Assets/opensea.png";
import etherScan from "../../Assets/etherscan.png";
import discord from "../../Assets/discord.png";
import twitter from "../../Assets/twitter.png";

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
              视觉形象
            </a>

            <a
              href="#"
              className="header__link"
              onClick={() => setHamOpen(false)}
            >
              路线
            </a>

            <a
              href="#"
              className="header__link"
              onClick={() => setHamOpen(false)}
            >
              团队
            </a>
          </div>

          <div className="header__socials">
            <a href="#">
              <img src={discord} alt="discord" className="header__social" />
            </a>

            <a href="#">
              <img src={twitter} alt="twitter" className="header__social" />
            </a>

            <a href="#">
              <img
                src={etherScan}
                alt="ether scan"
                className="header__social"
              />
            </a>

            <a href="#">
              <img src={openSea} alt="open sea" className="header__social" />
            </a>
          </div>

          <a
            target={"blank"}
            href="http://meta.cangfuwenhua.cn"
            className="header__btn"
          >
            立即参与
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
