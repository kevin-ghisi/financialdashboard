import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Head from 'next/head';

import { api } from '../services/api'

import { SearchBar } from '../components/SearchBar'
import { Chart } from '../components/Chart'
import { RecentStocks } from '../components/Stocks/RecentStocks'
import { Favorite } from '../components/Favorite';

import styles from './home.module.scss' 

export default function Home({  }) {
    const stockData = useSelector(state => state.stockData);
    const isPositiveChange = useSelector(state => state.isChangePositive)

    const formatedPercent = stockData[0].changePercent.toFixed(2);

	return (
            <div className={styles.wrapper}>
                <Head>
				    <title>Dashboard | Monetus</title>
			    </Head>
                
                <div className={styles.title}>
                    <img src="/icons/icon-dashboard.svg" alt="Dashboard Icon" />
                    <h1>Dashboard</h1>
                </div>

                <SearchBar />

                <div className={styles.chartWrapper}>
                    <div className={styles.card}>
                        <Favorite data={stockData[0]}/>
                        <div className={styles.stockNameContainer}>
                            <span className={styles.stockLabel}>{stockData[0].symbol}</span>
                            <span>{stockData[0].companyName}</span>
                        </div>
                        <div className={styles.stockVariation}>
                            <div className={styles.price}>
                                <img src={`${isPositiveChange ? '/icons/graph-up.svg' : '/icons/graph-down.svg'}`} alt="Graphic down" />
                                <span>${stockData[0].latestPrice}</span>
                            </div>
                            <div className={styles.percentage}>
                                <span className={`${isPositiveChange ? styles.positive : styles.negative}`}>${stockData[0].change} ({formatedPercent}%)</span>
                            </div>
                            
                        </div>
                    </div>

                    <div className={styles.chart}>
                        <Chart />
                    </div>
                    
                </div>
                

                <RecentStocks />
            </div>
    )
}