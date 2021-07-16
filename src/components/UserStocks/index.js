import React from 'react';

import { Profile } from '../Profile';
import { FavoriteStockCard } from '../FavoriteStockCard';

import styles from './styles.module.scss'

export function UserStocks() {
  return (
    <div className={styles.wrapper}>

        <Profile />

        <div className={styles.title}>
          <img src="/icons/star-filled.svg" alt="Filled Star" />
          <h2>Empresas Favoritas</h2>
        </div>

        <FavoriteStockCard />
        <FavoriteStockCard />
        <FavoriteStockCard />
    </div>
  );
}