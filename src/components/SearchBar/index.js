import React from 'react';

import styles from './styles.module.scss'

export function SearchBar() {
  return (
      <div className={styles.wrapper}>
        <input type="text" name="stock" id="stock" placeholder="Buscar Empresa"/>
        <a href="#">
            <img src="/icons/search.svg" alt="Search icon" className={styles.icon}/>
        </a>
      </div>
    
  );
}
