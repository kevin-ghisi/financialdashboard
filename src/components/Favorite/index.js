import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/actions/calls';

import { CustomTooltip } from '../Tooltip';

import styles from './styles.module.scss'



export function Favorite({data}) {
    const dispatch = useDispatch();
    const [randomID, setRandomID] = useState(String(Math.round(Math.random())))

    function setFavorite(data) {
        dispatch(addFavorite(data))
    }

    return (
        <>
            <CustomTooltip title="Adicionar aos favoritos" >
                <div className={styles.wrapper} data-for={randomID} >
                    <img src="/icons/star.svg" alt="star icon"className={styles.favorite} onClick={() => setFavorite(data)}/>
                </div>
            </CustomTooltip>
        </>
    );
}
