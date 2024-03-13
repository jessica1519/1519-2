import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialBar.module.css";

function SocialBar() {
  return (
    <div>
      <section className="mb-4">
        <a href="">
          <FontAwesomeIcon className={styles.iconSocial} icon={faFacebook} />
        </a>

        <a href="">
          <FontAwesomeIcon className={styles.iconSocial} icon={faInstagram} />
        </a>

        <a href="">
          <FontAwesomeIcon className={styles.iconSocial} icon={faTiktok} />
        </a>
      </section>
    </div>
  );
}

export default SocialBar;
