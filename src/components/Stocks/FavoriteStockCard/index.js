import React from 'react';
import { formatName, formatNumber } from '../../../redux/actions/calls';

import styles from './styles.module.scss'

export function FavoriteStockCard({data}) {

    console.log("favorite stock", data);

    const formatedPercent = formatNumber(data.payload.changePercent)
    const formatedName = formatName(data.payload.companyName);
    const isPositiveChange = data.isPositive;

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={data.url} alt="" className={styles.logo} />
                <div className={styles.stockNameContainer}>
                    <span className={styles.stockLabel}>{data.payload.symbol}</span>
                    <span className={styles.stockName}>{formatedName}</span>
                </div>
                <div className={styles.stockVariation}>
                    <span className={`${isPositiveChange ? "positive" : "negative"}`}>{formatedPercent}%</span>
                    <img src={`${isPositiveChange ? '/icons/graph-up.svg' : '/icons/graph-down.svg'}`} alt="Graphic Up" />
                </div>
            </div>
            <a href="#" className={styles.icon}>
                <img src="/icons/trash.svg" alt="trash icon"/>
            </a>
        </div>
    );
}
