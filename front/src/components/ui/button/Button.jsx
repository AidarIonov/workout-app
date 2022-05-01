import styles from './button.module.scss';
const Button = ({children, onClick, className,  ...props}) => {
  return (
    <button className={`${styles.btn} ${className ? className : ''}`} type={props.type}
            onClick={onClick ? () => onClick() : null}>
         {children}
    </button>
  );
};

export default Button;