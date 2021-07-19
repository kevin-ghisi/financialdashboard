import React from 'react';
import { useSelector } from 'react-redux';

import {Favorite} from '../../Favorite'

import styles from './styles.module.scss'

export function StockCard({data}) {
    console.log("STOCK CARD", data)

    const isPositiveChange = useSelector(state => state.isChangePositive)
    if(data !== null) formatedPercent = data.changePercent.toFixed(2);

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <Favorite />
                <img src="/twitter.svg" alt="Twitter" className={styles.stockLogo}/>
                <div className={styles.stockNameContainer}>
                    <span className={styles.stockLabel}>{data ? data.symbol : "--"}</span>
                    <span>{data ? data.companyName : "--"}</span>
                </div>
                <div className={styles.stockVariation}>
                    <span>{data ? formatedPercent : "--"}%</span>
                    <img src={`${isPositiveChange ? '/icons/graph-up.svg' : '/icons/graph-down.svg'}`} alt="Graphic down" />
                </div>
            </div>
        </div>
    );
}
