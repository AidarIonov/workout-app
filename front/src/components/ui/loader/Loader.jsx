

import styles from './loader.module.scss'
const Loader = () => {
  return (
    <div className={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
