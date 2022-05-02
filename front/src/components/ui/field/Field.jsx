import styles from './field.module.scss'
const Field = props => {
  return (
    <>
      <input className={styles.input} 
            type={props.type}
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            name={props.name} />
    </>
  );
};

export default Field;