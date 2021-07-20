import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { getStock, getLogo, getChart, addRecent } from '../../redux/actions/calls'

import styles from './styles.module.scss'

export function SearchBar({data}) {
    const dispatch = useDispatch();

    const [stock, setStock] = useState(null);

    function getData(data) {
        dispatch(getStock(stock));
        dispatch(getLogo(stock));
        dispatch(getChart(stock));
        setTimeout(() => dispatch(addRecent(data)), 1500)
        
    }
    return (
        <div className={styles.wrapper}>
            <input type="text" name="stock" id="stock" placeholder="Buscar Empresa" onChange={(evt) => setStock(evt.target.value)}/>
            <a href="#" onClick={() => getData(data)}>
                <img src="/icons/search.svg" alt="Search icon" className={styles.icon}/>
            </a>
        </div>

    );
}