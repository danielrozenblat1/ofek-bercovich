import React from 'react';
import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faTiktok, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
const SocialIcons = () => {
  return (
    <ul className={styles.iconList}>
 
      <li className={styles.iconContent}>
        <a
          data-social="tiktok"
          aria-label="tiktok"
          href="https://www.tiktok.com/@ofekshealingchannel?_t=8nFh8Dvvo2b&amp;_r=1s"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faTiktok} />
          </svg>
        </a>
        <div className={styles.tooltip}>טיקטוק</div>
      </li>
 
      <li className={styles.iconContent}>
        <a
          data-social="facebook"
          aria-label="facebook"
          href="https://www.facebook.com/profile.php?id=61551928285487"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faFacebook} />
          </svg>
        </a>
        <div className={styles.tooltip}>פייסבוק</div>
      </li>
 
      <li className={styles.iconContent}>
        <a
          data-social="instagram"
          aria-label="instagram"
          href="https://www.instagram.com/ofek_bercovich/"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faInstagram} />
          </svg>
        </a>
        <div className={styles.tooltip}>אינסטגרם</div>
      </li>
 
    </ul>
  );
};

export default SocialIcons;