import React from 'react';
import styles from '../styles/banner.module.css';

const Banner = ({ handleOnClick, bannerButtonText }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      <span className={styles.title1}>Coffee</span>
      <span className={styles.title2}>Connoisseur</span>
    </h1>
    <p className={styles.subTitle}>Discover Your Local Coffee Shops!</p>
    <div className={styles.buttonWrapper}>
      <button className={styles.button} onClick={handleOnClick}>
        {bannerButtonText}
      </button>
    </div>
  </div>
);

export default Banner;
