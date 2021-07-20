import React from 'react';
import ReactTooltip from 'react-tooltip';

import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/actions/calls';

import styles from './styles.module.scss'



export function Favorite({data}) {
    const dispatch = useDispatch();

    function setFavorite(data) {
        dispatch(addFavorite(data))
    }

    return (
        <>
            <div className={styles.wrapper} data-tip >
                <img src="/icons/star.svg" alt="star icon"className={styles.favorite} onClick={() => setFavorite(data)}/>
            </div>
            <ReactTooltip place="top" type="dark" effect="solid" className={styles.tooltip}>
                Adicionar aos favoritos!
            </ReactTooltip>
        </>
        
    );
}
