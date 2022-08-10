import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer">
        <div className="footer__top">
          {/* <FontAwesomeIcon icon={} className='footer__social'/> */}
          <FontAwesomeIcon icon={faDiscord} className="footer__social" />
          <FontAwesomeIcon icon={faTwitter} className="footer__social" />
          {/* <FontAwesomeIcon icon={} className='footer__social'/>
        <FontAwesomeIcon icon={} className='footer__social'/>
    <FontAwesomeIcon icon={} className='footer__social'/> */}
        </div>

        <div className="footer__center"></div>

        <div className="footer__bottom">
          <div className="footer__link">Lorem</div>

          <div className="footer__link">Lorem</div>

          <div className="footer__link">Lorem</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
