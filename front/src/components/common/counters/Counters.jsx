
import styles from './counters.module.scss';
const Counters = props => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.count}>
          <span>Minutes</span>
          <p>{props.minutes}</p>
        </div>
        <div className={styles.count}>
          <span>Workouts</span>
          <p>{props.workouts}</p>
        </div>
        <div className={styles.count}>
          <span>Kgs</span>
          <p>{props.kgs}</p>
        </div>
    </div>
  );
};

export default Counters;