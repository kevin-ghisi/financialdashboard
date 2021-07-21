import React from 'react';

import { Items } from './Items';

import styles from './styles.module.scss'

export function Navbar() {
	return (
			<>
				<div className={styles.wrapper}>
					<a href="/">
						<img src="/monetus.svg" alt="" />
					</a>
					
					
					<Items image="/icons/icon-home.svg" url={"/dashboard"} />
				</div>
			</>
		);
	}
	