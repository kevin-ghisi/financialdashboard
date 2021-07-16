import React from 'react';

import styles from './styles.module.scss'

export function SearchBar() {
  return (
      <div className={styles.wrapper}>
        <input type="text" name="stock" id="stock" placeholder="Buscar Empresa"/>
      </div>
    
  );
}
