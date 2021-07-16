import React from 'react';

import styles from './styles.module.scss'

export function Profile() {
  return (
    <a href="#"  className={styles.wrapper}>
        <img src="/profile.svg" alt="User Profile Image" className={styles.userProfileImage} />
        <span>João da Silva Almeida Magalhães</span>
        <img src="/icons/chevron-down.svg" alt="Arrow Down" className={styles.arrowDown}/>
    </a>
  );
}
