import React from 'react';

import styles from './styles.module.scss'

export function Items( {image, url} ) {
  return (
    <>
        <div className={styles.wrapper}>
            <a className={styles.item} href={url}>
                <div className={styles.selected}></div>
                <img src={image} alt="Home" />
            </a>
        </div>
    </>
  );
}
