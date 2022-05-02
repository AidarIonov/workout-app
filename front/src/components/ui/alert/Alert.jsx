import cn from 'classnames';

import styles from "./alert.module.scss";
const Alert = ({type = 'success', children, ...props}) => {
  return (
    <div className={cn(styles.alert, {
      [styles.error]: type === 'error',
      [styles.warning]: type === 'warning',
      [styles.info]: type === 'info'
    })}>
      <h3>{children}</h3>
    </div>
  );
};

export default Alert;