import React from 'react';

import { StockCard } from '../StockCard';

import styles from './styles.module.scss'

export function RecentStocks() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                <img src="/icons/stats.svg" alt="Dashboard Icon" className={styles.icon}/>
                <h2>Empresas Recentes</h2>
            </div>
            <div className={styles.controls}>
                <a href="">
                    <img src="/icons/arrow-left.svg" alt="Arrow Left Icon" />
                </a>
                <a href="">
                    <img src="/icons/arrow-right.svg" alt="Arrow Right Icon" />
                </a>
            </div>
            
        </div>

        <div className={styles.stocks}>
            <div className={styles.row}>
                <div className={styles.row__inner}>
                    <div className={styles.tile}>
                        <StockCard />
                    </div>
                    <div className={styles.tile}>
                        <StockCard />
                    </div>
                    <div className={styles.tile}>
                        <StockCard />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
}
