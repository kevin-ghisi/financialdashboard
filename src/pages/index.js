import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Head from 'next/head';

import { api } from '../services/api'

import { SearchBar } from '../components/SearchBar'
import { Chart } from '../components/Chart'
import { RecentStocks } from '../components/Stocks/RecentStocks'

import styles from './home.module.scss' 

export default function Home({  }) {
    const stockData = useSelector(state => state.stockData);
    const companyLogo = useSelector(state => state.logo);

    const formatedPercent = new Intl.NumberFormat().format(stockData[0].changePercent)

    const [isPositiveChange, setIsPositiveChange] = useState();

    // useEffect(() => {
    //     return () => {
    //         if (Math.sign(stockData[0].change) === 1 || Math.sign(stockData[0].change) === 0) {
    //             console.log('positivo')
    //             setIsPositiveChange(true);
    //         }

    //         if (Math.sign(stockData[0].change) === -1 || Math.sign(stockData[0].change) === -0) {
    //             console.log('negativo')
    //             setIsPositiveChange(false);
    //         }
    //     };
    // }, [stockData])

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
                        <img src="/icons/star.svg" alt="star icon"className={styles.favorite}/>
                        <img src={companyLogo.url} alt="" className={styles.stockLogo}/>
                        <div className={styles.stockNameContainer}>
                            <span className={styles.stockLabel}>{stockData[0].symbol}</span>
                            <span>{stockData[0].companyName}</span>
                        </div>
                        <div className={styles.stockVariation}>
                            <div className={styles.price}>
                                {/* <img src={`${isPositiveChange ? '/icons/graph-up.svg' : '/icons/graph-down.svg'}`} alt="Graphic down" /> */}
                                <span>${stockData[0].latestPrice}</span>
                            </div>
                            <div className={styles.percentage}>
                                <span className={styles.positive}>${stockData[0].change} ({formatedPercent}%)</span>
                            </div>
                            
                        </div>
                    </div>

                    <Chart />
                </div>
                

                <RecentStocks />
            </div>
		)
	}
	
// export const getStaticProps = async () => {
// 	const { data } = await api.get('/stock/aapl/company', {
// 		params: {
// 			token: 'sk_1f963a5b1e4d4e838ff51a7ca52d686f'
// 		}
// 	})
	
// 	// create a map of the data received
// 	const stocks = {
// 		companyName: data.companyName,
// 	}
	
// 	// return the data fetched and revalidade on each 12 hours passed;
// 	return {
// 		props: {
// 			stocks,
// 		},
// 		revalidate: 60 * 60 * 12,
// 	}
// }