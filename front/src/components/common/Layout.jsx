
import Header from './header/Header';

import styles from './layout.module.scss';
const Layout = (props) => {
  return (
    <div className={styles.wrapper} style={{backgroundImage: `url(${props.background})`}}>
     <Header/>
     {props.children} 
    </div>
  );
};

export default Layout;