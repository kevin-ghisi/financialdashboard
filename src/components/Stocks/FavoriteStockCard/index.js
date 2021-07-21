import React from 'react';
import { useDispatch } from 'react-redux';
import { formatName, formatNumber, removeFavorite } from '../../../redux/actions/calls';

import styles from './styles.module.scss'

export function FavoriteStockCard({data}) {

    const dispatch = useDispatch();

    const formatedPercent = formatNumber(data.payload.changePercent)
    const formatedName = formatName(data.payload.companyName);
    const isPositiveChange = data.isPositive;

    function deleteFavorite(id) {
        dispatch(removeFavorite(id));
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={`https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${data.payload.symbol}.png`} alt="" className={styles.logo} />
                <div className={styles.stockNameContainer}>
                    <span className={styles.stockLabel}>{data.payload.symbol}</span>
                    <span className={styles.stockName}>{formatedName}</span>
                </div>
                <div className={styles.stockVariation}>
                    <span className={`${isPositiveChange ? "positive" : "negative"}`}>{formatedPercent}%</span>
                    <img src={`${isPositiveChange ? '/icons/graph-up.svg' : '/icons/graph-down.svg'}`} alt="Graphic Up" />
                </div>
            </div>
            <img src="/icons/trash.svg" alt="trash icon" className={styles.icon} onClick={() => deleteFavorite(data.id)}/>
        </div>
    );
}
