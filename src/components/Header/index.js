import React from "react";
import Link from "gatsby-link";

import { links } from "../../data/socialLinks";
import styles from "./header.module.css";

const Header = () => (
  <div className={styles.headerContainer}>
    <div className={styles.headerMaxWidthContainer}>
      <h2 className={styles.headerH1}>
        <Link to="/" className={styles.headerLinkStyle}>
          about
        </Link>
        &nbsp;/&nbsp;
          <Link to='/contact' className={styles.headerLinkStyle}>
          Projects
          </Link>
       
      </h2>
    </div>
  </div>
);

export default Header;
