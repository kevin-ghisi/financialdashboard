import store from '../redux/store';
import { Provider } from 'react-redux';

import { Navbar } from '../components/Navbar'
import { UserStocks } from '../components/UserStocks';

import '../styles/globals.scss'
import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
	return (
        <Provider store={store}>
            <div className={styles.wrapper}>
                <Navbar/>
                <main>
                    <Component {...pageProps} />
                </main>
                <UserStocks/>
            </div>
        </Provider>
	)
}

export default MyApp
