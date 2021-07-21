import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addFavorite, addFavoriteFromRecent } from '../../redux/actions/calls';

import { CustomTooltip } from '../Tooltip';

import styles from './styles.module.scss'



export function Favorite({data, isRecent}) {
    const dispatch = useDispatch();
    const [randomID, setRandomID] = useState(String(Math.round(Math.random())))

    function setFavorite(data) {

        if (isRecent) {
            dispatch(addFavoriteFromRecent(data))
        } else {
            dispatch(addFavorite(data))
        }
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
