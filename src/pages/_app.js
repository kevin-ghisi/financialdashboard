import '../styles/globals.scss'

import { Navbar } from '../components/Navbar'
import { UserStocks } from '../components/UserStocks';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
	return (
		<div className={styles.wrapper}>
			<Navbar/>
			<main>
				<Component {...pageProps} />
			</main>
			<UserStocks/>
		</div>
	)
}

export default MyApp
