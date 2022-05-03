import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import burgerImage from '../../../../images/header/hamburger.svg'
import burgerCloseImage from '../../../../images/header/hamburger-close.svg'

import styles from './burger.module.scss';
import { menu } from './menuBase';
import { useOutsideAlerter } from '../../../../hooks/useOutsideAlerter';
import { useAuth } from '../../../../hooks/useAuth';
const Burger = () => {
  const {setIsAuth} = useAuth()
  const navigate = useNavigate()
  const {ref, isComponentVisible, setIsComponentVisible} =useOutsideAlerter(false);
  const {isAuth} = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuth(false)
    setIsComponentVisible(false)
  }

  return (
    <div className={styles.wrapper} ref={ref}>
    <button onClick={() => setIsComponentVisible(!isComponentVisible)} className={styles.btn} type='button'>
        <img src={isComponentVisible ? burgerCloseImage : burgerImage} alt="Auth" />
    </button>
    <nav className={isComponentVisible ? `${styles.menu} ${styles.show}` : styles.menu}>
      <ul>
        {menu.map(item => (
          <li key={item.display}>
          <Link to={item.path}>{item.display}</Link>
        </li>
        ))}
        {isAuth ? (
        <li>
          <a onClick={handleLogout} href='#'>Logout</a>
        </li>
        ) : (
        <li>
          <Link to='/auth'>Login</Link>
        </li>
        )}
      </ul>
    </nav>
    </div>
  );
};

export default Burger;