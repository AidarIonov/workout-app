
import Header from './header/Header';

import styles from './layout.module.scss';
const Layout = (props) => {
  return (
    <div className={styles.wrapper}>
     <Header/>
     {props.children} 
    </div>
  );
};

export default Layout;