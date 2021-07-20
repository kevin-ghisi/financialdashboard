import React from 'react';
import { useSelector } from 'react-redux';

import { Profile } from '../Profile';
import { FavoriteStockCard } from '../Stocks/FavoriteStockCard';

import styles from './styles.module.scss'

export function UserStocks() {
    const favoriteStocks = useSelector(state => state.favoriteStocks);

    return (
        <div className={styles.wrapper}>

            <Profile />

            <div className={styles.title}>
            <img src="/icons/star-filled.svg" alt="Filled Star" />
            <h2>Empresas Favoritas</h2>
            </div>
            {favoriteStocks.map((stock) => {
                console.log("UserStocks", stock)
                return (
                    <FavoriteStockCard data={stock} key={stock.payload.symbol}/>
                )
            })}
        </div>
    );
}