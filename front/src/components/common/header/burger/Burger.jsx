import { useState } from 'react';
import { Link } from 'react-router-dom';
import burgerImage from '../../../../images/header/hamburger.svg'
import burgerCloseImage from '../../../../images/header/hamburger-close.svg'

import styles from './burger.module.scss';
import { menu } from './menuBase';
const Burger = () => {
  const [active, setActive] = useState(false);

  const handleLogout = e => {
    e.preventDefault();
    console.log('logout');
  }

  return (
    <div className={styles.wrapper}>
    <button onClick={() => setActive(!active)} className={styles.btn} type='button'>
        <img src={active ? burgerCloseImage : burgerImage} alt="Auth" />
    </button>
    <nav className={active ? `${styles.menu} ${styles.show}` : styles.menu}>
      <ul>
        {menu.map(item => (
          <li key={item.display}>
          <Link to={item.path}>{item.display}</Link>
        </li>
        ))}
        <li>
          <a onClick={handleLogout} href='#'>Logout</a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Burger;