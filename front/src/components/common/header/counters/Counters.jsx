
import styles from './counters.module.scss';
const Counters = () => {

  const counters = [
    {type: 'minutes', count: 7},
    {type: 'workouts', count: 3},
    {type: 'kgs', count: 1}
  ]

  return (
    <div className={styles.wrapper}>
      {counters.map(item => (
        <div className={styles.count}>
          <span>{item.type}</span>
          <p>{item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Counters;