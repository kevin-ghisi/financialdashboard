import React from 'react';
import { useSelector } from 'react-redux';

import { StockCard } from '../StockCard';

import styles from './styles.module.scss'

export function RecentStocks() {
    const recentStocks = useSelector(state => state.recentStocks);
        
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
                        {recentStocks.map((stock) => {
                            return (
                                <div className={styles.tile} key={stock.companyName}>
                                    <StockCard data={stock}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    );
}
