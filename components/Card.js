/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/card.module.css';
import cls from 'classnames';

const Card = ({ names, imageUrl, href }) => (
  <div className={styles.cardContainer}>
    <Link href={href}>
      <a className={styles.cardLink}>
        <div className={cls('glass', styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{names}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              src={imageUrl}
              width={280}
              height={180}
              className={styles.cardImage}
            />
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default Card;
