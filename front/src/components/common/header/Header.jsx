import React from 'react';

import userImage from '../../../images/header/user.svg'

import styles from './header.module.scss';
import Burger from './burger/Burger';
const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.btn} type='button'>
        <img src={userImage} alt="Auth" />
        </button>
        <Burger/>
    </header>
  );
};

export default Header;