import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import userImage from '../../../images/header/user.svg'
import arrowImage from '../../../images/header/arrow.svg'
import authImage from '../../../images/header/dumbbell.svg';


import styles from './header.module.scss'
import Burger from './burger/Burger'
const Header = props => {
  const {pathname} = useLocation();
  const navigate = useNavigate()

  const {isAuth} = useAuth();

  return (
    <header className={styles.header}>
      {pathname !== '/' ? (
        <button onClick={() => navigate(-1)} className={styles.btn} type="button">
          <img src={arrowImage} alt="Auth" draggable={false} />
        </button>
      ) : (
        <button onClick={() => navigate(isAuth ? '/profile' : '/auth')} className={styles.btn} type="button">
          <img draggable={false} src={isAuth ? authImage : userImage} alt="Auth" height='40' />
        </button>
      )}
      <Burger />
    </header>
  )
}

export default Header
