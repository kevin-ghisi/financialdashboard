import { api } from '../services/api'

import { SearchBar } from '../components/SearchBar'
import { Chart } from '../components/Chart'
import { RecentStocks } from '../components/Stocks/RecentStocks'

import styles from './home.module.scss'

export default function Home({ stocks }) {
	return (
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <img src="/icons/icon-dashboard.svg" alt="Dashboard Icon" />
                    <h1>Dashboard</h1>
                </div>

                <SearchBar />

                <div className={styles.chartWrapper}>
                    <div className={styles.card}>
                        <img src="/icons/star.svg" alt="star icon"className={styles.favorite}/>
                        <img src="/twitter.svg" alt="Twitter" className={styles.stockLogo}/>
                        <div className={styles.stockNameContainer}>
                            <span className={styles.stockLabel}>TWTR</span>
                            <span>Twitter</span>
                        </div>
                        <div className={styles.stockVariation}>
                            <div className={styles.price}>
                                <img src="/icons/graph-down.svg" alt="Graphic down" />
                                <span>$265</span>
                            </div>
                            <div className={styles.percentage}>
                                <span className={styles.positive}>$-0.09 (-0.03%)</span>
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