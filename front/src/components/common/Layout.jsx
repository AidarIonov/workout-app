import Header from './header/Header'

import styles from './layout.module.scss'
const Layout = (props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div
        className={styles.page_header}
        style={{
          backgroundImage: `url(${props.background})`,
          height: props.height,
        }}
      > 
      <div className={styles.text}>
        <span>{props.minutes && `${props.minutes}min`}</span>
        <h1>{props.title}</h1>
      </div>
      </div>
      {props.children}
    </div>
  )
}

export default Layout
