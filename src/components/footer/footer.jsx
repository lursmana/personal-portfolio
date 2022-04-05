import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/giorgi.lursmanashvili.14">
          <FaFacebookF />
        </a>
        <a href="https://github.com/lursmana">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
