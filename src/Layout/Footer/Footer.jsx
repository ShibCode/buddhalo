import React from "react";

import logo from "../../Assets/footer-logo.png";

import chatIcon from "../../Assets/chat-icon.png";
import discord from "../../Assets/discord.png";
import twitter from "../../Assets/twitter.png";
import openSea from "../../Assets/opensea.png";
import etherScan from "../../Assets/etherscan.png";
import footerIcon from "../../Assets/footer-icon.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer">
        <div className="footer__top">
          <a href="#">
            <img src={chatIcon} alt="" className="footer__social" />
          </a>
          <a href="#">
            <img src={discord} alt="" className="footer__social" />
          </a>
          <a href="#">
            <img src={twitter} alt="" className="footer__social" />
          </a>
          <a href="#">
            <img src={etherScan} alt="" className="footer__social" />
          </a>
          <a href="#">
            <img src={openSea} alt="" className="footer__social" />
          </a>
          <a href="#">
            <img src={footerIcon} alt="" className="footer__social" />
          </a>
        </div>

        <div className="footer__center">
          <img src={logo} alt="BUDDHALO" />
        </div>

        <div className="footer__bottom">
          <div className="footer__link">白皮书</div>

          <div className="footer__link">@2022BUDDHALO</div>

          <div className="footer__link">条款和条件</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
