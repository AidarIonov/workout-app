import { useLocation, useNavigate } from 'react-router-dom';

import userImage from '../../../images/header/user.svg'
import arrowImage from '../../../images/header/arrow.svg'

import styles from './header.module.scss'
import Burger from './burger/Burger'
const Header = props => {
  const {pathname} = useLocation();
  const navigate = useNavigate()


  return (
    <header className={styles.header}>
      {pathname !== '/' ? (
        <button onClick={() => navigate(-1)} className={styles.btn} type="button">
          <img src={arrowImage} alt="Auth" />
        </button>
      ) : (
        <button className={styles.btn} type="button">
          <img src={userImage} alt="Auth" />
        </button>
      )}
      <Burger />
    </header>
  )
}

export default Header
