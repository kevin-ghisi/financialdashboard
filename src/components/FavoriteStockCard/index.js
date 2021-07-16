import React from 'react';

import styles from './styles.module.scss'

export function FavoriteStockCard() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.card}>
            <img src="/twitter.svg" alt="Twitter" />
            <div className={styles.stockNameContainer}>
                <span className={styles.stockLabel}>TWTR</span>
                <span className={styles.stockName}>Twitter</span>
            </div>
            <div className={styles.stockVariation}>
                <span>15.8%</span>
                <img src="/icons/graph-up.svg" alt="Graphic Up" />
            </div>
        </div>
        <a href="#" className={styles.icon}>
            <img src="/icons/trash.svg" alt="trash icon"/>    
        </a>
    </div>
  );
}
