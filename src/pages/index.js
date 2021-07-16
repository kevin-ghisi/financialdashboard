import { api } from '../services/api'

import { SearchBar } from '../components/SearchBar'
import { StockCard } from '../components/StockCard'

import styles from './home.module.scss'

export default function Home({ stocks }) {
	return (
		<div className={styles.wrapper}>
            <div className={styles.title}>
                <img src="/icons/icon-dashboard.svg" alt="Dashboard Icon" />
                <h1>Dashboard</h1>
            </div>

            <SearchBar />
        </div>
		)
	}
	
export const getStaticProps = async () => {
	const { data } = await api.get('/stock/aapl/company', {
		params: {
			token: 'sk_1f963a5b1e4d4e838ff51a7ca52d686f'
		}
	})
	
	// create a map of the data received
	const stocks = {
		companyName: data.companyName,
	}
	
	// return the data fetched and revalidade on each 12 hours passed;
	return {
		props: {
			stocks,
		},
		revalidate: 60 * 60 * 12,
	}
}