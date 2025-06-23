import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faHeart,
    faCode,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p className="footer-powered">Powered by DineDaires</p>
                <p className="footer-built">Proudly built with ⚛ React</p>
                <p className="footer-contact">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <a href="mailto:anushiniananth@gmail.com">
                        anushiniananth@gmail.com
                    </a>
                </p>
                <p className="footer-contact">
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    +91 98765 43210
                </p>
            </div>

            <div className="footer-right">
                <p className="footer-credits">
                    <FontAwesomeIcon icon={faCode} className="icon" /> by{" "}
                    <a
                        href="https://github.com/AnushiniAnanth"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @anushiniananth
                    </a>
                </p>
                <p className="footer-thanks">
                    Made possible by
                    <FontAwesomeIcon icon={faCoffee} className="icon ml-2" />
                    and
                    <FontAwesomeIcon icon={faHeart} className="icon ml-2" />
                </p>
                <div className="footer-socials">
                    <a
                        href="https://twitter.com/AnushiniAnanth"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://github.com/AnushiniAnanth"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
