import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { getStock } from '../../redux/actions/calls'

import styles from './styles.module.scss'

export function SearchBar({data}) {
    const dispatch = useDispatch();

    const [stock, setStock] = useState(null);

    function getData() {
        dispatch(getStock(stock));
        
    }
    return (
        <div className={styles.wrapper}>
            <input type="text" name="stock" id="stock" placeholder="Buscar Empresa" onChange={(evt) => setStock(evt.target.value)}/>
            <img src="/icons/search.svg" alt="Search icon" className={styles.icon} onClick={() => getData()}/>
        </div>

    );
}