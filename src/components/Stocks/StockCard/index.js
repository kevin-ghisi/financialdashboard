import React from 'react';

import styles from './styles.module.scss'

export function StockCard() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.card}>
            <img src="/icons/star.svg" alt="star icon"className={styles.favorite}/>
            <img src="/twitter.svg" alt="Twitter" className={styles.stockLogo}/>
            <div className={styles.stockNameContainer}>
                <span className={styles.stockLabel}>TWTR</span>
                <span>Twitter</span>
            </div>
            <div className={styles.stockVariation}>
                <span>15.8%</span>
                <img src="/icons/graph-up.svg" alt="Graphic Up" />
            </div>
        </div>
    </div>
  );
}
