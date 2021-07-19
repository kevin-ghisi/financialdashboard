import React from 'react';

import styles from './styles.module.scss'

export function FavoriteStockCard({data}) {

    const formatedPercent = data.payload.changePercent.toFixed(2);
    const isPositiveChange = data.isPositive;

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={data.logo.url} alt="Twitter" className={styles.logo} />
                <div className={styles.stockNameContainer}>
                    <span className={styles.stockLabel}>{data.payload.symbol}</span>
                    <span className={styles.stockName}>{data.payload.companyName}</span>
                </div>
                <div className={styles.stockVariation}>
                    <span className={`${isPositiveChange ? styles.positive : styles.negative}`}>{formatedPercent}%</span>
                    <img src={`${isPositiveChange ? '/icons/graph-up.svg' : '/icons/graph-down.svg'}`} alt="Graphic Up" />
                </div>
            </div>
            <a href="#" className={styles.icon}>
                <img src="/icons/trash.svg" alt="trash icon"/>    
            </a>
        </div>
    );
}
