
import {useSelector} from 'react-redux';

import Head from 'next/head';

import {formatNumber} from '../redux/actions/calls'

import { SearchBar } from '../components/SearchBar'
import { Chart } from '../components/Chart'
import { RecentStocks } from '../components/Stocks/RecentStocks'
import { Favorite } from '../components/Favorite';

import styles from './home.module.scss' 

export default function Home({  }) {
    const stockData = useSelector(state => state.stockData);
    const isPositiveChange = useSelector(state => state.isChangePositive)

    const formatedChange = formatNumber(stockData[0].change);
    const formatedPercent = formatNumber(stockData[0].changePercent);
    const formatedValue = formatNumber(stockData[0].latestPrice);

	return (
            <div className={styles.wrapper}>
                <Head>
				    <title>Dashboard</title>
			    </Head>
                
                <div className={styles.title}>
                    <img src="/icons/icon-dashboard.svg" alt="Dashboard Icon" />
                    <h1>Dashboard</h1>
                </div>

                <SearchBar data={stockData[0]}/>

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
                                <span>${formatedValue}</span>
                            </div>
                            <div className={styles.percentage}>
                                <span className={`${isPositiveChange ? styles.positive : styles.negative}`}>${formatedChange} ({formatedPercent}%)</span>
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