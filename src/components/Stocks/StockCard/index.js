import React from 'react';
import { formatName, formatNumber } from '../../../redux/actions/calls';

import {Favorite} from '../../Favorite'

import styles from './styles.module.scss'

export function StockCard({data}) {
    console.log('stock card', data)

    const isPositiveChange = data.isPositive;
    const formatedPercent = formatNumber(data.changePercent)
    const formatedName = formatName(data.companyName);

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <Favorite data={data}/>
                <img src={data.url} alt="Twitter" className={styles.stockLogo}/>
                <div className={styles.stockNameContainer}>
                    <span className={styles.stockLabel}>{data ? data.symbol : "--"}</span>
                    <span>{data ? formatedName : "--"}</span>
                </div>
                <div className={styles.stockVariation}>
                    <span className={`${isPositiveChange ? 'positive' : 'negative'}`}>{data ? formatedPercent : "--"}%</span>
                    <img src={`${isPositiveChange ? '/icons/graph-up.svg' : '/icons/graph-down.svg'}`} alt="Graphic down" />
                </div>
            </div>
        </div>
    );
}
