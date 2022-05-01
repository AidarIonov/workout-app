import React from 'react';

import userImage from '../../../images/header/user.svg'
import burgerImage from '../../../images/header/hamburger.svg'

import styles from './header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.btn} type='button'>
        <img src={userImage} alt="Auth" />
        </button>
        <button className={styles.btn} type='button'>
        <img src={burgerImage} alt="Auth" />
        </button>
    </header>
  );
};

export default Header;