import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { StockCard } from '../StockCard';

import styles from './styles.module.scss'

export function RecentStocks() {
    const recentStocks = useSelector(state => state.recentStocks);

    const listRef = useRef(null);

    const scrollLeft = () => {
        if (listRef.current) {
          listRef.current.scrollBy({
            top: 0,
            left: 500,
            behavior: "smooth",
          });
        }
    };
    
    const scrollRight = () => {
    if (listRef.current) {
        listRef.current.scrollBy({
        top: 0,
        left: -500,
        behavior: "smooth",
        });
    }
    };
        
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    <img src="/icons/stats.svg" alt="Dashboard Icon" className={styles.icon}/>
                    <h2>Empresas Recentes</h2>
                </div>
                <div className={styles.controls}>
                    <img src="/icons/arrow-left.svg" alt="Arrow Left Icon" onClick={scrollRight}/>
                    <img src="/icons/arrow-right.svg" alt="Arrow Right Icon" onClick={scrollLeft}/>
                </div>
                
            </div>

            <div className={styles.recentContainer}>
                <div className={styles.itemContainer} ref={listRef}>
                    {recentStocks.map((stock, index) => {
                        return (
                            <div className={styles.tile} key={index}>
                                    <StockCard data={stock}/>
                            </div>
                        )
                    })}
                </div>
            </div>


            {/* <div className={styles.stocks}>
                <div className={styles.row}>
                    <div className={styles.row__inner}>
                        
                    </div>
                </div>
            </div> */}
        </div>
    );
}
