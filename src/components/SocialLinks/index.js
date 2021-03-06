import React from "react";
import {  FaEnvelope, FaTwitter, FaGithub, FaLinkedin, FaPhone } from "react-icons/lib/fa";

import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:nathan.j.i.telford@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://github.com/NathanJTelford?tab=repositories">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/?lang=en">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/nathanjtelford/'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href='tel:+13852369850' >
            <FaPhone />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
