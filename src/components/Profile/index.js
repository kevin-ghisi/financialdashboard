import React from 'react';

import styles from './styles.module.scss'

export function Profile() {
  return (
    <div  className={styles.wrapper}>
        <img src="https://github.com/kevin-ghisi.png" alt="User Profile Image" className={styles.userProfileImage} />
        <span>Kévin Ghisi</span>
        <img src="/icons/chevron-down.svg" alt="Arrow Down" className={styles.arrowDown}/>
    </div>
  );
}
